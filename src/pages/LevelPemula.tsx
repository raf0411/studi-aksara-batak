import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, PlayCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { BookOpen } from 'lucide-react';

const lessons = [
  { id: 1, title: 'Sejarah dan Pengenalan Dasar', type: 'completed', progress: 100, lesson: 'Lesson 1' },
  { id: 2, title: 'Induk Huruf (Ina ni Surat)', type: 'in-progress', progress: 60, lesson: 'Lesson 2' },
  { id: 3, title: 'Latihan Menulis Ina ni Surat', type: 'not-started', progress: 0, lesson: 'Lesson 3' },
  { id: 4, title: 'Anak Huruf (Panganak ni Surat)', type: 'not-started', progress: 0, lesson: 'Lesson 4' },
  { id: 5, title: 'Tanda Mati (Pangolat)', type: 'not-started', progress: 0 , lesson: 'Lesson 5' },
  { id: 6, title: 'Mari Menulis Kata Pertama!', type: 'not-started', progress: 0, lesson: 'Lesson 6' },
];

export default function LevelPemula() {
  const navigate = useNavigate();
  return (
  <div className="w-full px-0 sm:px-4 lg:px-8 py-8 space-y-6">
      <h1 className="text-xl sm:text-xl lg:text-3xl xl:text-4xl font-heading text-batak-brown-light mb-2 sm:mb-4 px-2 text-center">Level Pemula: Daftar Pelajaran</h1>
      <p className="text-sm text-center sm:text-base lg:text-lg text-batak-brown-light max-w-5xl mx-auto px-4 leading-relaxed">
        Kuasai Aksara Batak melalui pelajaran terstruktur, latihan interaktif, dan tutorial komprehensif.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-batak-brown-light px-2 pt-10">Pilih Pelajaran</h2>
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
            >
              <Card className="w-full max-w-xs mx-auto sm:max-w-none transition-shadow bg-batak-brown-medium relative border-none overflow-hidden shadow-[0_0_10px_rgba(214,192,179,0.5)]">
                <CardContent className="w-full p-4 sm:p-6 relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 mr-3 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-batak-brown-muted border-none shadow">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-batak-brown-dark" />
                      </div>
                      <div className="flex-1 flex flex-col gap-3">
                        <h3 className="font-heading font-bold text-batak-brown-dark text-md sm:text-lg">{lesson.title}</h3>
                        <p className="text-xs sm:text-sm text-batak-brown-dark">
                          {lesson.lesson}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      {/* Removed preview label and progress bar for cleaner UI */}
                    <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                      <Button
                        size="lg"
                        className="text-xs sm:text-sm whitespace-nowrap bg-batak-brown-dark text-batak-brown-light hover:bg-batak-brown-dark/90 flex items-center gap-2 px-3 py-4 rounded-lg shadow-[0_0_5px_rgba(214,192,179,0.5)]"
                        onClick={() => navigate(`/pusat-pembelajaran/level-pemula/${lesson.id}`)}
                      >
                        Belajar
                        <ArrowRight className="w-4 h-4 text-batak-brown-light" />
                      </Button>
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
