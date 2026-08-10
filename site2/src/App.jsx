import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  )
}

export default App
