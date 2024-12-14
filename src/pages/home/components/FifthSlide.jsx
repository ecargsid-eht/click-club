import { motion } from 'framer-motion'
function FifthSlide() {
    return (
        <div className="slide slide5 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-7 pt-5 pt-lg-0">
                <div>
                    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className='z-1 fw-normal fs-1 mb-1 color-dark'>Recent Activity</motion.p>
                </div>
                <div style={{ height: '2vh' }}></div>
                <div className="container row d-flex justify-content-center align-items-stretch px-sm-4 px-md-0 text-start">
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card border-0 bg-transparent mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/album/Recuitment%202023.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 ">Recruitment&#39;23</p>
                                <p className="fs-5 fw-lighter " style={{ color: "#ddd" }}>Do you think you have it in yourself to click pictures that attract everyone’s eyes? Then Click Club is the place for you. Join our team now..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch d-flex align-items-stretch">
                        <div className="card border-0 bg-transparent mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/album/Shruti'22.jpeg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 ">Shruti&#39;22</p>
                                <p className="fs-5 fw-lighter " style={{ color: "#ddd" }}>Click Club presents to you some of our best clicks from the evening!.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card border-0 bg-transparent mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/KRI_9482.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 ">Traditional Day</p>
                                <p className="fs-5 fw-lighter " style={{ color: "#ddd" }}>Sometimes beauty lies in the simplicity with a traditional look. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-stretch">
                        <div className="card border-0 bg-transparent mb-3 p-0 w-80">
                            <div className="card-img-top">
                                <img src="https://clickclub.nitrr.ac.in/media/Garba-Eve-44.webp" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" />
                            </div>
                            <div className="card-body p-1">
                                <p className="fs-4 ">Garba Eve</p>
                                <p className="fs-5 fw-lighter " style={{ color: "#ddd" }}>Capturing the shortcut to happiness, Glimpse of Garba Eve</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FifthSlide