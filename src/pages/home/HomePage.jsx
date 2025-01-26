import { lazy, Suspense, useLayoutEffect } from "react"
import './css/Homepage.css'
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
  return (
    <div className="mainContainer">
      <Suspense fallback={<>...</>}>
        <FirstSlide/>
        <SecondSlide/>
        <ThirdSlide/>
        <FourthSlide/>
        <FifthSlide/>
        <SixthSlide/>
      </Suspense>
    </div>
  )
}

export default HomePage