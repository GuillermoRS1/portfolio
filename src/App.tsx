import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SmartCityCaseStudy from './pages/SmartCityCaseStudy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-city" element={<SmartCityCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App