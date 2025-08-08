// Simple test file to verify Batak translation functionality
import { translateLatinToBatakToba, translateBatakTobaToLatin } from '../src/lib/batak'

// Test cases
const testCases = [
  { latin: 'horas', description: 'Common Batak greeting' },
  { latin: 'batak', description: 'The ethnic name' },
  { latin: 'toba', description: 'Sub-ethnic name' },
  { latin: 'aku', description: 'I/me' },
  { latin: 'molo', description: 'if' },
  { latin: 'I', description: 'Independent vowel I' },
  { latin: 'U', description: 'Independent vowel U' },
  { latin: 'Horas batak toba', description: 'Full sentence' }
]

console.log('🧪 Testing Batak Toba Translation...\n')

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.description}`)
  console.log(`Latin: "${testCase.latin}"`)
  
  const toBatak = translateLatinToBatakToba(testCase.latin)
  console.log(`To Batak: "${toBatak.result}"`)
  console.log(`Success: ${toBatak.success}`)
  
  if (toBatak.warnings && toBatak.warnings.length > 0) {
    console.log(`Warnings: ${toBatak.warnings.join(', ')}`)
  }
  
  // Test reverse translation
  const backToLatin = translateBatakTobaToLatin(toBatak.result)
  console.log(`Back to Latin: "${backToLatin.result}"`)
  console.log(`Round-trip success: ${backToLatin.success}`)
  
  console.log('---')
})

console.log('✅ Translation tests completed!')
