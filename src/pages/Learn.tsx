import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, BookOpen, Award, CheckCircle } from 'lucide-react'

export default function Learn() {
  const learningPaths = [
    {
      title: 'Level Pemula',
      description: 'Mulai dengan karakter dasar dan pelafalan',
      lessons: 12,
      duration: '2-3 minggu',
      icon: BookOpen,
      completed: 0,
    },
    {
      title: 'Level Menengah',
      description: 'Pelajari kombinasi karakter dan kata-kata sederhana',
      lessons: 18,
      duration: '3-4 minggu',
      icon: PlayCircle,
      completed: 0,
    },
    {
      title: 'Level Lanjutan',
      description: 'Kuasai teks kompleks dan aksara tradisional',
      lessons: 24,
      duration: '4-6 minggu',
      icon: Award,
      completed: 0,
    },
  ]

  const recentLessons = [
    { title: 'Pengenalan Vokal', progress: 100, type: 'completed' },
    { title: 'Konsonan Dasar', progress: 75, type: 'in-progress' },
    { title: 'Tanda Diakritik', progress: 0, type: 'locked' },
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
        <h1 className="text-4xl font-bold text-batak-brown-dark mb-4">
          Pusat Pembelajaran
        </h1>
        <p className="text-lg text-batak-brown-medium max-w-2xl mx-auto">
          Kuasai Aksara Batak melalui pelajaran terstruktur, latihan interaktif, dan tutorial komprehensif.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-r from-batak-brown-dark to-batak-brown-darker rounded-lg p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Progres Pembelajaran Anda</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">0%</div>
            <div className="text-batak-cream">Progres Keseluruhan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">0</div>
            <div className="text-batak-cream">Pelajaran Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">0</div>
            <div className="text-batak-cream">Karakter Dipelajari</div>
          </div>
        </div>
      </motion.div>

      {/* Learning Paths */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-batak-brown-dark">Jalur Pembelajaran</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => {
            const Icon = path.icon
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-batak-brown-light border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-batak-brown-muted rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-batak-brown-dark" />
                      </div>
                      <CardTitle className="text-xl text-batak-brown-dark">{path.title}</CardTitle>
                    </div>
                    <CardDescription className="text-batak-brown-dark/80">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-batak-brown-dark">
                        <span>{path.lessons} pelajaran</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="w-full bg-batak-brown-muted rounded-full h-2">
                        <div 
                          className="bg-batak-brown-dark h-2 rounded-full" 
                          style={{ width: `${(path.completed / path.lessons) * 100}%` }}
                        ></div>
                      </div>
                      <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                        {index === 0 ? "Mulai Belajar" : "Segera Hadir"}
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
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-batak-brown-dark">Lanjutkan Pembelajaran</h2>
        <div className="space-y-4">
          {recentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="hover:shadow-md transition-shadow bg-batak-brown-light border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        lesson.type === 'completed' ? 'bg-batak-brown-muted' :
                        lesson.type === 'in-progress' ? 'bg-batak-brown-medium' : 'bg-batak-brown-soft'
                      }`}>
                        {lesson.type === 'completed' ? (
                          <CheckCircle className="h-5 w-5 text-batak-brown-dark" />
                        ) : lesson.type === 'in-progress' ? (
                          <PlayCircle className="h-5 w-5 text-batak-brown-dark" />
                        ) : (
                          <div className="w-5 h-5 bg-batak-brown-dark rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-batak-brown-dark">{lesson.title}</h3>
                        <p className="text-sm text-batak-brown-dark/70">
                          {lesson.type === 'completed' ? 'Selesai' :
                           lesson.type === 'in-progress' ? 'Sedang Berlangsung' : 'Terkunci'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-batak-brown-dark">{lesson.progress}%</div>
                        <div className="w-20 bg-batak-brown-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              lesson.type === 'completed' ? 'bg-batak-brown-dark' :
                              lesson.type === 'in-progress' ? 'bg-batak-brown-darker' : 'bg-batak-brown-soft'
                            }`}
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button 
                        variant={lesson.type === 'locked' ? "outline" : "default"}
                        disabled={lesson.type === 'locked'}
                      >
                        {lesson.type === 'completed' ? 'Ulasan' :
                         lesson.type === 'in-progress' ? 'Lanjutkan' : 'Terkunci'}
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
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-batak-brown-muted rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-batak-brown-dark mb-4">
          Rekomendasi Latihan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-batak-brown-light rounded-lg p-4">
            <h4 className="font-medium text-batak-brown-dark mb-2">Latihan Harian</h4>
            <p className="text-sm text-batak-brown-dark/80">
              Habiskan 15-20 menit setiap hari untuk berlatih pengenalan dan penulisan karakter.
            </p>
          </div>
          <div className="bg-batak-brown-light rounded-lg p-4">
            <h4 className="font-medium text-batak-brown-dark mb-2">Kartu Flash</h4>
            <p className="text-sm text-batak-brown-dark/80">
              Gunakan kartu flash interaktif untuk menghafal bentuk dan bunyi karakter.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
