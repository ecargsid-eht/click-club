import { useEffect, useState } from 'react'
import logo from '../assets/clickLogo.webp'
import {motion} from 'motion/react'
function Navbar() {
  const [navInit, setNavInit] = useState(false);

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
      <div className={`navbar navbar-expand-lg navbar-dark text-white fw-semibold px-lg-5 py-0 position-fixed z-3 w-100 ${navInit ? 'navbarBlur shadow' : ''} rounded-2`}>
        <div className="container-fluid">
          <a href="" className="navbar-brand">
            <img src={logo} style={{ height: '4.5rem' }} alt="" />
          </a>
          <button className="navbar-toggler shadow-sm " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a href="" className="nav-link active">HOME</a></li>
              <li className="nav-item"><a href="" className="nav-link">CAMPUS</a></li>
              <li className="nav-item"><a href="" className="nav-link">EVENTS</a></li>
              <li className="nav-item"><a href="" className="nav-link">ACTIVITIES</a></li>
              <li className="nav-item"><a href="" className="nav-link">LEARN WITH CLICK</a></li>
              <li className="nav-item"><a href="" className="nav-link">CALENDAR</a></li>
              <li className="nav-item"><a href="" className="nav-link">ACHIEVEMENTS</a></li>
              <li className="nav-item"><a href="" className="nav-link">TEAM</a></li>
              <li className="nav-item"><a href="" className="nav-link">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar