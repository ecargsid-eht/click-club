import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from "react"
import './css/Homepage.css'
import { NavLink } from "react-router"
import endPoints from "../../endPoints"
const FirstSlide = lazy(() => import('./components/FirstSlide'))
const SecondSlide = lazy(() => import('./components/SecondSlide'))
const ThirdSlide = lazy(() => import('./components/ThirdSlide'))
const FourthSlide = lazy(() => import('./components/FourthSlide'))
const FifthSlide = lazy(() => import('./components/FifthSlide'))
const SixthSlide = lazy(() => import('./components/SixthSlide'))
function HomePage() {
  useLayoutEffect(() => {
    document.title = "Home | Click Club";
  },[])

  const learnButtonRef = useRef(null);
  const eventsButtonRef = useRef(null);

  useEffect(() => {
    const buttons = [learnButtonRef.current, eventsButtonRef.current];

    const addRippleEffect = (button) => {
      if (!button) return; // Ensure button exists
      const ripple = document.createElement("div");
      ripple.classList.add("ripple-effect");
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove(); // Remove the ripple after animation completes
      }, 800); // Match the animation duration
    };

    const createRipples = () => {
      buttons.forEach((button) => {
        if (button) {
          addRippleEffect(button);
        }
      });
    };

    // Trigger ripples every second
    const interval = setInterval(createRipples, 1000); // Every second

    // Cleanup function to remove intervals on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs once


  return (
    <div className="mainContainer">
      <Suspense fallback={<>...</>}>
        <FirstSlide/>
        <SecondSlide/>
        <ThirdSlide/>
        <FourthSlide/>
        <FifthSlide/>
        <SixthSlide/>

        <div className="position-fixed d-md-none" style={{bottom:20,right:20}}>
          <NavLink to={endPoints.learnWithClick} className="btn btn-dark text-white rounded-3 btn-sm mb-2 floatingButton" style={{boxShadow:'2px 2px 2px 2px #444444'}} ref={learnButtonRef}>Learn with Click</NavLink>
          <br />
          <NavLink to={endPoints.events} className="float-end btn btn-dark text-white rounded-3 btn-sm text-start floatingButton" style={{boxShadow:'2px 2px 2px 2px #444444'}} ref={eventsButtonRef}>Events</NavLink>
        </div>
      </Suspense>
    </div>
  )
}

export default HomePage