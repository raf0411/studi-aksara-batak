import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeftRight, Copy, Volume2, RotateCcw } from 'lucide-react'
import { translateLatinToBatakToba, translateBatakTobaToLatin } from '@/lib/batak'
import type { TranslationResult } from '@/lib/batak'

export default function Translator() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [translationMode, setTranslationMode] = useState<'latin-to-batak' | 'batak-to-latin'>('latin-to-batak')
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false)
  const [translationError, setTranslationError] = useState<string | null>(null)
  const [translationWarnings, setTranslationWarnings] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    setInputText(newText)
    
    setOutputText('')
    setTranslationError(null)
    setTranslationWarnings([])
  }

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setOutputText('')
      setTranslationError(null)
      setTranslationWarnings([])
      return
    }

    let result: TranslationResult

    if (translationMode === 'latin-to-batak') {
      result = translateLatinToBatakToba(inputText)
    } else {
      result = translateBatakTobaToLatin(inputText)
    }

    if (result.success) {
      setOutputText(result.result)
      setTranslationError(null)
      setTranslationWarnings(result.warnings || [])
    } else {
      setOutputText('')
      setTranslationError(result.errors?.[0] || 'Translation failed')
      setTranslationWarnings([])
    }
  }

  const handleSwapMode = () => {
    const newMode = translationMode === 'latin-to-batak' ? 'batak-to-latin' : 'latin-to-batak'
    setTranslationMode(newMode)
    
    const tempInput = inputText
    const tempOutput = outputText
    setInputText(tempOutput)
    setOutputText(tempInput)
    
    setTranslationError(null)
    setTranslationWarnings([])
    
    if (tempOutput.trim()) {
    }
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    setTranslationError(null)
    setTranslationWarnings([])
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setShowCopyConfirmation(true)
      setTimeout(() => {
        setShowCopyConfirmation(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handlePronounce = async (text: string) => {
    if ('speechSynthesis' in window && text.trim()) {
      speechSynthesis.cancel()
      
      // Ensure voices are loaded
      let voices = speechSynthesis.getVoices()
      if (voices.length === 0) {
        // Wait for voices to load
        await new Promise<void>((resolve) => {
          const checkVoices = () => {
            voices = speechSynthesis.getVoices()
            if (voices.length > 0) {
              resolve()
            } else {
              setTimeout(checkVoices, 10)
            }
          }
          checkVoices()
        })
      }
      
      let pronunciationText = text
      
      if (translationMode === 'batak-to-latin') {
        pronunciationText = text
          .replace(/ng/g, 'nguh')  
          .replace(/ny/g, 'nih')  
          .replace(/\b([aeiou])\b/g, '$1h')  
      }
      
      const utterance = new SpeechSynthesisUtterance(pronunciationText)
      
      console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`))
      
      const indonesianVoices = voices.filter(voice => {
        const lang = voice.lang.toLowerCase()
        const name = voice.name.toLowerCase()
        return lang.includes('id') || 
               lang.includes('indonesia') || 
               name.includes('indonesia') ||
               name.includes('bahasa')
      })
      
      const malayVoices = voices.filter(voice => {
        const lang = voice.lang.toLowerCase()
        const name = voice.name.toLowerCase()
        return lang.includes('ms') || 
               lang.includes('malay') || 
               name.includes('malay')
      })
      
      console.log('Indonesian voices found:', indonesianVoices.map(v => `${v.name} (${v.lang})`))
      console.log('Malay voices found:', malayVoices.map(v => `${v.name} (${v.lang})`))
      
      let selectedVoice: SpeechSynthesisVoice | null = null
      
      if (indonesianVoices.length > 0) {
        selectedVoice = indonesianVoices.find(voice => 
          voice.name.toLowerCase().includes('google') ||
          voice.name.toLowerCase().includes('microsoft')
        ) || indonesianVoices[0]
      }
      else if (malayVoices.length > 0) {
        selectedVoice = malayVoices.find(voice => 
          voice.name.toLowerCase().includes('google') ||
          voice.name.toLowerCase().includes('microsoft')
        ) || malayVoices[0]
      }
      else {
        const nonEnglishVoices = voices.filter(voice => 
          !voice.lang.toLowerCase().includes('en')
        )
        if (nonEnglishVoices.length > 0) {
          selectedVoice = nonEnglishVoices[0]
        } else {
          selectedVoice = voices[0] || null
        }
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice
        console.log(`Selected voice: ${selectedVoice.name} (${selectedVoice.lang})`)
      } else {
        console.warn('No suitable voice found, using system default')
      }
      
      utterance.rate = 0.6        
      utterance.pitch = 1.0       
      utterance.volume = 0.8      
      
      if (selectedVoice && (
          selectedVoice.lang.toLowerCase().includes('id') || 
          selectedVoice.lang.toLowerCase().includes('ms') ||
          selectedVoice.name.toLowerCase().includes('indonesia') ||
          selectedVoice.name.toLowerCase().includes('malay')
      )) {
        utterance.rate = 0.7      
      }
      
      speechSynthesis.speak(utterance)
      
      utterance.onstart = () => {
        console.log(`Now speaking: "${pronunciationText}" with ${selectedVoice?.name || 'default voice'}`)
      }
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error)
      }
      
    } else {
      console.warn('Speech synthesis not supported in this browser or no text to pronounce')
    }
  }

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = speechSynthesis.getVoices()
        console.log('Voices loaded:', voices.length)
        
        const indonesianVoices = voices.filter(voice => 
          voice.lang.toLowerCase().includes('id') || 
          voice.lang.toLowerCase().includes('indonesia')
        )
        const malayVoices = voices.filter(voice => 
          voice.lang.toLowerCase().includes('ms') || 
          voice.lang.toLowerCase().includes('malay')
        )
        
        if (indonesianVoices.length > 0) {
          console.log('Indonesian voices available:', indonesianVoices.map(v => `${v.name} (${v.lang})`))
        } else {
          console.log('No Indonesian voices found')
        }
        
        if (malayVoices.length > 0) {
          console.log('Malay voices available:', malayVoices.map(v => `${v.name} (${v.lang})`))
        } else {
          console.log('No Malay voices found')
        }
      }
      
      loadVoices()
      
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices
      }
      
      setTimeout(() => {
        loadVoices()
      }, 100)
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading text-batak-brown-light mb-3 sm:mb-4 px-2">
          Alat Penerjemah
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-batak-brown-light max-w-2xl mx-auto px-4">
          Terjemahkan teks antara aksara Latin dan Aksara Batak. Sempurna untuk belajar dan memahami aksara tradisional.
        </p>
      </motion.div>

      {/* Translation Mode Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center p-3 sm:p-4 bg-batak-brown-muted/75 rounded-2xl"
      >
        <div className="flex items-center justify-between w-full max-w-md">
          <div className="flex-1 text-center">
            <span className="font-medium text-batak-brown-light text-sm sm:text-base">
              {translationMode === 'latin-to-batak' ? 'Latin' : 'Batak Toba'}
            </span>
          </div>
          
          <div className="flex-shrink-0 mx-2 sm:mx-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleSwapMode}
              className="bg-batak-brown-light hover:bg-batak-brown-medium border-batak-brown-dark w-8 h-8 sm:w-10 sm:h-10 p-0"
            >
              <ArrowLeftRight className="h-3 w-3 sm:h-4 sm:w-4 text-batak-brown-dark" />
            </Button>
          </div>
          
          <div className="flex-1 text-center">
            <span className="font-medium text-batak-brown-light text-sm sm:text-base">
              {translationMode === 'latin-to-batak' ? 'Batak Toba' : 'Latin'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Translator Interface */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
      >
        {/* Input Panel */}
        <Card className="bg-batak-brown-medium border-0 shadow-[0_0_10px_rgba(214,192,179,0.5)]">
          <CardHeader className="flex flex-row justify-between items-center p-4 sm:p-6">
            <div className='flex flex-col items-left gap-3'>
              <CardTitle className="text-lg sm:text-xl font-heading flex items-center justify-between text-batak-brown-dark">
                <span className="text-sm sm:text-base lg:text-lg">
                  {translationMode === 'latin-to-batak' ? 'Aksara Latin' : 'Aksara Batak Toba'}
                </span>
              </CardTitle>
              <CardDescription className="text-batak-brown-dark text-xs sm:text-sm">
                Masukkan teks yang ingin diterjemahkan
              </CardDescription>
            </div>

            <div className="flex gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" onClick={() => handleCopy(inputText)} className="hover:bg-batak-brown-muted p-1 sm:p-2">
                <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-batak-brown-dark" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => handlePronounce(inputText)}
                disabled={!inputText.trim()}
                className="hover:bg-batak-brown-muted p-1 sm:p-2"
              >
                <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-batak-brown-dark" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder={`Ketik teks ${translationMode === 'latin-to-batak' ? 'Latin' : 'Aksara Batak Toba'} Anda di sini...`}
              className="resize-none w-full h-24 sm:h-32 p-2 sm:p-3 border placeholder-batak-brown-light/75 bg-batak-brown-darker text-batak-brown-light border-batak-brown-light rounded-lg focus:border-batak-brown-medium focus:outline-none focus:ring-2 focus:ring-batak-brown-light text-sm sm:text-base"
            />
            <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-sm text-batak-brown-dark">
                {inputText.length} karakter
              </span>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="ghost" size="sm" onClick={handleClear} className="bg-batak-cream hover:bg-batak-brown-muted flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 p-0 flex items-center justify-center">
                  <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button onClick={handleTranslate} disabled={!inputText.trim()} className="flex-1 text-xs sm:text-sm">
                  Terjemahkan
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card className="bg-batak-brown-medium border-0 shadow-[0_0_10px_rgba(214,192,179,0.5)]">
          <CardHeader className="flex flex-row justify-between items-center p-4 sm:p-6">
            <div className='flex flex-col items-left gap-3'>
              <CardTitle className="text-lg sm:text-xl font-heading flex items-center justify-between text-batak-brown-dark">
              <span className="text-sm sm:text-base lg:text-lg">
                {translationMode === 'latin-to-batak' ? 'Aksara Batak Toba' : 'Aksara Latin'}
              </span>

            </CardTitle>
                        <CardDescription className="text-batak-brown-dark text-xs sm:text-sm">
              Hasil terjemahan
            </CardDescription>
            </div>
                          <div className="flex gap-1 sm:gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleCopy(outputText)} className="hover:bg-batak-brown-muted p-1 sm:p-2">
                  <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-batak-brown-dark" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handlePronounce(outputText)}
                  disabled={!outputText.trim()}
                  className="hover:bg-batak-brown-muted p-1 sm:p-2"
                >
                  <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-batak-brown-dark" />
                </Button>
              </div>

          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="w-full h-24 sm:h-32 p-2 sm:p-3 bg-batak-brown-warm border border-batak-brown-light rounded-lg overflow-y-auto text-batak-brown-light">
              {outputText ? (
                <span className={`${translationMode === 'latin-to-batak' ? 'text-2xl' : 'text-sm sm:text-base'} text-batak-brown-light`}>
                  {outputText}
                </span>
              ) : (
                <span className="text-batak-brown-light/75 italic text-sm sm:text-base">
                  Terjemahan akan muncul di sini...
                </span>
              )}
            </div>
            <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="text-xs sm:text-sm text-batak-brown-dark">
                {outputText.length} karakter
              </span>
              <div className="flex gap-2 w-full sm:w-auto opacity-0 pointer-events-none">
                <div className="bg-batak-cream flex-1 sm:flex-none text-xs sm:text-sm px-3 py-2 rounded">
                  &nbsp;
                </div>
                <div className="flex-1 sm:flex-none text-xs sm:text-sm px-4 py-2 rounded">
                  &nbsp;
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Translation Status */}
      {(translationError || translationWarnings.length > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          {translationError && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
              <p className="font-medium">Error:</p>
              <p>{translationError}</p>
            </div>
          )}
          
          {translationWarnings.length > 0 && (
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded-lg">
              <p className="font-medium">Peringatan:</p>
              <ul className="list-disc list-inside space-y-1">
                {translationWarnings.map((warning, index) => (
                  <li key={index} className="text-sm">{warning}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      )}

      {/* How to Use */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-xl font-heading text-batak-brown-dark">Apa itu Aksara Latin?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark mb-3">
              Aksara Latin adalah sistem tulisan yang kita gunakan sehari-hari. Contohnya:
            </p>
            <div className="bg-batak-gray-light p-3 rounded-lg border border-batak-brown-medium">
              <p className="text-batak-brown-dark font-bold text-lg">A, B, C, D, E, F, G...</p>
              <p className="text-batak-brown-dark font-medium mt-1">Alphabet Latin (huruf)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-xl font-heading text-batak-brown-dark">Cara Menerjemahkan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark/80 mb-3">
              Langkah mudah menggunakan penerjemah:
            </p>
            <ul className="text-sm text-batak-brown-dark/80 space-y-1">
              <li>1. Ketik teks di kotak input</li>
              <li>2. Klik tombol "Terjemahkan"</li>
              <li>3. Lihat hasil di kotak output</li>
              <li>4. Gunakan tombol copy/audio</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-batak-brown-light border-0">
          <CardHeader>
            <CardTitle className="text-xl font-heading text-batak-brown-dark">Tips & Fitur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-batak-brown-dark/80 mb-3">
              Manfaatkan fitur-fitur yang tersedia:
            </p>
            <ul className="text-sm text-batak-brown-dark/80 space-y-1">
              <li>• Tukar mode dengan tombol ↔</li>
              <li>• Dengar pelafalan dengan 🔊 (suara Indonesia/Melayu)</li>
              <li>• Salin hasil dengan tombol copy</li>
              <li>• Reset teks dengan tombol clear</li>
              <li>• Coba kata contoh untuk belajar</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Translation Rules Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-batak-brown-muted rounded-lg p-6"
      >
        <h3 className="text-2xl font-heading text-batak-brown-medium mb-3">
          CATATAN:
        </h3>
        <ul className="space-y-3 text-batak-brown-light">
          <li>• Huruf besar I dan U akan dikonversi menjadi "ina ni surat" ᯤ dan ᯥ, sedangkan huruf kecil i dan u menjadi "anak ni surat" ᯀᯪ dan ᯀᯮ</li>
          <li>• Huruf e dan é menghasilkan aksara téléngan/talingan/tadingan ᯩ, sementara huruf x menghasilkan aksara kebereten ᯧ (untuk Karo dan Pakpak)</li>
          <li>• Dalam proses sebaliknya, aksara téléngan/talingan/tadingan ᯩ akan menjadi "é", sedangkan aksara kebereten ᯧ menjadi "e"</li>
          <li>• Huruf f, q, v, z untuk sementara dikonversi ke bunyi yang serupa: pa, ka, wa, ja karena tidak ada padanan langsung dalam aksara Batak</li>
        </ul>
      </motion.div>

      {/* Copy Confirmation Toast */}
      {showCopyConfirmation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-batak-brown-light text-batak-brown-dark px-4 py-2 rounded-lg shadow-lg flex items-center justify-center gap-2 select-none z-50"
        >
          <Copy className="h-4 w-4" />
          <span className="text-sm font-medium">
            Teks berhasil disalin!
          </span>
        </motion.div>
      )}
    </div>
  )
}
