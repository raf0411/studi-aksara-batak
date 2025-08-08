import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Book, GraduationCap, Languages } from 'lucide-react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { useTypewriter } from '@/hooks/useTypewriter'

export default function Home() {
  const features = [
    {
      icon: Book,
      title: 'Galeri Karakter',
      description: 'Jelajahi sistem penulisan Aksara Batak yang indah',
      href: '/gallery',
    },
    {
      icon: GraduationCap,
      title: 'Pusat Pembelajaran',
      description: 'Belajar membaca dan menulis Aksara Batak',
      href: '/learn',
    },
    {
      icon: Languages,
      title: 'Alat Penerjemah',
      description: 'Terjemahkan antara Latin dan Aksara Batak',
      href: '/translator',
    },
  ]

  const aksaraCharacters = [
    'ᯀ', 'ᯁ', 'ᯂ', 'ᯃ', 'ᯄ', 'ᯅ', 'ᯆ', 'ᯇ', 'ᯈ', 'ᯉ', 'ᯊ', 'ᯋ', 'ᯌ', 'ᯍ', 'ᯎ', 'ᯏ', 'ᯐ', 'ᯑ', 'ᯒ', 'ᯓ', 'ᯔ', 'ᯕ'
  ]

  const welcomeTexts = [
    'Selamat Datang di Studi Aksara Batak!',
    'ᯘᯩᯞᯔᯖ᯲ ᯑᯖᯰ ᯑᯪ ᯘ᯲ᯖᯮᯑᯪ ᯀᯄ᯦᯲ᯘᯒ ᯅᯖᯄ᯦᯲!'
  ]

  const typewriterText = useTypewriter({
    texts: welcomeTexts,
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenTexts: 3000,
    loop: true
  })

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  const handleWheelCapture = (e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }

  return (
    <>
      <style>{`
        .marquee-container {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-x: hidden !important;
          overflow-y: visible !important;
        }
        .marquee-container::-webkit-scrollbar {
          display: none !important;
        }
        .rfm-marquee {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-x: hidden !important;
          overflow-y: visible !important;
        }
        .rfm-marquee::-webkit-scrollbar {
          display: none !important;
        }
        .marquee-no-scroll {
          pointer-events: none;
          touch-action: none;
          overscroll-behavior: none;
        }
      `}</style>
      <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and buttons */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-batak-cream mb-6 min-h-[2rem] md:min-h-[3.5rem]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl text-justify text-batak-cream/90 max-w-2xl">
              Temukan sistem penulisan kuno dan indah dari masyarakat Batak. 
              Belajar, jelajahi, dan lestarikan warisan budaya ini untuk generasi mendatang.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Button asChild size="lg">
                <Link to="/learn">
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/gallery">
                  Jelajahi Galeri
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right side - Scrolling Aksara Batak Characters */}
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-lg h-96 flex flex-col gap-8 items-center justify-center select-none marquee-no-scroll overflow-hidden" 
              onWheel={handleWheel}
              onWheelCapture={handleWheelCapture}
            >
              {/* First row - scrolling right to left */}
              <div 
                className="w-full py-3 marquee-container marquee-no-scroll" 
                onWheel={handleWheel}
                onWheelCapture={handleWheelCapture}
                style={{ overflowX: 'hidden', overflowY: 'visible' }}
              >
                <Marquee speed={50} gradient={false} pauseOnHover={false} pauseOnClick={false} className="rfm-marquee">
                  {aksaraCharacters.map((char, index) => (
                    <div key={`row1-${index}`} className="mx-6 select-none marquee-no-scroll" onWheel={handleWheel}>
                      <span className="text-4xl font-bold text-batak-cream/70 font-mono select-none pointer-events-none">{char}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              
              {/* Second row - scrolling left to right */}
              <div 
                className="w-full py-3 marquee-container marquee-no-scroll" 
                onWheel={handleWheel}
                onWheelCapture={handleWheelCapture}
                style={{ overflowX: 'hidden', overflowY: 'visible' }}
              >
                <Marquee speed={40} gradient={false} direction="right" pauseOnHover={false} pauseOnClick={false} className="rfm-marquee">
                  {aksaraCharacters.map((char, index) => (
                    <div key={`row2-${index}`} className="mx-6 select-none marquee-no-scroll" onWheel={handleWheel}>
                      <span className="text-3xl font-bold text-batak-cream/60 font-mono select-none pointer-events-none">{char}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
                
              {/* Third row - scrolling left to right */}
              <div 
                className="w-full py-3 marquee-container marquee-no-scroll" 
                onWheel={handleWheel}
                onWheelCapture={handleWheelCapture}
                style={{ overflowX: 'hidden', overflowY: 'visible' }}
              >
                <Marquee speed={50} gradient={false} pauseOnHover={false} pauseOnClick={false} className="rfm-marquee">
                  {aksaraCharacters.map((char, index) => (
                    <div key={`row4-${index}`} className="mx-6 select-none marquee-no-scroll" onWheel={handleWheel}>
                      <span className="text-4xl font-bold text-batak-cream/70 font-mono select-none pointer-events-none">{char}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
              
              {/* Fourth row - scrolling right to left (faster) */}
              <div 
                className="w-full py-3 marquee-container marquee-no-scroll" 
                onWheel={handleWheel}
                onWheelCapture={handleWheelCapture}
                style={{ overflowX: 'hidden', overflowY: 'visible' }}
              >
                <Marquee speed={60} gradient={false} direction='right' pauseOnHover={false} pauseOnClick={false} className="rfm-marquee">
                  {aksaraCharacters.map((char, index) => (
                    <div key={`row3-${index}`} className="mx-4 select-none marquee-no-scroll" onWheel={handleWheel}>
                      <span className="text-2xl font-bold text-batak-cream/50 font-mono select-none pointer-events-none">{char}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-5xl font-bold text-batak-brown-light mb-4">
            Explore Aksara Batak
          </h2>
          <p className="text-lg text-batak-brown-light/80 max-w-2xl mx-auto">
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-batak-brown-medium border-0 flex flex-col">
                  <CardHeader className="text-left font-heading">
                    <div className="w-24 h-24 bg-batak-brown-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-12 w-12 text-batak-brown-dark" />
                    </div>
                    <CardTitle className="text-2xl text-batak-brown-dark">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <CardDescription className="text-left text-batak-brown-dark text-base flex-1">
                      {feature.description}
                    </CardDescription>
                    <Button asChild className="w-full mt-auto">
                      <Link to={feature.href}>
                        Jelajahi
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-batak-brown-muted w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] p-12 text-center"
      >
        <h2 className="text-3xl font-heading font-bold text-batak-brown-light mb-4">
          Siap Memulai Perjalanan Anda?
        </h2>
        <p className="text-lg text-batak-brown-light mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan kami dalam melestarikan dan mempelajari aksara tradisional yang indah ini. 
          Mulai petualangan Anda dengan Aksara Batak hari ini.
        </p>
        <Button size="lg" asChild>
          <Link to="/learn">
            Mulai Sekarang
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.section>
    </div>
    </>
  )
}
