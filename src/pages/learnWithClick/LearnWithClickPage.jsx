
import { useLayoutEffect } from 'react'
import CarouselComp from './components/CarouselComp'
import PhotoEditor from './components/PhotoEditor'
import './css/LearnWithClickPage.css'

function LearnWithClickPage() {
      useLayoutEffect(() => {
        document.title = "Learn with Click | Click Club"
      },[])
    return (
        <>
            <CarouselComp />
            <PhotoEditor />
        </>
    )
}

export default LearnWithClickPage