import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, MapPin, Calendar, Scroll, BookOpen, GraduationCap, Globe } from 'lucide-react'
import { useState } from 'react'
import React from 'react'

import manuskripImage from '@/assets/manuskrip_aksara_batak.webp';
import budayaImage2 from '@/assets/budaya_aksara_batak_2.webp';
import budayaImage3 from '@/assets/budaya_aksara_batak_3.webp';

export default function About() {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<number | null>(null)
  const [showDetail, setShowDetail] = React.useState(false)
  const detailRef = React.useRef<HTMLDivElement>(null)

  const handleTimelineClick = (index: number) => {
    if (selectedTimelineItem === index) {
      setShowDetail(false)
      setTimeout(() => {
        setSelectedTimelineItem(null)
      }, 400) 
    } else {
      setSelectedTimelineItem(index)
      setShowDetail(true)
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }

  const timelineData = [
    {
  year: "300 SM – 800 M",
      title: "Asal-Usul Kuno (Aksara Brahmi & Pallawa)",
      icon: Scroll,
      details: [
        "Akar Aksara Batak dapat ditelusuri ke India kuno:",
        "sekitar 300 SM: Cikal bakal semua aksara di Asia Selatan dan Tenggara, termasuk Batak, berasal dari Aksara Brahmi di India.",
        "sekitar 500–800 M: Aksara Pallawa, turunan Brahmi, berkembang di India Selatan dan menyebar ke Asia Tenggara, menjadi induk aksara Nusantara."
      ]
    },
    {
  year: "800 – 1400 M",
      title: "Pengaruh Kawi & Kelahiran Aksara Batak",
      icon: BookOpen,
      details: [
        "Pengaruh India membentuk aksara perantara, cikal bakal langsung Aksara Batak:",
        "sekitar 800–1300 M: Aksara Kawi berkembang dari Pallawa, digunakan di Sriwijaya, Majapahit, Jawa, Bali, dan Sumatra.",
        "sekitar abad ke-14: Aksara Batak mulai terbentuk sebagai aksara unik. Bukti: pelabuhan Kota Cina, varian 'Na kuno' (ᯉ) mirip huruf 'Na' Kawi abad ke-14."
      ]
    },
    {
  year: "1400 – 1800 M",
      title: "Masa Penggunaan Luas & Penyebaran",
      icon: Calendar,
      details: [
        "Aksara Batak digunakan aktif oleh masyarakat Batak:",
        "1430: Nicolo da Conti, penjelajah Eropa, mencatat istilah 'Batak'.",
        "Penggunaan sehari-hari: ditulis di bambu, kulit kayu (pustaha laklak), tulang. Utamanya oleh datu untuk ilmu pengobatan, kalender, mantra, surat, dan sastra.",
        "Penyebaran dari selatan ke utara: huruf 'Nya' dan 'Wa' di Toba diwarisi dari aksara selatan."
      ]
    },
    {
  year: "1800 – Pertengahan Abad ke-20",
      title: "Kontak dengan Eropa & Masa Kemunduran",
      icon: GraduationCap,
      details: [
        "Kedatangan Eropa membawa perubahan besar:",
        "Abad ke-19: Misionaris Jerman dan Belanda mencetak materi keagamaan dan buku sekolah dalam Aksara Batak.",
        "Pasca-Perang Dunia I: Misionaris berhenti mencetak buku Batak, beralih ke aksara Latin. Penggunaan aksara Batak menurun drastis.",
        "Pertengahan abad ke-20: Aksara Batak hanya digunakan sebagai simbol budaya/hiasan."
      ]
    },
    {
      year: "2009 – Sekarang",
      title: "Kebangkitan di Era Digital",
      icon: Globe,
      details: [
        "Era digital membawa kebangkitan dan pelestarian baru:",
        "2009: Aksara Batak resmi masuk standar Unicode (U+1BC0–U+1BFF).",
        "Saat ini: Minat tumbuh kembali, muncul font komputer, aplikasi transliterasi, pengajaran di sekolah, penggunaan di media sosial dan seni oleh komunitas Batak."
      ]
    }
  ]

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
      title: 'Sejarah',
      description: 'Jelajahi evolusi aksara dari zaman kuno hingga upaya pelestarian modern.',
    },
  ]

  const projectInfo = [
    { label: 'IDN Times', value: 'Link', link: 'https://sumut.idntimes.com/life/education/mengenal-sejarah-aksara-batak-dan-penyebarannya-00-hz1ln-0y23hn' },
    { label: 'aksara-batak.com', value: 'Link', link: 'https://aksara-batak.com/lessons/toba-1-2/' },
    { label: 'Uli Kozok', value: 'Link', link: 'https://ulikozok.com/aksara-batak/sejarah-aksara-batak/'},
    { label: 'Transliterasi', value: 'Link', link: 'https://bennylin.github.io/transliterasi/batak.html' },
  ]

  return (
    <div className="space-y-8 sm:space-y-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col gap-6"
      >
        <h1 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-heading text-batak-brown-light mb-2 sm:mb-4 px-2">
          Tentang Aksara Batak
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-batak-brown-light max-w-2xl mx-auto px-4 leading-relaxed">
          Melestarikan dan mempromosikan aksara tradisional yang indah dari masyarakat Batak melalui 
          teknologi modern dan pendidikan.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-batak-brown-muted rounded-lg p-6 sm:p-8 text-white text-center"
      >
  <h2 className="text-lg sm:text-xl lg:text-3xl font-heading mb-3 sm:mb-4 text-batak-brown-light">Misi Kami</h2>
  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-batak-brown-light max-w-4xl mx-auto leading-relaxed">
          Menciptakan platform yang mudah diakses dan komprehensif untuk mempelajari dan melestarikan Aksara Batak, 
          memastikan harta budaya ini terus berkembang di era digital.
        </p>
      </motion.div>

      {/* Cultural Aspects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6 sm:space-y-8"
      >
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading text-batak-brown-light text-center px-2">
          Memahami Budaya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {culturalAspects.map((aspect, index) => {
            const Icon = aspect.icon
            return (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full rounded-2xl shadow-[0_0_10px_rgba(214,192,179,0.5)] text-center hover:shadow-lg transition-shadow bg-batak-brown-medium border-0">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 bg-batak-brown-muted rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-12 sm:w-12 text-batak-brown-dark" />
                    </div>
                    <CardTitle className="text-base sm:text-xl lg:text-3xl font-heading text-batak-brown-dark">{aspect.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg text-batak-brown-dark leading-relaxed">
                      {aspect.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading text-batak-brown-light mb-4">
            Sejarah Aksara Batak
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-batak-brown-light max-w-3xl mx-auto">
            Jelajahi perjalanan panjang aksara Batak dari masa lampau hingga era digital
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full">
          {/* Timeline Line: vertical on mobile, horizontal on desktop */}
          {/* Desktop horizontal line */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-1 w-full bg-gradient-to-r from-batak-brown-light via-batak-brown-medium to-batak-brown-dark"
            style={{ zIndex: 0 }}
          ></div>
          {/* Mobile vertical line */}
          <div
            className="lg:hidden absolute left-1/2 -translate-x-1/2 top-8 w-1 h-full bg-gradient-to-b from-batak-brown-light via-batak-brown-medium to-batak-brown-dark"
            style={{ zIndex: 0 }}
          ></div>
          {/* Timeline Items: vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-4 relative z-10">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center relative lg:flex-1"
                  style={{ zIndex: 2 }}
                >
                  {/* Timeline Node */}
                  <button
                    onClick={() => handleTimelineClick(index)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-batak-brown-light shadow-lg transition-all duration-300 flex items-center justify-center group hover:scale-110 z-10 mb-4 ${
                      selectedTimelineItem === index 
                        ? 'bg-batak-brown-dark shadow-[0_0_20px_rgba(214,192,179,0.5)]' 
                        : 'bg-batak-brown-medium hover:bg-batak-brown-dark'
                    }`}
                    style={{
                      position: 'relative',
                      left: '0',
                      top: '0',
                    }}
                  >
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-batak-brown-light" />
                  </button>
                  {/* Year Label */}
                  <div className="bg-batak-brown-light text-batak-brown-dark px-3 py-1 lg:px-4 lg:py-2 rounded-full text-center text-xs lg:text-xs font-semibold shadow-md mb-4">
                    {item.year}
                  </div>
                  {/* Title (always visible) */}
                  <h3 className="text-center text-batak-brown-light font-heading text-sm lg:text-base font-semibold mb-2 min-h-[2.5rem] lg:min-h-[3rem] flex items-center">
                    {/* Title removed from timeline node, only year and icon shown */}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Details Card - Shows below timeline when item is selected */}
        <motion.div
          ref={detailRef}
          initial={false}
          animate={{ 
            height: showDetail ? 'auto' : 0,
            opacity: showDetail ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          {selectedTimelineItem !== null && (
            <Card className="bg-batak-brown-dark border-0 p-2 py-12 lg:p-4 lg:py-8">
              <CardHeader className="relative">
                <button
                  onClick={() => handleTimelineClick(selectedTimelineItem)}
                  className="absolute top-0 right-4 w-8 h-8 rounded-full bg-batak-brown-medium hover:bg-batak-brown-light transition-colors duration-300 flex items-center justify-center group z-10"
                  aria-label="Tutup detail sejarah"
                >
                  <span className="text-white group-hover:text-batak-brown-dark text-xl">×</span>
                </button>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-batak-brown-medium rounded-full flex items-center justify-center mb-2">
                    {React.createElement(timelineData[selectedTimelineItem].icon, {
                      className: "w-6 h-6 text-white"
                    })}
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl text-batak-brown-light mb-1 text-center">
                    {timelineData[selectedTimelineItem].title}
                  </CardTitle>
                  <div className="text-lg text-batak-brown-light/80 font-semibold text-center mt-2">
                    {timelineData[selectedTimelineItem].year}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {Array.isArray(timelineData[selectedTimelineItem].details) ? (
                  <ul className="text-batak-brown-light leading-relaxed text-left list-disc list-inside space-y-2">
                    <li>
                      {timelineData[selectedTimelineItem].details[0]}
                      {timelineData[selectedTimelineItem].details.length > 1 && (
                        <ul className="list-[circle] ml-6 mt-2 space-y-1">
                          {timelineData[selectedTimelineItem].details.slice(1).map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                ) : (
                  <p className="text-white/90 leading-relaxed text-center">
                    {timelineData[selectedTimelineItem].details}
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Interactive Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <p className="text-batak-brown-light/70 text-sm">
            💡 Klik pada ikon timeline atau kartu untuk melihat detail lebih lanjut
          </p>
        </motion.div>
      </motion.div>

      {/* About the Script */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      >
        <div className='flex flex-col gap-3'>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-heading text-batak-brown-light mb-6">
            Apa itu Aksara Batak?
          </h2>
          <div className="space-y-2 sm:space-y-4 text-batak-brown-light text-justify text-xs sm:text-sm md:text-base lg:text-lg">
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
        <div className="bg-batak-brown-muted rounded-lg p-8 py-20 flex items-center justify-center shadow-[0_0_10px_rgba(214,192,179,0.5)]">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <img
                src={manuskripImage}
                alt="Manuskrip tradisional Aksara Batak"
                className="rounded-lg border-2 border-batak-brown-medium object-cover w-40 h-40 sm:w-56 sm:h-56 lg:w-96 lg:h-96 transition-all duration-300 shadow-[0_0_5px_rgba(214,192,179,0.5)]"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-batak-brown-light text-sm">Manuskrip tradisional Aksara Batak</p>
          </div>
        </div>
      </motion.div>

      {/* Cultural Significance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      >
        <div className="bg-batak-brown-muted rounded-lg p-8 py-20 flex items-center justify-center shadow-[0_0_10px_rgba(214,192,179,0.5)]">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <img
                src={budayaImage2}
                alt="Budaya Batak"
                className="rounded-lg border-2 border-batak-brown-medium object-cover w-40 h-40 sm:w-56 sm:h-56 lg:w-96 lg:h-96 transition-all duration-300 shadow-[0_0_5px_rgba(214,192,179,0.5)]"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-batak-brown-light text-sm">Budaya Batak</p>
          </div>
        </div>
        <div className='flex flex-col gap-3 order-2 lg:order-none'>
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-heading text-batak-brown-light mb-6">
            Pengaruh Budaya
          </h2>
          <div className="space-y-2 sm:space-y-4 text-batak-brown-light text-justify text-xs sm:text-sm md:text-base lg:text-lg">
              <div className="mb-2">
                <span className="block font-semibold">Aksara Batak bukan sekadar sistem tulisan, melainkan pilar kebudayaan yang vital bagi masyarakat Batak. Peran pentingnya dapat dilihat dalam beberapa aspek berikut:</span>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-bold">Pustaha Laklak:</span> Medium utama untuk menulis kitab kuno dari kulit kayu yang berisi:
                  <ul className="list-[circle] pl-5 mt-1">
                    <li>Ritual keagamaan Parmalim (agama asli Batak)</li>
                    <li>Resep obat-obatan herbal</li>
                    <li>Kalender penanggalan (porhalaan)</li>
                    <li>Mantra-mantra magis</li>
                  </ul>
                  <span className="block mt-1">Aksara ini menjadi kunci untuk mewariskan pengetahuan leluhur dari generasi ke generasi.</span>
                </li>
                <li>
                  <span className="font-bold">Penjaga Adat dan Sastra:</span> Digunakan untuk menuliskan hukum adat, silsilah (tarombo), surat-menyurat, serta karya sastra seperti syair dan pantun (umpasa). Menunjukkan peran integral dalam kehidupan sosial dan intelektual masyarakat Batak.
                </li>
                <li>
                  <span className="font-bold">Simbol Identitas dan Kebanggaan:</span> Di era modern, meskipun penggunaannya menurun, Aksara Batak bangkit sebagai simbol identitas budaya yang kuat. Banyak orang Batak, terutama generasi muda, mempelajarinya untuk terhubung kembali dengan akar budaya. Sering digunakan dalam seni, logo, nama bangunan, dan tato sebagai penanda kebanggaan etnis. 📜
                </li>
              </ul>
          </div>
        </div>
      </motion.div>

      {/* Regional Variations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
      >
        <div className='flex flex-col gap-3'>
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-heading text-batak-brown-light mb-6">
            Variasi Regional Aksara Batak
          </h2>
          <div className="space-y-2 sm:space-y-4 text-batak-brown-light text-justify text-xs sm:text-sm md:text-base lg:text-lg">
            <p>
              Aksara Batak tidak bersifat monolitik. Ia memiliki variasi gaya penulisan yang berkembang di setiap wilayah sub-etnis Batak. Meskipun secara mendasar memiliki struktur yang sama (sistem *abugida* atau *alpha-syllabary*), terdapat perbedaan dalam bentuk beberapa huruf (*ina ni surat*) dan diakritik (*anak ni surat*).
            </p>

            <p>
              Berikut adalah variasi utama Aksara Batak:
            </p>
            
            <ol>
                  <li className="mb-2 flex items-start">
                    <span className="font-bold mr-3 min-w-[2em] text-right">1.</span>
                    <div>
                      <span className="font-bold">Aksara Toba</span><span className="font-normal">: Varian paling umum dan terdokumentasi, digunakan oleh masyarakat Batak Toba di sekitar Danau Toba.</span>
                    </div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="font-bold mr-3 min-w-[2em] text-right">2.</span>
                    <div>
                      <span className="font-bold">Aksara Mandailing</span><span className="font-normal">: Digunakan oleh masyarakat Batak Mandailing, memiliki beberapa bentuk huruf khas dibandingkan Toba. Sering disebut <span className="italic">surat na sampulu sia</span> (tulisan sembilan belas).</span>
                    </div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="font-bold mr-3 min-w-[2em] text-right">3.</span>
                    <div>
                      <span className="font-bold">Aksara Karo</span><span className="font-normal">: Digunakan oleh masyarakat Batak Karo, memiliki bentuk huruf yang sangat berbeda dan dikenal sebagai <span className="italic">surat si sepulu siwah</span>.</span>
                    </div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="font-bold mr-3 min-w-[2em] text-right">4.</span>
                    <div>
                      <span className="font-bold">Aksara Simalungun</span><span className="font-normal">: Digunakan oleh masyarakat Batak Simalungun, memiliki ciri khas tersendiri dan kadang disebut <span className="italic">surat na sapuluh siah</span>.</span>
                    </div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="font-bold mr-3 min-w-[2em] text-right">5.</span>
                    <div>
                      <span className="font-bold">Aksara Pakpak</span><span className="font-normal">: Digunakan oleh masyarakat Batak Pakpak, sering dianggap paling mirip dengan varian Toba.</span>
                    </div>
                  </li>
            </ol>

          </div>
        </div>
        <div className="bg-batak-brown-muted rounded-lg p-8 py-20 flex items-center justify-center shadow-[0_0_10px_rgba(214,192,179,0.5)]">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center">
              <img
                src={budayaImage3}
                alt="Tradisi Batak"
                className="rounded-lg border-2 border-batak-brown-medium object-cover w-40 h-40 sm:w-56 sm:h-56 lg:w-96 lg:h-96 transition-all duration-300 shadow-[0_0_5px_rgba(214,192,179,0.5)]"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-batak-brown-light text-sm">Tradisi Batak</p>
          </div>
        </div>
      </motion.div>


      {/* Sumber Proyek */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-8 pb-12"
      >
  <h2 className="text-lg sm:text-2xl lg:text-4xl font-heading text-batak-brown-light text-center">
          Sumber Website
        </h2>
  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-batak-brown-light/80 max-w-5xl mx-auto">
          Berikut merupakan sumber-sumber informasi tentang Aksara Batak yang digunakan pada saat pengembangan website ini. Terimakasih kepada para kontributor yang telah menyediakan informasi dan materi yang berharga ini.
        </p>
        <Card className="bg-batak-brown-muted border-0">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-batak-brown-medium rounded-xl shadow-[0_0_5px_rgba(214,192,179,0.5)]"
                >
                  <span className="font-medium text-batak-brown-dark">{info.label}</span>
                  <a className="text-batak-brown-dark/50 underline hover:text-batak-brown-muted transition-all duration-300" href={info.link} target="_blank" rel="noopener noreferrer">{info.value}</a>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      {/* <motion.div
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
      </motion.div> */}

      {/* Acknowledgments */}
      {/* <motion.div
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
      </motion.div> */}
    </div>
  )
}
