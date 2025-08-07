import { Link, Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

export default function Layout() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className="min-h-screen bg-batak-gradient-horizontal flex flex-col pt-4">
      <Navbar />
      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <Outlet />
      </main>
      <footer className="bg-batak-brown-deep-alt backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-batak-brown-light">
            <p>&copy; {currentYear} StudiAksaraBatak.id &bull; made by <Link to="https://raf0411.vercel.app" target="_blank" className="hover:text-batak-cream hover:drop-shadow-[0_0_8px_rgba(255,248,220,0.6)] transition-all duration-300">@raf_0411</Link></p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
