import { Link, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

export default function Layout() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-batak-gradient-horizontal flex flex-col pt-2 sm:pt-4 overflow-x-hidden">
      <Navbar />
      <main className="flex-1 mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 pb-16 sm:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-batak-brown-deep-alt backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8">
          <div className="text-center text-batak-brown-light">
            <p className="text-sm sm:text-base">&copy; {currentYear} StudiAksaraBatak.id &bull; made by <Link to="https://raf0411.vercel.app" target="_blank" className="hover:text-batak-cream hover:drop-shadow-[0_0_8px_rgba(255,248,220,0.6)] transition-all duration-300">@raf_0411</Link></p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
