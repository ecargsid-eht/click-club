import { useEffect, useState } from 'react'
import {motion} from 'motion/react'
import { useLocation, NavLink } from 'react-router';
import endPoints from '../endPoints';
function Navbar() {
  const [navInit, setNavInit] = useState(false);
  const location = useLocation()

  useEffect(() => {
    // Collapse the navbar when the route changes
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
  }, [location]);

  function handleScroll() {
    if (window.scrollY > 10) {
      setNavInit(true); // Make navbar opaque
    } else {
      setNavInit(false); // Keep navbar transparent
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div animate={{
      y: [-100, 0],
      transition: { duration: 0.5 }
    }}>
      <div className={`navbar navbar-expand-lg navbar-dark text-white fw-semibold px-lg-5 py-0  z-3 w-100 ${location.pathname !== '/' ? 'bg-dark' : 'position-fixed'} ${navInit ? 'navbarBlur shadow' : ''}`}>
        <div className="container-fluid">
          <NavLink to={endPoints.home} className="navbar-brand">
            <img src={"/publicAssets/clickLogo.webp"} style={{ height: '4.5rem' }} alt="" />
          </NavLink>
          <button className="navbar-toggler shadow-sm " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink to={endPoints.home} className="nav-link">HOME</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.campus} className="nav-link">CAMPUS</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.events} className="nav-link">EVENTS</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.activities} className="nav-link">ACTIVITIES</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.learnWithClick} className="nav-link">LEARN WITH CLICK</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.calendar} className="nav-link">CALENDAR</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.achievements} className="nav-link">ACHIEVEMENTS</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.team} className="nav-link">TEAM</NavLink></li>
              <li className="nav-item"><NavLink to={endPoints.contact} className="nav-link">CONTACT</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar