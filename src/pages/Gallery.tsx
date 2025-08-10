import { motion, AnimatePresence } from 'framer-motion'
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
    // 19 Induk Aksara (Base Characters) - Each has inherent 'a' vowel
    { id: 1, character: 'ᯀ', name: 'A', category: 'Induk Aksara', pronunciation: 'a', description: 'Aksara dasar A - vokal murni' },
    { id: 2, character: 'ᯂ', name: 'Ha/Ka', category: 'Induk Aksara', pronunciation: 'ha', description: 'Aksara Ha atau Ka - konsonan dengan vokal a' },
    { id: 3, character: 'ᯅ', name: 'Ba', category: 'Induk Aksara', pronunciation: 'ba', description: 'Aksara Ba - konsonan dengan vokal a' },
    { id: 4, character: 'ᯇ', name: 'Pa', category: 'Induk Aksara', pronunciation: 'pa', description: 'Aksara Pa - konsonan dengan vokal a' },
    { id: 5, character: 'ᯉ', name: 'Na', category: 'Induk Aksara', pronunciation: 'na', description: 'Aksara Na - konsonan dengan vokal a' },
    { id: 6, character: 'ᯋ', name: 'Wa', category: 'Induk Aksara', pronunciation: 'wa', description: 'Aksara Wa - konsonan dengan vokal a' },
    { id: 7, character: 'ᯎ', name: 'Ga', category: 'Induk Aksara', pronunciation: 'ga', description: 'Aksara Ga - konsonan dengan vokal a' },
    { id: 8, character: 'ᯐ', name: 'Ja', category: 'Induk Aksara', pronunciation: 'ja', description: 'Aksara Ja - konsonan dengan vokal a' },
    { id: 9, character: 'ᯑ', name: 'Da', category: 'Induk Aksara', pronunciation: 'da', description: 'Aksara Da - konsonan dengan vokal a' },
    { id: 10, character: 'ᯒ', name: 'Ra', category: 'Induk Aksara', pronunciation: 'ra', description: 'Aksara Ra - konsonan dengan vokal a' },
    { id: 11, character: 'ᯔ', name: 'Ma', category: 'Induk Aksara', pronunciation: 'ma', description: 'Aksara Ma - konsonan dengan vokal a' },
    { id: 12, character: 'ᯕ', name: 'Ca', category: 'Induk Aksara', pronunciation: 'ca', description: 'Aksara Ca - konsonan dengan vokal a' },
    { id: 13, character: 'ᯖ', name: 'Fa', category: 'Induk Aksara', pronunciation: 'fa', description: 'Aksara Fa - konsonan dengan vokal a' },
    { id: 14, character: 'ᯗ', name: 'Ta', category: 'Induk Aksara', pronunciation: 'ta', description: 'Aksara Ta - konsonan dengan vokal a' },
    { id: 15, character: 'ᯘ', name: 'Sa', category: 'Induk Aksara', pronunciation: 'sa', description: 'Aksara Sa - konsonan dengan vokal a' },
    { id: 16, character: 'ᯛ', name: 'Ya', category: 'Induk Aksara', pronunciation: 'ya', description: 'Aksara Ya - konsonan dengan vokal a' },
    { id: 17, character: 'ᯝ', name: 'Nga', category: 'Induk Aksara', pronunciation: 'nga', description: 'Aksara Nga - konsonan dengan vokal a' },
    { id: 18, character: 'ᯞ', name: 'La', category: 'Induk Aksara', pronunciation: 'la', description: 'Aksara La - konsonan dengan vokal a' },
    { id: 19, character: 'ᯠ', name: 'Nya', category: 'Induk Aksara', pronunciation: 'nya', description: 'Aksara Nya - konsonan dengan vokal a' },
    
    // Ina ni Surat (Independent Vowels)
    { id: 20, character: 'ᯤ', name: 'I', category: 'Ina ni Surat', pronunciation: 'i', description: 'Ina ni surat I - vokal mandiri' },
    { id: 21, character: 'ᯥ', name: 'U', category: 'Ina ni Surat', pronunciation: 'u', description: 'Ina ni surat U - vokal mandiri' },
    
    // Anak ni Surat (Vowel Diacritics)
    { id: 22, character: 'ᯪ', name: 'Siulu (i)', category: 'Anak ni Surat', pronunciation: 'i', description: 'Anak ni surat untuk bunyi i - diakritik vokal' },
    { id: 23, character: 'ᯮ', name: 'Haborotan (u)', category: 'Anak ni Surat', pronunciation: 'u', description: 'Anak ni surat untuk bunyi u - diakritik vokal' },
    { id: 24, character: 'ᯩ', name: 'Hatadingan (e)', category: 'Anak ni Surat', pronunciation: 'e', description: 'Anak ni surat untuk bunyi e - diakritik vokal' },
    { id: 25, character: 'ᯬ', name: 'Siulu (o)', category: 'Anak ni Surat', pronunciation: 'o', description: 'Anak ni surat untuk bunyi o - diakritik vokal' },
    { id: 26, character: 'ᯰ', name: 'Haminsaran (ng)', category: 'Anak ni Surat', pronunciation: 'ng', description: 'Anak ni surat untuk bunyi ng di akhir suku kata' },
    
    // Pangolat dan Tanda Khusus
    { id: 27, character: '᯲', name: 'Pangolat', category: 'Tanda Bunuh', pronunciation: 'pangolat', description: 'Tanda bunuh untuk mematikan vokal a yang melekat' },
    
    // Karakter Tambahan untuk Bahasa Lain
    { id: 28, character: 'ᯧ', name: 'Kebereten', category: 'Karakter Khusus', pronunciation: 'e', description: 'Kebereten - digunakan dalam Karo dan Pakpak' },
    
    // Angka Batak
    { id: 29, character: '᭐', name: 'Nol', category: 'Angka', pronunciation: 'nol', description: 'Angka 0 dalam sistem numerik Batak' },
    { id: 30, character: '᭑', name: 'Satu', category: 'Angka', pronunciation: 'sada', description: 'Angka 1 dalam sistem numerik Batak' },
    { id: 31, character: '᭒', name: 'Dua', category: 'Angka', pronunciation: 'dua', description: 'Angka 2 dalam sistem numerik Batak' },
    { id: 32, character: '᭓', name: 'Tiga', category: 'Angka', pronunciation: 'tolu', description: 'Angka 3 dalam sistem numerik Batak' },
    { id: 33, character: '᭔', name: 'Empat', category: 'Angka', pronunciation: 'opat', description: 'Angka 4 dalam sistem numerik Batak' },
    { id: 34, character: '᭕', name: 'Lima', category: 'Angka', pronunciation: 'lima', description: 'Angka 5 dalam sistem numerik Batak' },
    { id: 35, character: '᭖', name: 'Enam', category: 'Angka', pronunciation: 'onom', description: 'Angka 6 dalam sistem numerik Batak' },
    { id: 36, character: '᭗', name: 'Tujuh', category: 'Angka', pronunciation: 'pitu', description: 'Angka 7 dalam sistem numerik Batak' },
    { id: 37, character: '᭘', name: 'Delapan', category: 'Angka', pronunciation: 'walu', description: 'Angka 8 dalam sistem numerik Batak' },
    { id: 38, character: '᭙', name: 'Sembilan', category: 'Angka', pronunciation: 'sia', description: 'Angka 9 dalam sistem numerik Batak' },
    
    // Contoh Kombinasi (untuk demonstrasi)
    { id: 39, character: 'ᯅᯪ', name: 'Bi', category: 'Contoh Kombinasi', pronunciation: 'bi', description: 'Contoh: Ba + anak ni surat i = Bi' },
    { id: 40, character: 'ᯅᯮ', name: 'Bu', category: 'Contoh Kombinasi', pronunciation: 'bu', description: 'Contoh: Ba + anak ni surat u = Bu' },
    { id: 41, character: 'ᯅᯩ', name: 'Be', category: 'Contoh Kombinasi', pronunciation: 'be', description: 'Contoh: Ba + anak ni surat e = Be' },
    { id: 42, character: 'ᯅᯬ', name: 'Bo', category: 'Contoh Kombinasi', pronunciation: 'bo', description: 'Contoh: Ba + anak ni surat o = Bo' },
    { id: 43, character: 'ᯞᯇ᯲', name: 'Lap', category: 'Contoh Kombinasi', pronunciation: 'lap', description: 'Contoh: La + Pa + Pangolat = Lap (dengan tanda bunuh)' },
    { id: 44, character: 'ᯎᯉ', name: 'Gana', category: 'Contoh Kombinasi', pronunciation: 'gana', description: 'Contoh: Ga + Na = Gana' },
  ]

  const characterCategories = [
    { name: 'Semua', count: allCharacters.length, description: 'Semua jenis karakter Aksara Batak' },
    { name: 'Induk Aksara', count: allCharacters.filter(c => c.category === 'Induk Aksara').length, description: '19 aksara dasar Batak Toba (masing-masing memiliki vokal a melekat)' },
    { name: 'Ina ni Surat', count: allCharacters.filter(c => c.category === 'Ina ni Surat').length, description: 'Vokal mandiri yang berdiri sendiri' },
    { name: 'Anak ni Surat', count: allCharacters.filter(c => c.category === 'Anak ni Surat').length, description: 'Diakritik vokal untuk mengubah bunyi a pada Induk Aksara' },
    { name: 'Tanda Bunuh', count: allCharacters.filter(c => c.category === 'Tanda Bunuh').length, description: 'Pangolat untuk mematikan vokal a yang melekat' },
    { name: 'Karakter Khusus', count: allCharacters.filter(c => c.category === 'Karakter Khusus').length, description: 'Karakter tambahan untuk bahasa Batak lainnya' },
    { name: 'Angka', count: allCharacters.filter(c => c.category === 'Angka').length, description: 'Sistem numerik tradisional Batak' },
    { name: 'Contoh Kombinasi', count: allCharacters.filter(c => c.category === 'Contoh Kombinasi').length, description: 'Contoh penggabungan aksara untuk membentuk suku kata' },
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
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(pronunciation)
      
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
      
      utterance.rate = 0.7
      utterance.pitch = 1.0
      utterance.volume = 0.8
      
      speechSynthesis.speak(utterance)
    } else {
      console.warn('Speech synthesis not supported in this browser')
    }
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.cursor = 'default'
      return () => {
        document.body.style.overflow = ''
        document.body.style.cursor = '' 
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

  useEffect(() => {
    if ('speechSynthesis' in window) {
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading text-batak-brown-light mb-2 sm:mb-4 px-2">
            Galeri Karakter
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-batak-brown-light max-w-2xl mx-auto px-4 leading-relaxed">
            Jelajahi koleksi lengkap karakter Aksara Batak Toba, diorganisir berdasarkan kategori untuk pembelajaran dan referensi yang mudah.
          </p>
        </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center"
      >
        <div className="relative flex-1 max-w-full sm:max-w-md order-2 sm:order-1">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-batak-brown-light/75 h-4 w-4" />
          <input
            type="text"
            placeholder="Cari karakter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-4 placeholder-batak-brown-light/75 py-2 border bg-batak-brown-darker text-batak-brown-light border-batak-brown-light rounded-full focus:border-batak-brown-medium focus:outline-none focus:ring-2 focus:ring-batak-brown-light h-10 text-sm sm:text-base"
          />
        </div>
        <div className="relative filter-dropdown-container order-1 sm:order-2">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 bg-batak-brown-darker text-batak-brown-light hover:opacity-75 hover:text-batak-brown-light hover:bg-batak-brown-darker shadow-lg w-full sm:min-w-[160px] sm:max-w-[200px] h-10 text-sm sm:text-base"
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
          >
            <Filter className="h-4 w-4 text-batak-brown-medium flex-shrink-0" />
            <span className="truncate flex-1">
              {selectedCategory === 'Semua' ? 'Filter' : selectedCategory}
            </span>
            <ChevronDown className="h-4 w-4 text-batak-brown-medium flex-shrink-0" />
          </Button>
          
          {/* Filter Dropdown */}
          {showFilterDropdown && (
            <div className="absolute right-0 top-full mt-2 bg-batak-brown-darker border border-batak-brown-light rounded-lg shadow-lg z-10 w-full sm:min-w-[180px] overflow-hidden">
              {characterCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name)
                    setShowFilterDropdown(false)
                    setCurrentPage(1)
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 hover:bg-batak-brown-medium hover:text-batak-brown-dark transition-colors text-sm sm:text-base ${
                    selectedCategory === category.name 
                      ? 'bg-batak-brown-medium text-batak-brown-dark' 
                      : 'text-batak-brown-light'
                  } ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${
                    index === characterCategories.length - 1 ? 'rounded-b-lg' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-xs sm:text-sm opacity-75">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Character Categories - Only show when not searching */}
      <AnimatePresence mode="wait">
        {searchQuery === '' && (
          <motion.div
            key="character-categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {characterCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card 
                  className={`bg-batak-brown-medium border-none hover:shadow-[0_0_30px_rgba(214,192,179,0.5)] transition-all duration-300 cursor-pointer text-batak-brown-dark text-center transform hover:scale-105 h-full flex flex-col ${
                    selectedCategory === category.name ? 'ring-2 ring-batak-brown-light shadow-[0_0_30px_rgba(214,192,179,0.7)]' : ''
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.name)
                    setCurrentPage(1)
                  }}
                >
                  <CardHeader className="flex-grow-0 p-3 sm:p-4">
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-heading leading-tight">{category.name}</CardTitle>
                    <CardDescription className='text-inherit text-xs sm:text-sm leading-tight'>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-center p-3 sm:p-4 pt-0">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                      {category.count}
                    </div>
                    <p className="text-xs sm:text-sm text-batak-brown-dark">Jumlah Karakter</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-batak-brown-darker rounded-xl p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-heading text-batak-brown-light">
            {searchQuery === '' ? 'Semua Karakter' : `Hasil Pencarian: "${searchQuery}"`}
          </h2>
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
          Cara Menggunakan Galeri Aksara Batak
        </h3>
        <div className="space-y-3">
          <p className="text-batak-brown-light">
            <strong>Induk Aksara:</strong> 19 aksara dasar Batak Toba, masing-masing memiliki vokal 'a' yang melekat. Ini adalah fondasi sistem penulisan Batak.
          </p>
          <p className="text-batak-brown-light">
            <strong>Anak ni Surat:</strong> Diakritik vokal yang diletakkan di atas, bawah, atau samping Induk Aksara untuk mengubah bunyi vokal 'a' menjadi i, u, e, atau o.
          </p>
          <p className="text-batak-brown-light">
            <strong>Pangolat:</strong> Tanda bunuh (᯲) yang digunakan untuk mematikan vokal 'a' yang melekat pada akhir kata atau suku kata tertutup.
          </p>
          <p className="text-batak-brown-light">
            Klik pada karakter mana pun untuk melihat detail lengkap termasuk cara penggunaan dan contoh penggabungan. Gunakan filter untuk menjelajahi kategori tertentu.
          </p>
        </div>
      </motion.div>
      </div>

      {/* Character Detail Modal - Outside main container */}
      {isModalOpen && selectedCharacter && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] px-4 sm:px-6 lg:px-8 pointer-events-auto" 
          style={{ margin: 0, padding: '1rem 2rem', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-batak-brown-darker rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative mx-4 pointer-events-auto"
            onClick={e => e.stopPropagation()}
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
                    <div className="bg-batak-brown-medium rounded-2xl p-8 mb-4 inline-flex items-center justify-center min-w-[120px] min-h-[120px] overflow-hidden">
                      <span className="text-6xl lg:text-7xl xl:text-8xl font-medium text-batak-brown-dark break-all text-center leading-tight max-w-full">
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
                        {(() => {
                          // Generate examples based on character category and name
                          const examples = []
                          
                          if (character.category === 'Induk Aksara') {
                            if (character.name === 'A') {
                              examples.push('• ᯀ (a) - digunakan sebagai vokal mandiri')
                              examples.push('• ᯀᯪ (ai) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯀᯔ (ama) = ayah')
                            } else if (character.name === 'Ha/Ka') {
                              examples.push('• ᯂ (ha/ka) - konsonan dengan vokal a')
                              examples.push('• ᯂᯪ (hi/ki) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯂᯪᯖ (hit) = kita')
                            } else if (character.name === 'Ba') {
                              examples.push('• ᯅ (ba) - konsonan dengan vokal a')
                              examples.push('• ᯅᯪ (bi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯅᯖᯰ (biang) = perempuan')
                            } else if (character.name === 'Pa') {
                              examples.push('• ᯇ (pa) - konsonan dengan vokal a')
                              examples.push('• ᯇᯪ (pi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯇᯪᯗᯮ (pitu) = tujuh')
                            } else if (character.name === 'Na') {
                              examples.push('• ᯉ (na) - konsonan dengan vokal a')
                              examples.push('• ᯉᯪ (ni) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯉᯪ (ni) = dari/milik')
                            } else if (character.name === 'Wa') {
                              examples.push('• ᯋ (wa) - konsonan dengan vokal a')
                              examples.push('• ᯋᯪ (wi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯋᯉ (wan) = hari')
                            } else if (character.name === 'Ga') {
                              examples.push('• ᯎ (ga) - konsonan dengan vokal a')
                              examples.push('• ᯎᯪ (gi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯎᯉ (gana) = nama')
                            } else if (character.name === 'Ja') {
                              examples.push('• ᯐ (ja) - konsonan dengan vokal a')
                              examples.push('• ᯐᯪ (ji) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯐᯗ (jat) = jadi')
                            } else if (character.name === 'Da') {
                              examples.push('• ᯑ (da) - konsonan dengan vokal a')
                              examples.push('• ᯑᯪ (di) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯑᯖ (dat) = datang')
                            } else if (character.name === 'Ra') {
                              examples.push('• ᯒ (ra) - konsonan dengan vokal a')
                              examples.push('• ᯒᯪ (ri) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯒᯖᯐ (raja) = raja')
                            } else if (character.name === 'Ma') {
                              examples.push('• ᯔ (ma) - konsonan dengan vokal a')
                              examples.push('• ᯔᯪ (mi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯔᯉᯪᯘᯪ (manisi) = manis')
                            } else if (character.name === 'Ca') {
                              examples.push('• ᯕ (ca) - konsonan dengan vokal a')
                              examples.push('• ᯕᯪ (ci) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯕᯪᯞᯮ (cilu) = telur')
                            } else if (character.name === 'Fa') {
                              examples.push('• ᯖ (fa) - konsonan dengan vokal a')
                              examples.push('• ᯖᯪ (fi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯖᯪᯞᯔ (film) = film')
                            } else if (character.name === 'Ta') {
                              examples.push('• ᯗ (ta) - konsonan dengan vokal a')
                              examples.push('• ᯗᯪ (ti) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯗᯖᯰ (tano) = tanah')
                            } else if (character.name === 'Sa') {
                              examples.push('• ᯘ (sa) - konsonan dengan vokal a')
                              examples.push('• ᯘᯪ (si) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯘᯘᯔ (sasam) = asam')
                            } else if (character.name === 'Ya') {
                              examples.push('• ᯛ (ya) - konsonan dengan vokal a')
                              examples.push('• ᯛᯪ (yi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯛᯘᯮᯘ (yasus) = Yesus')
                            } else if (character.name === 'Nga') {
                              examples.push('• ᯝ (nga) - konsonan dengan vokal a')
                              examples.push('• ᯝᯪ (ngi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯝᯔᯠ (nganya) = mulut')
                            } else if (character.name === 'La') {
                              examples.push('• ᯞ (la) - konsonan dengan vokal a')
                              examples.push('• ᯞᯪ (li) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯞᯇ᯲ (lap) = lebar')
                            } else if (character.name === 'Nya') {
                              examples.push('• ᯠ (nya) - konsonan dengan vokal a')
                              examples.push('• ᯠᯪ (nyi) - dengan anak ni surat i')
                              examples.push('• Dalam kata: ᯠᯖᯔ (nyata) = nyata')
                            }
                          } else if (character.category === 'Ina ni Surat') {
                            if (character.name === 'I') {
                              examples.push('• ᯤ (i) - vokal mandiri untuk kata yang dimulai i')
                              examples.push('• ᯤᯔ (ima) = lima (angka)')
                              examples.push('• ᯤᯗ (ita) = kita')
                            } else if (character.name === 'U') {
                              examples.push('• ᯥ (u) - vokal mandiri untuk kata yang dimulai u')
                              examples.push('• ᯥᯞᯘ (ulas) = ular')
                              examples.push('• ᯥᯔ (uma) = ladang')
                            }
                          } else if (character.category === 'Anak ni Surat') {
                            if (character.name === 'Siulu (i)') {
                              examples.push('• ᯪ - diakritik untuk mengubah a menjadi i')
                              examples.push('• ᯅᯪ (bi) = dengan, oleh')
                              examples.push('• ᯉᯪ (ni) = dari, milik')
                            } else if (character.name === 'Haborotan (u)') {
                              examples.push('• ᯮ - diakritik untuk mengubah a menjadi u')
                              examples.push('• ᯅᯮ (bu) = buah')
                              examples.push('• ᯗᯮᯞᯮ (tulu) = tiga')
                            } else if (character.name === 'Hatadingan (e)') {
                              examples.push('• ᯩ - diakritik untuk mengubah a menjadi e')
                              examples.push('• ᯅᯩ (be) = ada')
                              examples.push('• ᯒᯩ (re) = ke, pada')
                            } else if (character.name === 'Siulu (o)') {
                              examples.push('• ᯬ - diakritik untuk mengubah a menjadi o')
                              examples.push('• ᯅᯬ (bo) = bau')
                              examples.push('• ᯞᯬ (lo) = lho')
                            } else if (character.name === 'Haminsaran (ng)') {
                              examples.push('• ᯰ - diakritik untuk menambah bunyi ng')
                              examples.push('• ᯅᯪᯠᯰ (biyang) = perempuan')
                              examples.push('• ᯒᯫᯰ (roang) = ruang')
                            }
                          } else if (character.category === 'Tanda Bunuh') {
                            examples.push('• ᯲ - mematikan vokal a yang melekat')
                            examples.push('• ᯞᯇ᯲ (lap) = lebar')
                            examples.push('• ᯎᯉ᯲ (gan) = dengan')
                          } else if (character.category === 'Karakter Khusus') {
                            examples.push('• ᯧ - kebereten untuk bahasa Karo/Pakpak')
                            examples.push('• Digunakan untuk bunyi e dalam dialek tertentu')
                            examples.push('• Berbeda dengan hatadingan (ᯩ)')
                          } else if (character.category === 'Angka') {
                            const numbers = ['nol', 'sada', 'dua', 'tolu', 'opat', 'lima', 'onom', 'pitu', 'walu', 'sia']
                            const index = parseInt(character.name.match(/\d+/)?.[0] || '0')
                            if (index < numbers.length) {
                              examples.push(`• ${character.character} = ${numbers[index]} (${index})`)
                              examples.push(`• Sistem bilangan tradisional Batak`)
                              examples.push(`• Digunakan dalam penulisan angka Batak`)
                            }
                          } else if (character.category === 'Contoh Kombinasi') {
                            if (character.name === 'Bi') {
                              examples.push('• ᯅᯪ (bi) = dengan, oleh')
                              examples.push('• Kombinasi: Ba + anak ni surat i')
                              examples.push('• Contoh kalimat: ᯅᯪ ᯀᯮ (bi au) = oleh saya')
                            } else if (character.name === 'Bu') {
                              examples.push('• ᯅᯮ (bu) = buah')
                              examples.push('• Kombinasi: Ba + anak ni surat u')
                              examples.push('• Contoh: ᯅᯮ ᯔᯝ (bu manga) = buah mangga')
                            } else if (character.name === 'Be') {
                              examples.push('• ᯅᯩ (be) = ada')
                              examples.push('• Kombinasi: Ba + anak ni surat e')
                              examples.push('• Contoh: ᯅᯩ ᯀᯮ (be au) = ada saya')
                            } else if (character.name === 'Bo') {
                              examples.push('• ᯅᯬ (bo) = bau')
                              examples.push('• Kombinasi: Ba + anak ni surat o')
                              examples.push('• Contoh: ᯅᯬ ᯝᯫᯒ (bo nanggar) = bau harum')
                            } else if (character.name === 'Lap') {
                              examples.push('• ᯞᯇ᯲ (lap) = lebar')
                              examples.push('• Kombinasi: La + Pa + Pangolat')
                              examples.push('• Menunjukkan penggunaan tanda bunuh')
                            } else if (character.name === 'Gana') {
                              examples.push('• ᯎᯉ (gana) = nama')
                              examples.push('• Kombinasi: Ga + Na')
                              examples.push('• Contoh: ᯎᯉ ᯀᯮ (gana au) = nama saya')
                            }
                          }
                          
                          // Default examples if no specific ones found
                          if (examples.length === 0) {
                            examples.push(`• Karakter ${character.name} dalam sistem aksara Batak`)
                            examples.push(`• Kategori: ${character.category}`)
                            examples.push(`• Pelafalan: [${character.pronunciation}]`)
                          }
                          
                          return examples.map((example, index) => (
                            <p key={index} className="text-batak-brown-light text-sm">
                              {example}
                            </p>
                          ))
                        })()}
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
