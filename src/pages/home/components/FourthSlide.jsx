import { motion } from 'framer-motion';

function FourthSlide() {
    return (
        <div className="slide slide4 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-7 pt-5 pt-lg-0">
                <div>
                    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className='z-1 fw-normal fs-1 mb-1 color-dark'>Major Events of the Club</motion.p>
                </div>
                <div style={{ height: '2vh' }}></div>
                <div className="container row d-flex justify-content-center align-items-stretch px-sm-4 px-md-0 text-start">
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/GOPASANYAL21.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Aura</p>
                                <p className="fs-6 fw-lighter text-dark">An exclusive exhibition enclose with fantastic moments captured by ClickClub.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/w3.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Pixel Lane</p>
                                <p className="fs-6 fw-lighter text-dark">Click Club&#39;s annual photography exhibition.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/VITTHAL%20SHUKLA%20(18).jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Workshops</p>
                                <p className="fs-6 fw-lighter text-dark">For levelling up photography skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/IMG_8411.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Event Capture</p>
                                <p className="fs-6 fw-lighter text-dark">Refreshing memories with some of the clicks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/Himanshu%204.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Aftermovie</p>
                                <p className="fs-6 fw-lighter text-dark">If you missed the event, you may still experience it here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/ANITESH%20KUMAR%20(3).jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">POTW</p>
                                <p className="fs-6 fw-lighter text-dark">Weekly exploration of a different photographic genre.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/Himanshu%202.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Competitions</p>
                                <p className="fs-6 fw-lighter text-dark">Right place to put photography and videography skills to the test.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/Utkarsh%20jha%20sir%203.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Photowalk</p>
                                <p className="fs-6 fw-lighter text-dark">The best part of memories is creating them, which is why we have photowalk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSlide