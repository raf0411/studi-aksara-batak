import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Filter } from 'lucide-react'

export default function Gallery() {
  // Placeholder data for the gallery
  const characterCategories = [
    { name: 'Vowels', count: 8, description: 'Basic vowel characters' },
    { name: 'Consonants', count: 19, description: 'Consonant characters' },
    { name: 'Diacritics', count: 12, description: 'Accent marks and modifiers' },
    { name: 'Numbers', count: 10, description: 'Numerical characters' },
  ]

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
          Character Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the complete collection of Aksara Batak characters, organized by category for easy learning and reference.
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search characters..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </motion.div>

      {/* Character Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {characterCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {category.count}
                </div>
                <p className="text-sm text-gray-600">Characters available</p>
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
        className="bg-white rounded-lg border p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Characters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {/* Placeholder character cards */}
          {Array.from({ length: 32 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <span className="text-2xl font-medium text-gray-400">?</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Usage Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-blue-50 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          How to Use the Gallery
        </h3>
        <p className="text-gray-600">
          Click on any character to view detailed information including pronunciation, usage examples, and stroke order. 
          Use the search function to quickly find specific characters or browse by category.
        </p>
      </motion.div>
    </div>
  )
}
