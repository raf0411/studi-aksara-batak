import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeftRight, Copy, Volume2, RotateCcw } from 'lucide-react'

export default function Translator() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [translationMode, setTranslationMode] = useState<'latin-to-batak' | 'batak-to-latin'>('latin-to-batak')

  const handleTranslate = () => {
    // Placeholder translation logic
    if (translationMode === 'latin-to-batak') {
      setOutputText('[Terjemahan Aksara Batak akan muncul di sini]')
    } else {
      setOutputText('[Terjemahan Latin akan muncul di sini]')
    }
  }

  const handleSwapMode = () => {
    setTranslationMode(prev => 
      prev === 'latin-to-batak' ? 'batak-to-latin' : 'latin-to-batak'
    )
    setInputText(outputText)
    setOutputText(inputText)
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handlePronounce = (text: string) => {
    if ('speechSynthesis' in window && text.trim()) {
      // Cancel any ongoing speech
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(text)
      
      // Try to find Indonesian voice, fallback to English or default
      const voices = speechSynthesis.getVoices()
      const indonesianVoice = voices.find(voice => 
        voice.lang.includes('id') || voice.lang.includes('ID')
      )
      const englishVoice = voices.find(voice => 
        voice.lang.includes('en') || voice.lang.includes('EN')
      )
      
      if (indonesianVoice) {
        utterance.voice = indonesianVoice
      } else if (englishVoice) {
        utterance.voice = englishVoice
      }
      
      // Adjust speech parameters for better clarity
      utterance.rate = 0.7 // Slower speech for better understanding
      utterance.pitch = 1.0
      utterance.volume = 0.8
      
      speechSynthesis.speak(utterance)
    } else {
      console.warn('Speech synthesis not supported in this browser or no text to pronounce')
    }
  }

  // Load speech synthesis voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Load voices - some browsers need this
      const loadVoices = () => {
        speechSynthesis.getVoices()
      }
      
      loadVoices()
      
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices
      }
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-batak-brown-dark mb-4">
          Alat Penerjemah
        </h1>
        <p className="text-lg text-batak-brown-medium max-w-2xl mx-auto">
          Terjemahkan teks antara aksara Latin dan Aksara Batak. Sempurna untuk belajar dan memahami aksara tradisional.
        </p>
      </motion.div>

      {/* Translation Mode Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-center gap-4 p-4 bg-batak-brown-muted rounded-lg"
      >
        <span className="font-medium text-batak-brown-dark">
          {translationMode === 'latin-to-batak' ? 'Aksara Latin' : 'Aksara Batak'}
        </span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleSwapMode}
          className="bg-batak-brown-light hover:bg-batak-brown-medium border-batak-brown-dark"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </Button>
        <span className="font-medium text-batak-brown-dark">
          {translationMode === 'latin-to-batak' ? 'Aksara Batak' : 'Aksara Latin'}
        </span>
      </motion.div>

      {/* Translator Interface */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Input Panel */}
        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-batak-brown-dark">
              <span>
                {translationMode === 'latin-to-batak' ? 'Aksara Latin' : 'Aksara Batak'}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleCopy(inputText)} className="hover:bg-batak-brown-muted">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handlePronounce(inputText)}
                  disabled={!inputText.trim()}
                  className="hover:bg-batak-brown-muted"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription className="text-batak-brown-dark/80">
              Masukkan teks yang ingin diterjemahkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ketik teks ${translationMode === 'latin-to-batak' ? 'Latin' : 'Aksara Batak'} Anda di sini...`}
              className="w-full h-32 p-3 border border-batak-brown-medium rounded-md resize-none focus:ring-batak-brown-dark focus:border-batak-brown-dark bg-white"
            />
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-batak-brown-dark/70">
                {inputText.length} karakter
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleClear} className="border-batak-brown-medium hover:bg-batak-brown-muted">
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Bersihkan
                </Button>
                <Button onClick={handleTranslate} disabled={!inputText.trim()}>
                  Terjemahkan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-batak-brown-dark">
              <span>
                {translationMode === 'latin-to-batak' ? 'Aksara Batak' : 'Aksara Latin'}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleCopy(outputText)} className="hover:bg-batak-brown-muted">
                  <Copy className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handlePronounce(outputText)}
                  disabled={!outputText.trim()}
                  className="hover:bg-batak-brown-muted"
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription className="text-batak-brown-dark/80">
              Hasil terjemahan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-32 p-3 bg-batak-brown-muted border border-batak-brown-medium rounded-md overflow-y-auto">
              {outputText ? (
                <span className={`${translationMode === 'latin-to-batak' ? 'text-2xl' : 'text-base'} text-batak-brown-dark`}>
                  {outputText}
                </span>
              ) : (
                <span className="text-batak-brown-dark/60 italic">
                  Terjemahan akan muncul di sini...
                </span>
              )}
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-batak-brown-dark/70">
                {outputText.length} karakter
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-lg text-batak-brown-dark">Terjemahan Akurat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark/80">
              Algoritma kami memastikan konversi yang akurat antara aksara Latin dan Aksara Batak.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-lg text-batak-brown-dark">Panduan Pelafalan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark/80">
              Pelajari pelafalan yang benar dengan panduan audio untuk setiap karakter dan kata.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-lg text-batak-brown-dark">Salin & Bagikan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark/80">
              Mudah menyalin terjemahan dan membagikannya dengan orang lain untuk tujuan pembelajaran.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Usage Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-batak-brown-muted border border-batak-brown-medium rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-batak-brown-dark mb-3">
          Tips Terjemahan
        </h3>
        <ul className="space-y-2 text-batak-brown-dark/80">
          <li>• Mulai dengan kata dan frasa sederhana untuk akurasi yang lebih baik</li>
          <li>• Periksa galeri karakter sebagai referensi saat meninjau terjemahan</li>
          <li>• Gunakan fitur audio untuk mempelajari pelafalan yang tepat</li>
          <li>• Latih menulis karakter yang diterjemahkan untuk meningkatkan pengenalan</li>
        </ul>
      </motion.div>
    </div>
  )
}
