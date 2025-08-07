import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Book, GraduationCap, Languages } from 'lucide-react'
import { Link } from 'react-router-dom'
import { batakColorClasses } from '@/lib/colors'

export default function HomeWithBatakColors() {
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
    <div className="space-y-16 bg-batak-gray-light min-h-screen">
      {/* Hero Section with Gradient Background */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 bg-batak-gradient relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-batak-brown-light rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-batak-cream rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-batak-cream mb-6">
            Welcome to Aksara Batak
          </h1>
          <p className="text-xl text-batak-brown-light mb-8 max-w-3xl mx-auto">
            Discover the ancient and beautiful writing system of the Batak people. 
            Learn, explore, and preserve this cultural heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-batak-brown-light text-batak-brown-dark hover:bg-batak-cream transition-colors"
            >
              <Link to="/learn">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-batak-brown-light text-batak-brown-light hover:bg-batak-brown-light hover:text-batak-brown-dark"
            >
              <Link to="/gallery">
                Explore Gallery
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-batak-brown-dark mb-4">
            Explore Aksara Batak
          </h2>
          <p className="text-lg text-batak-brown-medium max-w-2xl mx-auto">
            Discover the features that will help you learn and appreciate this traditional script
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-batak-brown-light-50 ${batakColorClasses.combinations.primaryCard}`}>
                  <Link to={feature.href}>
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 bg-batak-brown-medium rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-batak-brown-dark transition-colors">
                        <Icon className="h-6 w-6 text-batak-cream" />
                      </div>
                      <CardTitle className="text-xl text-batak-brown-dark">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base text-batak-brown-medium">
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

      {/* CTA Section with Cream Background */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-batak-cream rounded-2xl p-12 text-center mx-4 border border-batak-brown-light"
      >
        <h2 className="text-3xl font-bold text-batak-brown-dark mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-batak-brown-medium mb-8 max-w-2xl mx-auto">
          Join us in preserving and learning this beautiful traditional script. 
          Start your adventure with Aksara Batak today.
        </p>
        <Button 
          size="lg" 
          asChild
          className="bg-batak-brown-dark text-batak-cream hover:bg-batak-brown-darker transition-colors"
        >
          <Link to="/learn">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
  )
}
