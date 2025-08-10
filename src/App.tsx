import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import CustomCursor from '@/components/CustomCursor'
import { CursorProvider } from '@/contexts/CursorContext'
import Home from '@/pages/Home'
import Gallery from '@/pages/Gallery'
import Learn from '@/pages/Learn'
import Translator from '@/pages/Translator'
import About from '@/pages/About'
import LevelPemula from '@/pages/LevelPemula'
import LessonContent from '@/pages/LessonContent'

function App() {
  return (
    <CursorProvider>
      <Router>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="galeri-karakter" element={<Gallery />} />
            <Route path="pusat-pembelajaran" element={<Learn />} />
            <Route path="pusat-pembelajaran/level-pemula" element={<LevelPemula />} />
            <Route path="pusat-pembelajaran/level-pemula/:lessonId" element={<LessonContent />} />
            <Route path="transliterasi" element={<Translator />} />
            <Route path="info" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </CursorProvider>
  )
}

export default App
