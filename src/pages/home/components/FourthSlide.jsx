import { motion } from 'framer-motion';

function FourthSlide() {
    return (
        <div className="slide slide4 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-7 pt-5 pt-lg-0">
                <div>
                    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1 fw-normal fs-1 mb-1 color-dark'>Major Events of the Club</motion.p>
                </div>
                <div style={{ height: '2vh' }}></div>
                <div className="container row d-flex justify-content-center align-items-stretch px-sm-4 px-md-0 text-start">
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/GOPASANYAL21.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Aura</p>
                                <p className="small fw-light text-secondary">An exclusive exhibition enclose with fantastic moments captured by ClickClub.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/w3.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Pixel Lane</p>
                                <p className="small fw-light text-secondary">Click Club&#39;s annual photography exhibition.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/VITTHAL SHUKLA (18).webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Workshops</p>
                                <p className="small fw-light text-secondary">For levelling up photography skills.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/IMG_8411.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Event Capture</p>
                                <p className="small fw-light text-secondary">Refreshing memories with some of the clicks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/Himanshu 4.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Aftermovie</p>
                                <p className="small fw-light text-secondary">If you missed the event, you may still experience it here.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/ANITESH KUMAR (3).webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">POTW</p>
                                <p className="small fw-light text-secondary">Weekly exploration of a different photographic genre.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/Himanshu 2.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Competitions</p>
                                <p className="small fw-light text-secondary">Right place to put photography and videography skills to the test.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="/publicAssets/slideAssets/Utkarsh jha sir 3.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 text-dark">Photowalk</p>
                                <p className="small fw-light text-secondary">The best part of memories is creating them, which is why we have photowalk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSlide