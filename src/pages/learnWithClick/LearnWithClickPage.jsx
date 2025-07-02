
import { useLayoutEffect, lazy, Suspense } from 'react'
const CarouselComp = lazy(() => import('./components/CarouselComp'))
const PhotoEditor = lazy(() => import('./components/PhotoEditor'))
import './css/LearnWithClickPage.css'

function LearnWithClickPage() {
      useLayoutEffect(() => {
        document.title = "Learn with Click | Click Club"
      },[])
    return (
      <Suspense fallback={<>...</>}>
            <CarouselComp />
            <PhotoEditor />
        </Suspense>
    )
}

export default LearnWithClickPage