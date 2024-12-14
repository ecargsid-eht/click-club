import { BrowserRouter as Router, Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import endPoints from './endPoints'
import AboutPage from './pages/about/AboutPage'
import Navbar from './components/Navbar'
import './App.css'
import ProgressScroll from './components/ProgressScroll'

function App() {
  return (
    <Router>
      <Navbar />
      <ProgressScroll/>
      <Routes>
        <Route path={endPoints.home} element={<HomePage/>} />
        <Route path={endPoints.about} element={<AboutPage/>} />
      </Routes>
    </Router>
  )
}

export default App
