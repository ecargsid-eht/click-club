import { motion } from 'framer-motion';
import MailIcon from '../../../assets/mail.svg?react';
import Facebook from '../../../assets/facebook.svg?react';
import Instagram from '../../../assets/instagram.svg?react';

function SixthSlide() {
    return (
        <div className="slide slide6 d-flex slide6 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-6 pt-5 pt-lg-0">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1  fw-bold h1 mb-1 color-dark display-5'>Click Club, the photography club of NIT Raipur. I dream. I frame. I live. I click.</motion.h1>
                </div>
                <div style={{ height: '5vh' }}></div>
                <div className="container col-8 col-md-12">
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary fw-semibold">CONTACT US</p>
                            <p className="fs-6">NIT Raipur, Great Eastern Road, Amanaka, Raipur, Chhattisgarh, India, IN 492010</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary fw-semibold">EMAIL</p>
                            <p className="fs-6">clickclub@nitrr.ac.in</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <p className="fs-6 text-secondary fw-semibold">STAY IN TOUCH</p>
                            <div className="d-flex justify-content-center gap-3">
                                <div className="nav-link ">
                                    <a href="mailto:clickclub@nitrr.ac.in" className="nav-action rounded-circle mx-1">
                                        <MailIcon height={33} width={33} />
                                    </a>
                                </div>
                                <div className="nav-link ">
                                    <a href="https://www.facebook.com/clickclubnitrr" className="nav-action rounded-circle mx-1 ">
                                        <Facebook height={30} width={30} />
                                    </a>
                                </div>
                                <div className="nav-link ">
                                    <a href="https://instagram.com/clickclubnitrr?igshid=YmMyMTA2M2Y=" className="nav-action rounded-circle mx-1 ">
                                        <Instagram height={30} width={30} />
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