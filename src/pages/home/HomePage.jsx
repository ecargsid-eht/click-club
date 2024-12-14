import { lazy, Suspense } from "react"
import './css/Homepage.css'
// import SecondSlide from "./components/SecondSlide"
// import ThirdSlide from "./components/ThirdSlide"
// import FourthSlide from "./components/FourthSlide"
// import FifthSlide from "./components/FifthSlide"
// import SixthSlide from "./components/SixthSlide"
const FirstSlide = lazy(() => import('./components/FirstSlide'))
const SecondSlide = lazy(() => import('./components/SecondSlide'))
const ThirdSlide = lazy(() => import('./components/ThirdSlide'))
const FourthSlide = lazy(() => import('./components/FourthSlide'))
const FifthSlide = lazy(() => import('./components/FifthSlide'))
const SixthSlide = lazy(() => import('./components/SixthSlide'))
function HomePage() {
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