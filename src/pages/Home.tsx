import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Book, GraduationCap, Languages } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    {
      icon: Book,
      title: 'Character Gallery',
      description: 'Explore the beautiful Aksara Batak writing system',
      href: '/gallery',
    },
    {
      icon: GraduationCap,
      title: 'Learning Center',
      description: 'Learn to read and write Aksara Batak',
      href: '/learn',
    },
    {
      icon: Languages,
      title: 'Translator Tool',
      description: 'Translate between Latin and Aksara Batak',
      href: '/translator',
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Aksara Batak
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover the ancient and beautiful writing system of the Batak people. 
          Learn, explore, and preserve this cultural heritage for future generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/learn">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">
              Explore Gallery
            </Link>
          </Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Aksara Batak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the features that will help you learn and appreciate this traditional script
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={feature.href}>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-blue-50 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in preserving and learning this beautiful traditional script. 
          Start your adventure with Aksara Batak today.
        </p>
        <Button size="lg" asChild>
          <Link to="/learn">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
  )
}
