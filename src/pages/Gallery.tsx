import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Filter, ChevronLeft, ChevronRight, X, Copy, Volume2, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const charactersPerPage = 32
  
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  const allCharacters = [
    { id: 1, character: 'ᯀ', name: 'A', category: 'Vokal', pronunciation: 'a', description: 'Vokal dasar A' },
    { id: 2, character: 'ᯁ', name: 'Ha', category: 'Vokal', pronunciation: 'ha', description: 'Vokal Ha' },
    { id: 3, character: 'ᯂ', name: 'Ba', category: 'Vokal', pronunciation: 'ba', description: 'Vokal Ba' },
    { id: 4, character: 'ᯃ', name: 'Ta', category: 'Vokal', pronunciation: 'ta', description: 'Vokal Ta' },
    { id: 5, character: 'ᯄ', name: 'Sa', category: 'Vokal', pronunciation: 'sa', description: 'Vokal Sa' },
    { id: 6, character: 'ᯅ', name: 'Wa', category: 'Vokal', pronunciation: 'wa', description: 'Vokal Wa' },
    { id: 7, character: 'ᯆ', name: 'Ma', category: 'Vokal', pronunciation: 'ma', description: 'Vokal Ma' },
    { id: 8, character: 'ᯇ', name: 'Ga', category: 'Vokal', pronunciation: 'ga', description: 'Vokal Ga' },
    
    { id: 9, character: 'ᯈ', name: 'Ja', category: 'Konsonan', pronunciation: 'ja', description: 'Konsonan Ja' },
    { id: 10, character: 'ᯉ', name: 'Da', category: 'Konsonan', pronunciation: 'da', description: 'Konsonan Da' },
    { id: 11, character: 'ᯊ', name: 'Ra', category: 'Konsonan', pronunciation: 'ra', description: 'Konsonan Ra' },
    { id: 12, character: 'ᯋ', name: 'Na', category: 'Konsonan', pronunciation: 'na', description: 'Konsonan Na' },
    { id: 13, character: 'ᯌ', name: 'La', category: 'Konsonan', pronunciation: 'la', description: 'Konsonan La' },
    { id: 14, character: 'ᯍ', name: 'Pa', category: 'Konsonan', pronunciation: 'pa', description: 'Konsonan Pa' },
    { id: 15, character: 'ᯎ', name: 'Ka', category: 'Konsonan', pronunciation: 'ka', description: 'Konsonan Ka' },
    { id: 16, character: 'ᯏ', name: 'Ya', category: 'Konsonan', pronunciation: 'ya', description: 'Konsonan Ya' },
    { id: 17, character: 'ᯐ', name: 'Nya', category: 'Konsonan', pronunciation: 'nya', description: 'Konsonan Nya' },
    { id: 18, character: 'ᯑ', name: 'Ca', category: 'Konsonan', pronunciation: 'ca', description: 'Konsonan Ca' },
    { id: 19, character: 'ᯒ', name: 'Nga', category: 'Konsonan', pronunciation: 'nga', description: 'Konsonan Nga' },
    { id: 20, character: 'ᯓ', name: 'I', category: 'Konsonan', pronunciation: 'i', description: 'Konsonan I' },
    { id: 21, character: 'ᯔ', name: 'U', category: 'Konsonan', pronunciation: 'u', description: 'Konsonan U' },
    { id: 22, character: 'ᯕ', name: 'E', category: 'Konsonan', pronunciation: 'e', description: 'Konsonan E' },
    { id: 23, character: 'ᯖ', name: 'O', category: 'Konsonan', pronunciation: 'o', description: 'Konsonan O' },
    { id: 24, character: 'ᯗ', name: 'Kha', category: 'Konsonan', pronunciation: 'kha', description: 'Konsonan Kha' },
    { id: 25, character: 'ᯘ', name: 'Fa', category: 'Konsonan', pronunciation: 'fa', description: 'Konsonan Fa' },
    { id: 26, character: 'ᯙ', name: 'Jha', category: 'Konsonan', pronunciation: 'jha', description: 'Konsonan Jha' },
    { id: 27, character: 'ᯚ', name: 'Dha', category: 'Konsonan', pronunciation: 'dha', description: 'Konsonan Dha' },
    
    { id: 28, character: '᯦', name: 'Tompi', category: 'Diakritik', pronunciation: 'tompi', description: 'Diakritik Tompi' },
    { id: 29, character: '᯲', name: 'Pakpak', category: 'Diakritik', pronunciation: 'pakpak', description: 'Diakritik Pakpak' },
    { id: 30, character: '᯳', name: 'Pangolat', category: 'Diakritik', pronunciation: 'pangolat', description: 'Diakritik Pangolat' },
    { id: 31, character: '᯴', name: 'Panongonan', category: 'Diakritik', pronunciation: 'panongonan', description: 'Diakritik Panongonan' },
    { id: 32, character: '᯵', name: 'Panggolat', category: 'Diakritik', pronunciation: 'panggolat', description: 'Diakritik Panggolat' },
    { id: 33, character: '᯶', name: 'Pangkon', category: 'Diakritik', pronunciation: 'pangkon', description: 'Diakritik Pangkon' },
    { id: 34, character: '᯷', name: 'Pangrupak', category: 'Diakritik', pronunciation: 'pangrupak', description: 'Diakritik Pangrupak' },
    { id: 35, character: '᯸', name: 'Pangadeg', category: 'Diakritik', pronunciation: 'pangadeg', description: 'Diakritik Pangadeg' },
    { id: 36, character: '᯹', name: 'Pangkat', category: 'Diakritik', pronunciation: 'pangkat', description: 'Diakritik Pangkat' },
    { id: 37, character: '᯺', name: 'Pangolat Mala', category: 'Diakritik', pronunciation: 'pangolat mala', description: 'Diakritik Pangolat Mala' },
    { id: 38, character: '᯻', name: 'Pangolat Mandonga', category: 'Diakritik', pronunciation: 'pangolat mandonga', description: 'Diakritik Pangolat Mandonga' },
    { id: 39, character: '᯼', name: 'Pangolat Mardua', category: 'Diakritik', pronunciation: 'pangolat mardua', description: 'Diakritik Pangolat Mardua' },
    
    { id: 40, character: '᭐', name: 'Nol', category: 'Angka', pronunciation: 'nol', description: 'Angka 0' },
    { id: 41, character: '᭑', name: 'Satu', category: 'Angka', pronunciation: 'sada', description: 'Angka 1' },
    { id: 42, character: '᭒', name: 'Dua', category: 'Angka', pronunciation: 'dua', description: 'Angka 2' },
    { id: 43, character: '᭓', name: 'Tiga', category: 'Angka', pronunciation: 'tolu', description: 'Angka 3' },
    { id: 44, character: '᭔', name: 'Empat', category: 'Angka', pronunciation: 'opat', description: 'Angka 4' },
    { id: 45, character: '᭕', name: 'Lima', category: 'Angka', pronunciation: 'lima', description: 'Angka 5' },
    { id: 46, character: '᭖', name: 'Enam', category: 'Angka', pronunciation: 'onom', description: 'Angka 6' },
    { id: 47, character: '᭗', name: 'Tujuh', category: 'Angka', pronunciation: 'pitu', description: 'Angka 7' },
    { id: 48, character: '᭘', name: 'Delapan', category: 'Angka', pronunciation: 'walu', description: 'Angka 8' },
    { id: 49, character: '᭙', name: 'Sembilan', category: 'Angka', pronunciation: 'sia', description: 'Angka 9' },
    
    ...Array.from({ length: 79 }, (_, i) => ({
      id: 50 + i,
      character: `Ch${50 + i}`,
      name: `Karakter ${50 + i}`,
      category: i < 20 ? 'Vokal' : i < 40 ? 'Konsonan' : i < 60 ? 'Diakritik' : 'Angka',
      pronunciation: `char${50 + i}`,
      description: `Karakter placeholder ${50 + i}`
    }))
  ]

  const characterCategories = [
    { name: 'Semua', count: allCharacters.length, description: 'Semua jenis karakter' },
    { name: 'Vokal', count: allCharacters.filter(c => c.category === 'Vokal').length, description: 'Karakter vokal dasar' },
    { name: 'Konsonan', count: allCharacters.filter(c => c.category === 'Konsonan').length, description: 'Karakter konsonan' },
    { name: 'Diakritik', count: allCharacters.filter(c => c.category === 'Diakritik').length, description: 'Tanda aksen dan pengubah' },
    { name: 'Angka', count: allCharacters.filter(c => c.category === 'Angka').length, description: 'Karakter numerik' },
  ]

  const filteredCharacters = allCharacters.filter(char => {
    const matchesCategory = selectedCategory === 'Semua' || char.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.pronunciation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      char.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalFilteredCharacters = filteredCharacters.length
  const totalPages = Math.ceil(totalFilteredCharacters / charactersPerPage)

  const startIndex = (currentPage - 1) * charactersPerPage
  const currentCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage)

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const openCharacterDetail = (charNumber: number) => {
    setSelectedCharacter(charNumber)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCharacter(null)
  }

  const handleCopy = async () => {
    try {
      const character = allCharacters.find(c => c.id === selectedCharacter)
      await navigator.clipboard.writeText(character?.character || '')
      setShowCopyConfirmation(true)
      setTimeout(() => {
        setShowCopyConfirmation(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handlePronounce = (pronunciation: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(pronunciation)
      
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
      console.warn('Speech synthesis not supported in this browser')
      // You could show a toast notification here
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY
      
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isModalOpen])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (showFilterDropdown && !target.closest('.filter-dropdown-container')) {
        setShowFilterDropdown(false)
      }
    }

    if (showFilterDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showFilterDropdown])

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
    <>
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center flex flex-col items-center space-y-6"
        >
          <h1 className="text-6xl font-heading text-batak-brown-light mb-4">
            Galeri Karakter
          </h1>
          <p className="text-lg text-batak-brown-light max-w-2xl mx-auto">
            Jelajahi koleksi lengkap karakter Aksara Batak, diorganisir berdasarkan kategori untuk pembelajaran dan referensi yang mudah.
          </p>
        </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-between items-center"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-batak-brown-light/75 h-4 w-4" />
          <input
            type="text"
            placeholder="Cari karakter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-4 placeholder-batak-brown-light/75 py-2 border bg-batak-brown-darker text-batak-brown-light border-batak-brown-light rounded-full focus:border-batak-brown-medium focus:outline-none focus:ring-2 focus:ring-batak-brown-light h-10"
          />
        </div>
        <div className="relative filter-dropdown-container">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 bg-batak-brown-darker text-batak-brown-light hover:opacity-75 hover:text-batak-brown-light hover:bg-batak-brown-darker shadow-lg min-w-[120px] h-10"
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
          >
            <Filter className="h-4 w-4 text-batak-brown-medium" />
            <span className="truncate">
              {selectedCategory === 'Semua' ? 'Filter' : selectedCategory}
            </span>
            <ChevronDown className="h-4 w-4 text-batak-brown-medium ml-auto" />
          </Button>
          
          {/* Filter Dropdown */}
          {showFilterDropdown && (
            <div className="absolute right-0 top-full mt-2 bg-batak-brown-darker border border-batak-brown-light rounded-lg shadow-lg z-10 min-w-[160px] overflow-hidden">
              {characterCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name)
                    setShowFilterDropdown(false)
                    setCurrentPage(1)
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-batak-brown-medium hover:text-batak-brown-dark transition-colors whitespace-nowrap ${
                    selectedCategory === category.name 
                      ? 'bg-batak-brown-medium text-batak-brown-dark' 
                      : 'text-batak-brown-light'
                  } ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${
                    index === characterCategories.length - 1 ? 'rounded-b-lg' : ''
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Character Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16"
      >
        {characterCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card 
              className={`bg-batak-brown-medium border-none hover:shadow-[0_0_30px_rgba(214,192,179,0.5)] transition-all duration-300 cursor-pointer text-batak-brown-dark text-center transform hover:scale-105 h-full flex flex-col ${
                selectedCategory === category.name ? 'ring-2 ring-batak-brown-light shadow-[0_0_30px_rgba(214,192,179,0.7)]' : ''
              }`}
              onClick={() => {
                setSelectedCategory(category.name)
                setCurrentPage(1) // Reset to first page when changing category
              }}
            >
              <CardHeader className="flex-grow-0">
                <CardTitle className="text-2xl font-heading whitespace-nowrap">{category.name}</CardTitle>
                <CardDescription className='text-inherit'>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center">
                <div className="text-6xl font-bold mb-2">
                  {category.count}
                </div>
                <p className="text-sm text-batak-brown-light">Karakter tersedia</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Character Grid Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-batak-brown-darker rounded-xl p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-heading text-batak-brown-light">Semua Karakter</h2>
          <p className="text-sm text-batak-brown-light">
            Halaman {currentPage} dari {totalPages} ({totalFilteredCharacters} total karakter)
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {/* Character cards */}
          {currentCharacters.map((char) => (
            <div
              key={char.id}
              className="relative group aspect-square bg-batak-brown-medium rounded-lg flex items-center justify-center hover:bg-batak-brown-light transition-colors cursor-pointer shadow-lg hover:shadow-xl"
              onClick={() => openCharacterDetail(char.id)}
            >
              <span 
                className="text-4xl font-medium text-batak-brown-dark pointer-events-none"
              >
                {char.character}
              </span>
              
              {/* Pronunciation button - appears on hover */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6 bg-batak-brown-dark/20 hover:bg-batak-brown-dark/40 text-batak-brown-light z-10"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePronounce(char.pronunciation)
                }}
              >
                <Volume2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <div className="flex">
            {/* Previous Button */}
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              variant="ghost"
              className="w-10 h-10 p-0 bg-batak-brown-medium text-batak-brown-dark hover:bg-batak-brown-light disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg rounded-r-none border-r border-batak-brown-dark/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1
              const isCurrentPage = pageNumber === currentPage
              
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <Button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    variant={isCurrentPage ? "default" : "ghost"}
                    className={`w-10 h-10 p-0 rounded-none border-r border-batak-brown-dark/20 ${
                      isCurrentPage
                        ? "bg-batak-brown-light text-batak-brown-dark"
                        : "bg-batak-brown-medium text-batak-brown-dark hover:bg-batak-brown-light"
                    }`}
                  >
                    {pageNumber}
                  </Button>
                )
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return (
                  <div key={pageNumber} className="w-10 h-10 flex items-center justify-center bg-batak-brown-medium text-batak-brown-dark border-r border-batak-brown-dark/20">
                    ...
                  </div>
                )
              }
              return null
            })}
            
            {/* Next Button */}
            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              variant="ghost"
              className="w-10 h-10 p-0 bg-batak-brown-medium text-batak-brown-dark hover:bg-batak-brown-light disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg rounded-l-none"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Usage Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-batak-brown-muted rounded-lg p-6 flex flex-col gap-4"
      >
        <h3 className="text-2xl font-heading text-batak-brown-medium mb-2">
          Cara Menggunakan Galeri
        </h3>
        <p className="text-batak-brown-light">
          Klik pada karakter mana pun untuk melihat informasi detail termasuk pelafalan & contoh penggunaan. Gunakan fungsi pencarian untuk dengan cepat menemukan karakter tertentu atau jelajahi berdasarkan kategori.
        </p>
      </motion.div>
      </div>

      {/* Character Detail Modal - Outside main container */}
      {isModalOpen && selectedCharacter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] px-4 sm:px-6 lg:px-8" 
          style={{ margin: 0, padding: '1rem 2rem', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-batak-brown-darker rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative mx-4"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-heading text-batak-brown-light">
                Detail Karakter
              </h2>
              <Button
                onClick={closeModal}
                variant="ghost"
                className="w-10 h-10 p-0 bg-batak-brown-medium text-batak-brown-dark hover:bg-batak-brown-light rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {(() => {
              const character = allCharacters.find(c => c.id === selectedCharacter)
              if (!character) return null
              
              return (
                <>
                  {/* Character Display */}
                  <div className="text-center mb-8">
                    <div className="bg-batak-brown-medium rounded-2xl p-8 mb-4 inline-block">
                      <span className="text-8xl font-medium text-batak-brown-dark">
                        {character.character}
                      </span>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-col items-start'>
                        <h3 className="text-2xl font-heading text-batak-brown-light mb-2">
                          {character.name}
                        </h3>

                        <p className="text-batak-brown-light/75">
                          Karakter {character.category}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={handleCopy}
                          className="text-batak-brown-medium hover:text-batak-brown-light hover:bg-batak-brown-medium/20"
                          title="Salin karakter"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handlePronounce(character.pronunciation)}
                          className="text-batak-brown-medium hover:text-batak-brown-light hover:bg-batak-brown-medium/20"
                          title="Putar pelafalan"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                    </div>
                  </div>

                  {/* Character Information */}
                  <div className="space-y-6">
                    <div className="bg-batak-brown-medium/30 rounded-lg p-4">
                      <h4 className="text-lg font-heading text-batak-brown-light mb-2">
                        Pelafalan
                      </h4>
                      <p className="text-batak-brown-light">
                        [{character.pronunciation}]
                      </p>
                    </div>

                    <div className="bg-batak-brown-medium/30 rounded-lg p-4">
                      <h4 className="text-lg font-heading text-batak-brown-light mb-2">
                        Deskripsi
                      </h4>
                      <p className="text-batak-brown-light">
                        {character.description}
                      </p>
                    </div>

                    <div className="bg-batak-brown-medium/30 rounded-lg p-4">
                      <h4 className="text-lg font-heading text-batak-brown-light mb-2">
                        Contoh Penggunaan
                      </h4>
                      <div className="space-y-2">
                        <p className="text-batak-brown-light">
                          • Contoh kata menggunakan {character.name}
                        </p>
                        <p className="text-batak-brown-light">
                          • Contoh lain dengan karakter ini
                        </p>
                        <p className="text-batak-brown-light">
                          • Penggunaan tradisional dalam aksara Batak
                        </p>
                      </div>
                    </div>

                    <div className="bg-batak-brown-medium/30 rounded-lg p-4">
                      <h4 className="text-lg font-heading text-batak-brown-light mb-2">
                        Kategori Karakter
                      </h4>
                      <p className="text-batak-brown-light">
                        {character.category}
                      </p>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={closeModal}
                      className="bg-batak-cream text-batak-brown-dark hover:bg-batak-brown-medium px-8"
                    >
                      Tutup
                    </Button>
                  </div>

                  {/* Copy Confirmation Toast */}
                  {showCopyConfirmation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-batak-brown-light text-batak-brown-dark px-4 py-2 rounded-lg shadow-lg flex items-center justify-center gap-2 select-none"
                    >
                      <Copy className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {character.character} disalin!
                      </span>
                    </motion.div>
                  )}
                </>
              )
            })()}
          </motion.div>
        </div>
      )}
    </>
  )
}
