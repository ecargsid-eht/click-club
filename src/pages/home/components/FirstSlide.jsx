import { motion } from 'motion/react'

function FirstSlide() {
    return (
        <div className="slide slide1 h-100">
            <div className="d-flex flex-column justify-content-center text-center position-absolute w-100 h-100">
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className='z-1 fw-normal fs-2 mb-1 color-dark'>Click Club, NIT Raipur</motion.p>
                <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className='z-1 fw-lighter fs-2 text-center' style={{ fontFamily: "Poppins" }}>I dream. I frame. I live. I click.</motion.p>
            </div>
        </div>
    )
}

export default FirstSlide