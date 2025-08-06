import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MapPin, Calendar, Heart, ExternalLink } from 'lucide-react'

export default function About() {
  const culturalAspects = [
    {
      icon: Users,
      title: 'The Batak People',
      description: 'Learn about the rich heritage and traditions of the Batak ethnic groups in North Sumatra.',
    },
    {
      icon: MapPin,
      title: 'Geographic Origins',
      description: 'Discover the regions where Aksara Batak developed and is still practiced today.',
    },
    {
      icon: Calendar,
      title: 'Historical Timeline',
      description: 'Explore the evolution of the script from ancient times to modern preservation efforts.',
    },
  ]

  const projectInfo = [
    { label: 'Purpose', value: 'Digital preservation of Aksara Batak script' },
    { label: 'Target Audience', value: 'Students, researchers, and cultural enthusiasts' },
    { label: 'Development Status', value: 'Active development with community input' },
    { label: 'Open Source', value: 'Available for educational and research purposes' },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Aksara Batak
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Preserving and promoting the beautiful traditional script of the Batak people through 
          modern technology and education.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          To create an accessible, comprehensive platform for learning and preserving Aksara Batak, 
          ensuring this cultural treasure continues to thrive in the digital age.
        </p>
      </motion.div>

      {/* Cultural Aspects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Understanding the Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalAspects.map((aspect, index) => {
            const Icon = aspect.icon
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {aspect.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* About the Script */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Aksara Batak
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Aksara Batak is a traditional writing system used by the Batak people of North Sumatra, Indonesia. 
              This ancient script has been used for centuries to record traditional literature, religious texts, 
              and cultural knowledge.
            </p>
            <p>
              The script consists of consonantal characters with vowel diacritics, making it similar to other 
              Southeast Asian writing systems. Each character represents a consonant with an inherent vowel 
              that can be modified using various diacritical marks.
            </p>
            <p>
              Today, there is a growing movement to preserve and revitalize Aksara Batak through digital 
              platforms, educational programs, and cultural initiatives.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📜</div>
            <p className="text-gray-600">Traditional Aksara Batak manuscript</p>
          </div>
        </div>
      </motion.div>

      {/* Project Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          About This Project
        </h2>
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-900">{info.label}:</span>
                  <span className="text-gray-600">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Help us preserve and promote Aksara Batak by contributing to the project, 
          sharing knowledge, or simply learning the script yourself.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Support the Project
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Learn More
          </Button>
        </div>
      </motion.div>

      {/* Acknowledgments */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-gray-50 rounded-lg p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
          Acknowledgments
        </h3>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          We extend our gratitude to the Batak cultural experts, linguists, and community members 
          who have contributed their knowledge and expertise to make this project possible. 
          Special thanks to all researchers and institutions working to preserve Batak heritage.
        </p>
      </motion.div>
    </div>
  )
}
