import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, BookOpen, Award, CheckCircle } from 'lucide-react'

export default function Learn() {
  const learningPaths = [
    {
      title: 'Beginner Level',
      description: 'Start with basic characters and pronunciation',
      lessons: 12,
      duration: '2-3 weeks',
      icon: BookOpen,
      completed: 0,
    },
    {
      title: 'Intermediate Level',
      description: 'Learn character combinations and simple words',
      lessons: 18,
      duration: '3-4 weeks',
      icon: PlayCircle,
      completed: 0,
    },
    {
      title: 'Advanced Level',
      description: 'Master complex texts and traditional scripts',
      lessons: 24,
      duration: '4-6 weeks',
      icon: Award,
      completed: 0,
    },
  ]

  const recentLessons = [
    { title: 'Introduction to Vowels', progress: 100, type: 'completed' },
    { title: 'Basic Consonants', progress: 75, type: 'in-progress' },
    { title: 'Diacritical Marks', progress: 0, type: 'locked' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Center
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master Aksara Batak through structured lessons, interactive exercises, and comprehensive tutorials.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Your Learning Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">0%</div>
            <div className="text-blue-100">Overall Progress</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">0</div>
            <div className="text-blue-100">Lessons Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">0</div>
            <div className="text-blue-100">Characters Learned</div>
          </div>
        </div>
      </motion.div>

      {/* Learning Paths */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-900">Learning Paths</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => {
            const Icon = path.icon
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                    </div>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{path.lessons} lessons</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(path.completed / path.lessons) * 100}%` }}
                        ></div>
                      </div>
                      <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                        {index === 0 ? "Start Learning" : "Coming Soon"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Recent Lessons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
        <div className="space-y-4">
          {recentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        lesson.type === 'completed' ? 'bg-green-100' :
                        lesson.type === 'in-progress' ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {lesson.type === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : lesson.type === 'in-progress' ? (
                          <PlayCircle className="h-5 w-5 text-blue-600" />
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">
                          {lesson.type === 'completed' ? 'Completed' :
                           lesson.type === 'in-progress' ? 'In Progress' : 'Locked'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{lesson.progress}%</div>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              lesson.type === 'completed' ? 'bg-green-500' :
                              lesson.type === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button 
                        variant={lesson.type === 'locked' ? "outline" : "default"}
                        disabled={lesson.type === 'locked'}
                      >
                        {lesson.type === 'completed' ? 'Review' :
                         lesson.type === 'in-progress' ? 'Continue' : 'Locked'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Practice Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gray-50 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Practice Recommendations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Daily Practice</h4>
            <p className="text-sm text-gray-600">
              Spend 15-20 minutes daily practicing character recognition and writing.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Flashcards</h4>
            <p className="text-sm text-gray-600">
              Use interactive flashcards to memorize character shapes and sounds.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
