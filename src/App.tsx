import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import SmartCityCaseStudy from './projects/SmartCityCaseStudy'
import MojoCaseStudy from './projects/MojoCaseStudy'
import SpainInYouCaseStudy from './projects/SpainInYouCaseStudy'
import IndiluzCaseStudy from './projects/IndiluzCaseStudy'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-city" element={<SmartCityCaseStudy />} />
        <Route path="/mojo" element={<MojoCaseStudy />} />
        <Route path="/spain-in-you" element={<SpainInYouCaseStudy />} />
        <Route path="/indiluz" element={<IndiluzCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
