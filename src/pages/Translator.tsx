import { useState } from 'react'
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
      setOutputText('[Aksara Batak translation would appear here]')
    } else {
      setOutputText('[Latin translation would appear here]')
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Translator Tool
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Translate text between Latin script and Aksara Batak. Perfect for learning and understanding the traditional script.
        </p>
      </motion.div>

      {/* Translation Mode Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-center gap-4 p-4 bg-blue-50 rounded-lg"
      >
        <span className="font-medium text-blue-900">
          {translationMode === 'latin-to-batak' ? 'Latin Script' : 'Aksara Batak'}
        </span>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleSwapMode}
          className="bg-white"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </Button>
        <span className="font-medium text-blue-900">
          {translationMode === 'latin-to-batak' ? 'Aksara Batak' : 'Latin Script'}
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>
                {translationMode === 'latin-to-batak' ? 'Latin Script' : 'Aksara Batak'}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleCopy(inputText)}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Enter your text to translate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Type your ${translationMode === 'latin-to-batak' ? 'Latin' : 'Aksara Batak'} text here...`}
              className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {inputText.length} characters
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleClear}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Clear
                </Button>
                <Button onClick={handleTranslate} disabled={!inputText.trim()}>
                  Translate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>
                {translationMode === 'latin-to-batak' ? 'Aksara Batak' : 'Latin Script'}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => handleCopy(outputText)}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
            <CardDescription>
              Translation result
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-32 p-3 bg-gray-50 border border-gray-300 rounded-md overflow-y-auto">
              {outputText ? (
                <span className={`${translationMode === 'latin-to-batak' ? 'text-2xl' : 'text-base'}`}>
                  {outputText}
                </span>
              ) : (
                <span className="text-gray-400 italic">
                  Translation will appear here...
                </span>
              )}
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {outputText.length} characters
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
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Accurate Translation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our algorithm ensures accurate conversion between Latin and Aksara Batak scripts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pronunciation Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Learn correct pronunciation with audio guides for each character and word.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Copy & Share</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Easily copy translations and share them with others for learning purposes.
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
        className="bg-amber-50 border border-amber-200 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-amber-900 mb-3">
          Translation Tips
        </h3>
        <ul className="space-y-2 text-amber-800">
          <li>• Start with simple words and phrases for better accuracy</li>
          <li>• Check the character gallery for reference when reviewing translations</li>
          <li>• Use the audio feature to learn proper pronunciation</li>
          <li>• Practice writing the translated characters to improve recognition</li>
        </ul>
      </motion.div>
    </div>
  )
}
