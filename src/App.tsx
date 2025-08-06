import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Gallery from '@/pages/Gallery'
import Learn from '@/pages/Learn'
import Translator from '@/pages/Translator'
import About from '@/pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="learn" element={<Learn />} />
          <Route path="translator" element={<Translator />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
