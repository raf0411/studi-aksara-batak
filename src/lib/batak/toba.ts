import type { BatakCharacterMap } from './types'

// Batak Toba character mappings based on Unicode standard and aksara-batak.com
export const BATAK_TOBA_CHARACTER_MAP: BatakCharacterMap = {
  // Base consonants with inherent 'a' vowel (19 Induk Aksara)
  consonants: {
    'a': 'ᯀ',   // a (standalone vowel)
    'h': 'ᯂ',   // ha/ka
    'b': 'ᯅ',   // ba
    'p': 'ᯇ',   // pa
    'n': 'ᯉ',   // na
    'w': 'ᯋ',   // wa
    'g': 'ᯎ',   // ga
    'j': 'ᯐ',   // ja
    'd': 'ᯑ',   // da
    'r': 'ᯒ',   // ra
    'm': 'ᯔ',   // ma
    't': 'ᯗ',   // ta (variant ᯖ for other regions)
    's': 'ᯘ',   // sa
    'y': 'ᯛ',   // ya
    'l': 'ᯞ',   // la
    'k': 'ᯂ',   // same as ha/ka
  },

  // Digraphs (two-letter combinations)
  digraphs: {
    'ng': 'ᯝ',  // nga
    'ny': 'ᯠ',  // nya
  },

  // Vowel diacritics (anak ni surat) - modifiers for consonants
  vowels: {
    'a': '',     // inherent vowel (no diacritic needed)
    'i': 'ᯪ',    // anak ni surat i (siulu)
    'u': 'ᯮ',    // anak ni surat u (haborotan)
    'e': 'ᯩ',    // anak ni surat e (hatadingan)
    'o': 'ᯬ',    // anak ni surat o (siulu)
  },

  // Independent vowels (ina ni surat) - standalone characters
  independentVowels: {
    'I': 'ᯤ',    // ina ni surat I
    'U': 'ᯥ',    // ina ni surat U
  },

  // Special characters and mappings
  specialCharacters: {
    'x': 'ᯧ',    // kebereten (less common in Toba)
    'f': 'ᯇ',    // mapped to pa
    'q': 'ᯂ',    // mapped to ka/ha
    'v': 'ᯋ',    // mapped to wa
    'z': 'ᯘ',    // mapped to sa
    '᯲': '᯲',    // pangolat (tanda bunuh/killer mark)
  }
}

// Create reverse lookup for Batak to Latin translation
export const createReverseLookup = (characterMap: BatakCharacterMap): Record<string, string> => {
  const lookup: Record<string, string> = {}
  
  // Reverse consonants
  Object.entries(characterMap.consonants).forEach(([latin, batak]) => {
    lookup[batak] = latin
  })
  
  // Reverse digraphs
  Object.entries(characterMap.digraphs).forEach(([latin, batak]) => {
    lookup[batak] = latin
  })
  
  // Reverse vowels (note: these are diacritics, handled differently)
  Object.entries(characterMap.vowels).forEach(([latin, batak]) => {
    if (batak && batak !== '') {
      lookup[batak] = latin
    }
  })
  
  // Reverse independent vowels
  Object.entries(characterMap.independentVowels).forEach(([latin, batak]) => {
    lookup[batak] = latin
  })
  
  // Reverse special characters
  Object.entries(characterMap.specialCharacters).forEach(([latin, batak]) => {
    lookup[batak] = latin
  })
  
  return lookup
}

export const BATAK_TOBA_REVERSE_LOOKUP = createReverseLookup(BATAK_TOBA_CHARACTER_MAP)
