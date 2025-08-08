import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, BookOpen, Award, CheckCircle, Construction, Clock } from 'lucide-react'

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
      {/* Coming Soon Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-lg p-4 sm:p-6 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Construction className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
          <h2 className="text-lg sm:text-2xl font-bold text-amber-800">Fitur Dalam Pengembangan</h2>
        </div>
        <p className="text-sm sm:text-base text-amber-700 mb-3 sm:mb-4 leading-relaxed">
          Fitur pembelajaran interaktif sedang dalam tahap pengembangan. Saat ini Anda dapat melihat preview dari struktur pembelajaran yang akan tersedia.
        </p>
        <div className="flex items-center justify-center gap-2 text-amber-600">
          <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-sm sm:text-base font-medium">Segera hadir - Q3 2025</span>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-batak-brown-dark mb-3 sm:mb-4 px-2">
          Pusat Pembelajaran
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-batak-brown-medium max-w-2xl mx-auto px-4">
          Kuasai Aksara Batak melalui pelajaran terstruktur, latihan interaktif, dan tutorial komprehensif.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-batak-brown-dark to-batak-brown-darker rounded-lg p-4 sm:p-6 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Progres Pembelajaran Anda (Preview)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-3 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold">--</div>
              <div className="text-xs sm:text-sm text-batak-cream">Progres Keseluruhan</div>
            </div>
            <div className="text-center p-3 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold">--</div>
              <div className="text-xs sm:text-sm text-batak-cream">Pelajaran Selesai</div>
            </div>
            <div className="text-center p-3 sm:p-0">
              <div className="text-2xl sm:text-3xl font-bold">--</div>
              <div className="text-xs sm:text-sm text-batak-cream">Karakter Dipelajari</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Learning Paths */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-batak-brown-dark px-2">Jalur Pembelajaran (Preview)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {learningPaths.map((path, index) => {
            const Icon = path.icon
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-batak-brown-light border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/40 z-10 flex items-center justify-center">
                    <div className="bg-white/90 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-gray-600">
                      Dalam Pengembangan
                    </div>
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-batak-brown-muted rounded-lg flex items-center justify-center">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-batak-brown-dark" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-batak-brown-dark">{path.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-batak-brown-dark/80">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs sm:text-sm text-batak-brown-dark">
                        <span>{path.lessons} pelajaran</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="w-full bg-batak-brown-muted rounded-full h-2">
                        <div 
                          className="bg-batak-brown-dark h-2 rounded-full" 
                          style={{ width: `${(path.completed / path.lessons) * 100}%` }}
                        ></div>
                      </div>
                      <Button className="w-full text-sm" disabled>
                        Segera Hadir
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
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-batak-brown-dark px-2">Contoh Struktur Pembelajaran</h2>
        <div className="space-y-4">
          {recentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
            >
              <Card className="hover:shadow-md transition-shadow bg-batak-brown-light border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 z-10"></div>
                <CardContent className="p-4 sm:p-6 relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                        lesson.type === 'completed' ? 'bg-batak-brown-muted/50' :
                        lesson.type === 'in-progress' ? 'bg-batak-brown-medium/50' : 'bg-batak-brown-soft/50'
                      }`}>
                        {lesson.type === 'completed' ? (
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-batak-brown-dark/70" />
                        ) : lesson.type === 'in-progress' ? (
                          <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-batak-brown-dark/70" />
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-batak-brown-dark/70 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-batak-brown-dark text-sm sm:text-base">{lesson.title}</h3>
                        <p className="text-xs sm:text-sm text-batak-brown-dark/70">
                          Contoh struktur pelajaran
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="flex-1 sm:text-right">
                        <div className="text-xs sm:text-sm font-medium text-batak-brown-dark/70 mb-1">Preview</div>
                        <div className="w-full sm:w-20 bg-batak-brown-muted/50 rounded-full h-2">
                          <div 
                            className="bg-batak-brown-dark/50 h-2 rounded-full"
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button 
                        variant="outline"
                        disabled
                        size="sm"
                        className="text-xs sm:text-sm whitespace-nowrap"
                      >
                        Tidak Tersedia
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
        transition={{ duration: 0.8, delay: 1.0 }}
        className="bg-batak-brown-muted rounded-lg p-4 sm:p-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-semibold text-batak-brown-dark mb-4">
            Rencana Fitur Latihan
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-batak-brown-light/70 rounded-lg p-3 sm:p-4">
              <h4 className="font-medium text-batak-brown-dark mb-2 text-sm sm:text-base">Latihan Harian</h4>
              <p className="text-xs sm:text-sm text-batak-brown-dark/80 leading-relaxed">
                Habiskan 15-20 menit setiap hari untuk berlatih pengenalan dan penulisan karakter.
              </p>
            </div>
            <div className="bg-batak-brown-light/70 rounded-lg p-3 sm:p-4">
              <h4 className="font-medium text-batak-brown-dark mb-2 text-sm sm:text-base">Kartu Flash</h4>
              <p className="text-xs sm:text-sm text-batak-brown-dark/80 leading-relaxed">
                Gunakan kartu flash interaktif untuk menghafal bentuk dan bunyi karakter.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
