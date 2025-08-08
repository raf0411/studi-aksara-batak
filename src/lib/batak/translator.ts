import type { BatakLanguageConfig, TranslationResult, TranslationDirection } from './types'
import { BATAK_TOBA_CHARACTER_MAP, BATAK_TOBA_REVERSE_LOOKUP } from './toba'

// Language configurations
export const BATAK_LANGUAGES: Record<string, BatakLanguageConfig> = {
  toba: {
    name: 'Batak Toba',
    code: 'toba',
    characterMap: BATAK_TOBA_CHARACTER_MAP,
    reverseLookup: BATAK_TOBA_REVERSE_LOOKUP
  }
  // Future languages can be added here:
  // karo: { ... },
  // pakpak: { ... },
  // simalungun: { ... }
}

/**
 * Base translator class that can be extended for different Batak languages
 */
export class BatakTranslator {
  private config: BatakLanguageConfig

  constructor(languageCode: string = 'toba') {
    this.config = BATAK_LANGUAGES[languageCode]
    if (!this.config) {
      throw new Error(`Unsupported Batak language: ${languageCode}`)
    }
  }

  /**
   * Translates Latin text to Batak script
   */
  translateLatinToBatak(text: string): TranslationResult {
    try {
      let result = ''
      let i = 0
      const warnings: string[] = []
      
      while (i < text.length) {
        // Skip whitespace and punctuation
        if (/\s/.test(text[i]) || /[.,!?;:()[\]{}'"´`~@#$%^&*+=<>/\\|_-]/.test(text[i])) {
          result += text[i]
          i++
          continue
        }

        // Check for digraphs first (ng, ny, etc.)
        if (i < text.length - 1) {
          const digraph = text.slice(i, i + 2).toLowerCase()
          if (this.config.characterMap.digraphs[digraph]) {
            result += this.config.characterMap.digraphs[digraph]
            
            // Check for following vowel (other than 'a')
            if (i + 2 < text.length) {
              const nextChar = text[i + 2].toLowerCase()
              if (this.config.characterMap.vowels[nextChar] !== undefined && nextChar !== 'a') {
                result += this.config.characterMap.vowels[nextChar]
                i++ // Skip the vowel
              }
            }
            i += 2
            continue
          }
        }

        const char = text[i]
        const lowerChar = char.toLowerCase()

        // Handle independent vowels (capitals)
        if (this.config.characterMap.independentVowels[char]) {
          result += this.config.characterMap.independentVowels[char]
          i++
          continue
        }

        // Handle consonants
        if (this.config.characterMap.consonants[lowerChar]) {
          let consonant = this.config.characterMap.consonants[lowerChar]
          
          // Check for following vowel
          if (i + 1 < text.length) {
            const nextChar = text[i + 1].toLowerCase()
            if (this.config.characterMap.vowels[nextChar] !== undefined) {
              if (nextChar !== 'a') {
                // Add vowel diacritic for non-'a' vowels
                consonant += this.config.characterMap.vowels[nextChar]
                i++ // Skip the vowel
              } else {
                // 'a' is inherent, no need to add diacritic, but still consume it
                i++ // Skip the 'a'
              }
            }
          }
          result += consonant
        }
        // Handle special characters
        else if (this.config.characterMap.specialCharacters[lowerChar]) {
          result += this.config.characterMap.specialCharacters[lowerChar]
          warnings.push(`Character '${lowerChar}' mapped to closest Batak equivalent`)
        }
        // Handle standalone vowels (when not after consonant)
        else if (this.config.characterMap.vowels[lowerChar] !== undefined) {
          if (lowerChar === 'a') {
            // Standalone 'a' uses the base ᯀ character
            result += this.config.characterMap.consonants['a']
          } else {
            // Other vowels need a base consonant (use 'a' base + vowel diacritic)
            result += this.config.characterMap.consonants['a'] + this.config.characterMap.vowels[lowerChar]
          }
        }
        // Unknown character
        else {
          result += char
          if (!/[0-9]/.test(char)) { // Don't warn about numbers
            warnings.push(`Unknown character '${char}' kept as-is`)
          }
        }

        i++
      }

      return {
        success: true,
        result,
        warnings: warnings.length > 0 ? warnings : undefined
      }
    } catch (error) {
      return {
        success: false,
        result: '',
        errors: [`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
      }
    }
  }

  /**
   * Translates Batak script to Latin text
   */
  translateBatakToLatin(text: string): TranslationResult {
    try {
      let result = ''
      let i = 0
      const warnings: string[] = []
      
      while (i < text.length) {
        const char = text[i]
        
        // Skip whitespace and punctuation
        if (/\s/.test(char) || /[.,!?;:()[\]{}'"´`~@#$%^&*+=<>/\\|_-]/.test(char)) {
          result += char
          i++
          continue
        }

        // Check if it's a known Batak character
        if (this.config.reverseLookup && this.config.reverseLookup[char]) {
          result += this.config.reverseLookup[char]
        } else {
          // Unknown Batak character or regular Latin character
          result += char
          if (/[\u1BC0-\u1BFF]/.test(char)) { // Batak Unicode range
            warnings.push(`Unknown Batak character '${char}' kept as-is`)
          }
        }

        i++
      }

      return {
        success: true,
        result,
        warnings: warnings.length > 0 ? warnings : undefined
      }
    } catch (error) {
      return {
        success: false,
        result: '',
        errors: [`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
      }
    }
  }

  /**
   * Main translation method that handles both directions
   */
  translate(text: string, direction: TranslationDirection): TranslationResult {
    if (!text.trim()) {
      return {
        success: true,
        result: ''
      }
    }

    if (direction === 'latin-to-batak') {
      return this.translateLatinToBatak(text)
    } else {
      return this.translateBatakToLatin(text)
    }
  }

  /**
   * Get available languages
   */
  static getAvailableLanguages(): BatakLanguageConfig[] {
    return Object.values(BATAK_LANGUAGES)
  }

  /**
   * Get current language configuration
   */
  getLanguageConfig(): BatakLanguageConfig {
    return this.config
  }
}

// Default translator instance for Batak Toba
export const batakTobaTranslator = new BatakTranslator('toba')

// Convenience functions for direct use
export const translateLatinToBatakToba = (text: string): TranslationResult => {
  return batakTobaTranslator.translate(text, 'latin-to-batak')
}

export const translateBatakTobaToLatin = (text: string): TranslationResult => {
  return batakTobaTranslator.translate(text, 'batak-to-latin')
}
