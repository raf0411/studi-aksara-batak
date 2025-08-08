import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, MapPin, Calendar, Heart, ExternalLink } from 'lucide-react'

export default function About() {
  const culturalAspects = [
    {
      icon: Users,
      title: 'Masyarakat Batak',
      description: 'Pelajari tentang warisan budaya dan tradisi yang kaya dari kelompok etnis Batak di Sumatera Utara.',
    },
    {
      icon: MapPin,
      title: 'Asal Geografis',
      description: 'Temukan wilayah-wilayah di mana Aksara Batak berkembang dan masih dipraktikkan hingga hari ini.',
    },
    {
      icon: Calendar,
      title: 'Garis Waktu Sejarah',
      description: 'Jelajahi evolusi aksara dari zaman kuno hingga upaya pelestarian modern.',
    },
  ]

  const projectInfo = [
    { label: 'Tujuan', value: 'Pelestarian digital aksara Batak' },
    { label: 'Target Audiens', value: 'Pelajar, peneliti, dan penggemar budaya' },
    { label: 'Status Pengembangan', value: 'Pengembangan aktif dengan masukan komunitas' },
    { label: 'Sumber Terbuka', value: 'Tersedia untuk tujuan pendidikan dan penelitian' },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-batak-cream mb-4">
          Tentang Aksara Batak
        </h1>
        <p className="text-lg text-batak-cream/90 max-w-3xl mx-auto">
          Melestarikan dan mempromosikan aksara tradisional yang indah dari masyarakat Batak melalui 
          teknologi modern dan pendidikan.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-r from-batak-brown-dark to-batak-brown-darker rounded-lg p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
        <p className="text-lg text-batak-cream max-w-2xl mx-auto">
          Menciptakan platform yang mudah diakses dan komprehensif untuk mempelajari dan melestarikan Aksara Batak, 
          memastikan harta budaya ini terus berkembang di era digital.
        </p>
      </motion.div>

      {/* Cultural Aspects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-batak-brown-dark text-center">
          Memahami Budaya
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalAspects.map((aspect, index) => {
            const Icon = aspect.icon
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow bg-batak-brown-light border-0">
                  <CardHeader>
                    <div className="w-12 h-12 bg-batak-brown-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-batak-brown-dark" />
                    </div>
                    <CardTitle className="text-xl text-batak-brown-dark">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-batak-brown-dark/80">
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
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-batak-brown-dark mb-6">
            Tentang Aksara Batak
          </h2>
          <div className="space-y-4 text-batak-brown-dark/80">
            <p>
              Aksara Batak adalah sistem penulisan tradisional yang digunakan oleh masyarakat Batak di Sumatera Utara, Indonesia. 
              Aksara kuno ini telah digunakan selama berabad-abad untuk merekam sastra tradisional, teks keagamaan, 
              dan pengetahuan budaya.
            </p>
            <p>
              Aksara ini terdiri dari karakter konsonan dengan diakritik vokal, membuatnya mirip dengan sistem penulisan 
              Asia Tenggara lainnya. Setiap karakter mewakili konsonan dengan vokal inherent 
              yang dapat dimodifikasi menggunakan berbagai tanda diakritik.
            </p>
            <p>
              Saat ini, ada gerakan yang berkembang untuk melestarikan dan merevitalisasi Aksara Batak melalui platform 
              digital, program pendidikan, dan inisiatif budaya.
            </p>
          </div>
        </div>
        <div className="bg-batak-brown-muted rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📜</div>
            <p className="text-batak-brown-dark">Manuskrip tradisional Aksara Batak</p>
          </div>
        </div>
      </motion.div>

      {/* Project Information */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-batak-brown-dark text-center">
          Tentang Proyek Ini
        </h2>
        <Card className="bg-batak-brown-light border-0">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex justify-between items-center p-4 bg-batak-brown-muted rounded-lg"
                >
                  <span className="font-medium text-batak-brown-dark">{info.label}:</span>
                  <span className="text-batak-brown-dark/80">{info.value}</span>
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
        <h2 className="text-3xl font-bold text-batak-brown-dark">
          Bergabung dengan Komunitas Kami
        </h2>
        <p className="text-lg text-batak-brown-dark/80 max-w-2xl mx-auto">
          Bantu kami melestarikan dan mempromosikan Aksara Batak dengan berkontribusi pada proyek, 
          berbagi pengetahuan, atau sekadar mempelajari aksara ini sendiri.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Dukung Proyek
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </motion.div>

      {/* Acknowledgments */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-batak-brown-muted rounded-lg p-8"
      >
        <h3 className="text-xl font-bold text-batak-brown-dark mb-4 text-center">
          Ucapan Terima Kasih
        </h3>
        <p className="text-batak-brown-dark/80 text-center max-w-3xl mx-auto">
          Kami mengucapkan terima kasih kepada para ahli budaya Batak, linguis, dan anggota komunitas 
          yang telah berkontribusi dengan pengetahuan dan keahlian mereka untuk mewujudkan proyek ini. 
          Terima kasih khusus kepada semua peneliti dan institusi yang bekerja untuk melestarikan warisan Batak.
        </p>
      </motion.div>
    </div>
  )
}
