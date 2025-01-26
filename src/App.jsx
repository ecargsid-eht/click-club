import { BrowserRouter as Router, Routes, Route } from 'react-router'
import endPoints from './endPoints'
import './App.css'
import { lazy } from 'react'
const TeamPage = lazy(() => import('./pages/team/TeamPage'));
const LearnWithClickPage = lazy(() => import('./pages/learnWithClick/LearnWithClickPage'));
const CampusPage = lazy(() => import('./pages/campus/CampusPage'))
const ProgressScroll = lazy(() => import('./components/ProgressScroll'))
const Navbar = lazy(() => import('./components/Navbar'))
const ContactPage = lazy(() => import('./pages/contact/ContactPage'))
const HomePage = lazy(() => import('./pages/home/HomePage'))
const EventPage = lazy(() => import('./pages/events/EventPage'));
const AchievementsPage = lazy(() => import('./pages/achievements/AchievementsPage'));
const CalendarPage = lazy(() => import('./pages/calendar/CalendarPage'));
function App() {
  return (
    <Router>
      <Navbar />
      <ProgressScroll/>
      <Routes>
        <Route path={endPoints.home} element={<HomePage/>} />
        <Route path={endPoints.campus} element={<CampusPage/>} />
        <Route path={endPoints.contact} element={<ContactPage/>} />
        <Route path={endPoints.events} element={<EventPage/>} />
        <Route path={endPoints.learnWithClick} element={<LearnWithClickPage/>} />
        <Route path={endPoints.achievements} element={<AchievementsPage/>} />
        <Route path={endPoints.calendar} element={<CalendarPage/>} />
        <Route path={endPoints.team} element={<TeamPage/>} />
      </Routes>
    </Router>
  )
}

export default App
