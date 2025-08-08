// Main export file for Batak translation utilities
export type { 
  BatakCharacterMap, 
  BatakLanguageConfig, 
  TranslationDirection, 
  TranslationResult 
} from './types'

export { 
  BATAK_TOBA_CHARACTER_MAP, 
  BATAK_TOBA_REVERSE_LOOKUP 
} from './toba'

export { 
  BatakTranslator, 
  BATAK_LANGUAGES,
  batakTobaTranslator,
  translateLatinToBatakToba,
  translateBatakTobaToLatin 
} from './translator'
