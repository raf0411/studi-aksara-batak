import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Home, Book, GraduationCap, Languages, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Character Gallery', href: '/gallery', icon: Book },
  { name: 'Learning Center', href: '/learn', icon: GraduationCap },
  { name: 'Translator', href: '/translator', icon: Languages },
  { name: 'About', href: '/about', icon: Info },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100) // Trigger sticky after 100px of scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'fixed top-4 left-0 right-0 z-40' 
          : 'relative'
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
        isScrolled 
          ? 'bg-batak-brown-deep/95 backdrop-blur-sm shadow-lg border border-batak-brown-medium/30 rounded-full' 
          : 'mt-4 bg-batak-brown-deep shadow-sm border border-batak-brown-medium/20 rounded-full'
      }`}>
        <nav className="" aria-label="Top">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className=" text-xl font-bold text-batak-brown-medium font-heading hover:drop-shadow-[0_0_8px_rgba(214,192,179,0.8)] transition-all duration-300">
              StudiAksaraBatak.id
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-batak-brown-light bg-batak-brown-darker rounded-full'
                        : 'text-batak-brown-light hover:text-batak-brown-light hover:[&>svg]:text-batak-brown-light hover:[&>svg]:drop-shadow-[0_0_8px_rgba(214,192,179,0.8)] hover:drop-shadow-[0_0_8px_rgba(214,192,179,0.8)] rounded-md'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mr-2 transition-all duration-300 ${
                      isActive 
                        ? 'text-batak-brown-light' 
                        : 'text-batak-brown-medium'
                    }`} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 mt-2 pt-2"
          >
            <div className="space-y-1 pb-3">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-3 py-2 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-batak-brown-darker rounded-full'
                        : 'text-gray-700 hover:text-batak-brown-light hover:[&>svg]:text-batak-brown-light hover:[&>svg]:drop-shadow-[0_0_8px_rgba(214,192,179,0.6)] hover:drop-shadow-[0_0_8px_rgba(214,192,179,0.6)] rounded-md'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className={`w-5 h-5 mr-3 transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : ''
                    }`} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
        </nav>
      </div>
    </header>
  )
}
