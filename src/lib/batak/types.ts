// Types for Batak translation system
export interface BatakCharacterMap {
  consonants: Record<string, string>
  vowels: Record<string, string>
  independentVowels: Record<string, string>
  specialCharacters: Record<string, string>
  digraphs: Record<string, string>
}

export interface BatakLanguageConfig {
  name: string
  code: string
  characterMap: BatakCharacterMap
  reverseLookup?: Record<string, string>
}

export type TranslationDirection = 'latin-to-batak' | 'batak-to-latin'

export interface TranslationResult {
  success: boolean
  result: string
  errors?: string[]
  warnings?: string[]
}
