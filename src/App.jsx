import { BrowserRouter as Router, Routes, Route } from 'react-router'
import endPoints from './endPoints'
import './App.css'
import { lazy } from 'react'
import EventPage from './pages/events/EventPage'
import AchievementsPage from './pages/achievements/AchievementsPage'
const LearnWithClickPage = lazy(() => import('./pages/learnWithClick/LearnWithClickPage'));
const CampusPage = lazy(() => import('./pages/campus/CampusPage'))
const ProgressScroll = lazy(() => import('./components/ProgressScroll'))
const Navbar = lazy(() => import('./components/Navbar'))
const AboutPage = lazy(() => import('./pages/about/AboutPage'))
const HomePage = lazy(() => import('./pages/home/HomePage'))

function App() {
  return (
    <Router>
      <Navbar />
      <ProgressScroll/>
      <Routes>
        <Route path={endPoints.home} element={<HomePage/>} />
        <Route path={endPoints.campus} element={<CampusPage/>} />
        <Route path={endPoints.about} element={<AboutPage/>} />
        <Route path={endPoints.events} element={<EventPage/>} />
        <Route path={endPoints.learnWithClick} element={<LearnWithClickPage/>} />
        <Route path={endPoints.achievements} element={<AchievementsPage/>} />
      </Routes>
    </Router>
  )
}

export default App
