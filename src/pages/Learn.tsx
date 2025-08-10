import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, BookOpen, Award, CheckCircle, Construction, Clock } from 'lucide-react'
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function Learn() {
  const navigate = useNavigate();

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
          <span className="text-sm sm:text-base font-medium">Segera hadir</span>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading text-batak-brown-light mb-2 sm:mb-4 px-2">
          Pusat Pembelajaran
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-batak-brown-light max-w-5xl mx-auto px-4 leading-relaxed">
          Kuasai Aksara Batak melalui pelajaran terstruktur, latihan interaktif, dan tutorial komprehensif.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r bg-batak-brown-muted rounded-xl p-4 sm:p-6 sm:py-14 relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col gap-8">
          <h2 className="text-lg sm:text-xl lg:text-3xl font-heading mb-4 text-batak-brown-medium">Progres Pembelajaran Anda (Preview)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-3 sm:p-0 flex flex-col gap-3">
              <div className="text-2xl sm:text-6xl font-bold text-batak-brown-dark">0%</div>
              <div className="text-xs sm:text-sm text-batak-brown-light">Progres Keseluruhan</div>
            </div>
            <div className="text-center p-3 sm:p-0 flex flex-col gap-3">
              <div className="text-2xl sm:text-6xl font-bold text-batak-brown-dark">0</div>
              <div className="text-xs sm:text-sm text-batak-brown-light">Pelajaran Selesai</div>
            </div>
            <div className="text-center p-3 sm:p-0 flex flex-col gap-3">
              <div className="text-2xl sm:text-6xl font-bold text-batak-brown-dark">0</div>
              <div className="text-xs sm:text-sm text-batak-brown-light">Karakter Dipelajari</div>
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
        <h2 className="text-xl sm:text-3xl font-heading text-batak-brown-light px-2">Jalur Pembelajaran (Preview)</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          
          {/* Beginner Level: Active */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex h-full"
          >
            <Card className="flex flex-col h-full transition-shadow bg-batak-brown-medium shadow-[0_0_30px_rgba(214,192,179,0.5)] border-0 relative overflow-hidden rounded-xl">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-batak-brown-muted rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 sm:h-8 sm:w-8 text-batak-brown-dark" />
                  </div>
                  <CardTitle className="text-lg sm:text-2xl text-batak-brown-dark font-heading">Level Pemula</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base text-batak-brown-dark/80">Mulai dengan karakter dasar dan pelafalan</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 h-full justify-between">
                  <div className="flex justify-between text-xs sm:text-sm text-batak-brown-dark">
                    <span>3 pelajaran</span>
                    <span className="invisible">&nbsp;</span>
                  </div>
                  <div className="w-full bg-batak-brown-light-50 rounded-full h-2">
                    <div className="bg-batak-brown-light-50 h-2 rounded-full" style={{ width: `0%` }}></div>
                  </div>
                  <Button className="w-full text-sm mt-auto" onClick={() => navigate('/pusat-pembelajaran/level-pemula')}>
                    Mulai Belajar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Intermediate: Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex h-full"
          >
            <Card className="flex flex-col h-full transition-shadow bg-batak-brown-medium shadow-[0_0_30px_rgba(214,192,179,0.5)] border-0 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-white/40 z-10 flex items-center justify-center">
                <div className="bg-white/90 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-gray-600">Dalam Pengembangan</div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-batak-brown-muted rounded-lg flex items-center justify-center">
                    <PlayCircle className="h-4 w-4 sm:h-8 sm:w-8 text-batak-brown-dark" />
                  </div>
                  <CardTitle className="text-lg sm:text-2xl text-batak-brown-dark font-heading">Level Menengah</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base text-batak-brown-dark/80">Pelajari kombinasi karakter dan kata-kata sederhana</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 h-full justify-between">
                  <div className="flex justify-between text-xs sm:text-sm text-batak-brown-dark">
                    <span>18 pelajaran</span>
                    <span>3-4 minggu</span>
                  </div>
                  <div className="w-full bg-batak-brown-light-50 rounded-full h-2">
                    <div className="bg-batak-brown-light-50 h-2 rounded-full" style={{ width: `0%` }}></div>
                  </div>
                  <Button className="w-full text-sm mt-auto" disabled>Segera Hadir</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Advanced: Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex h-full"
          >
            <Card className="flex flex-col h-full transition-shadow bg-batak-brown-medium shadow-[0_0_30px_rgba(214,192,179,0.5)] border-0 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-white/40 z-10 flex items-center justify-center">
                <div className="bg-white/90 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-gray-600">Dalam Pengembangan</div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-6 mb-2">
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-batak-brown-muted rounded-lg flex items-center justify-center">
                    <Award className="h-4 w-4 sm:h-8 sm:w-8 text-batak-brown-dark" />
                  </div>
                  <CardTitle className="text-lg sm:text-2xl text-batak-brown-dark font-heading">Level Lanjutan</CardTitle>
                </div>
                <CardDescription className="text-sm sm:text-base text-batak-brown-dark/80">Kuasai teks kompleks dan aksara tradisional</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-col gap-3 h-full justify-between">
                  <div className="flex justify-between text-xs sm:text-sm text-batak-brown-dark">
                    <span>24 pelajaran</span>
                    <span>4-6 minggu</span>
                  </div>
                  <div className="w-full bg-batak-brown-light-50 rounded-full h-2">
                    <div className="bg-batak-brown-light-50 h-2 rounded-full" style={{ width: `0%` }}></div>
                  </div>
                  <Button className="w-full text-sm mt-auto" disabled>Segera Hadir</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
