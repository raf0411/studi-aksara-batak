import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Aksara Batak Website. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
