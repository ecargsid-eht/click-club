import { motion } from 'framer-motion';

function SecondSlide() {
    return (
        <div className="slide slide2 min-vh-100">
            <div className="d-flex flex-column justify-content-center text-center col-lg-5">
                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className=' fw-normal fs-1 mb-1'>Who we are?</motion.p>
                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className=' fs-4 text-center mx-2' style={{ fontFamily: "Poppins", fontWeight: "200" }}>
                    Click Club is the photography club of NIT Raipur. It is a platform for beginners and photography enthusiasts to interact, learn, motivate and nurture their photography skills. It started with the motto of covering all the happenings and activities of the college. Gradually, the club has evolved in all the aspects and today being the most active club of NITRR, it organises a plethora of competitions, workshops and photo exhibitions to promote art of photography among youth.
                    <br />Our motto: I dream. I frame. I live. I click.
                </motion.p>
            </div>
        </div>
    )
}

export default SecondSlide