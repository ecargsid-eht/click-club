import { motion } from 'framer-motion';

function SixthSlide() {
    return (
        <div className="slide  d-flex slide5 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-6 pt-5 pt-lg-0">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1 d-none d-lg-block fw-normal h1 mb-1 color-dark' style={{ fontSize: '64px' }}>Click Club, the photography club of NIT Raipur. I dream. I frame. I live. I click.</motion.h1>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1 fw-normal d-block d-lg-none h1 mb-1 color-dark' style={{ fontSize: '40px' }}>Click Club, the photography club of NIT Raipur. I dream. I frame. I live. I click.</motion.h1>
                </div>
                <div style={{ height: '5vh' }}></div>
                <div className="container col-8 col-md-12">
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary">CONTACT US</p>
                            <p className="fs-6">NIT Raipur, Great Eastern Road, Amanaka, Raipur, Chhattisgarh, India, IN 492010</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary">EMAIL</p>
                            <p className="fs-6">clickclub@nitrr.ac.in</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary">STAY IN TOUCH</p>
                            <div className="d-flex justify-content-center">
                                <div className="nav-link ">
                                    <a href="mailto:clickclub@nitrr.ac.in" className="nav-action rounded-circle px-2 py-1 mx-1 shadow" style={{ backgroundColor: "#dd4330" }}>
                                        <i className="bi bi-envelope-at-fill fs-6 px-0"></i>
                                    </a>
                                </div>
                                <div className="nav-link ">
                                    <a href="https://www.facebook.com/clickclubnitrr" className="nav-action rounded-circle px-2 py-1 mx-1 shadow" style={{ backgroundColor: "#3b5998" }}>
                                        <i className="bi bi-facebook fs-6 px-0"></i>
                                    </a>
                                </div>
                                <div className="nav-link ">
                                    <a href="https://instagram.com/clickclubnitrr?igshid=YmMyMTA2M2Y=" className="nav-action rounded-circle px-2 py-1 mx-1 shadow" style={{ backgroundColor: "#e4405f" }}>
                                        <i className="bi bi-instagram fs-6 px-0"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SixthSlide