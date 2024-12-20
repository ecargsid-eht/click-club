import { motion } from 'framer-motion';
import { useState } from 'react';
function ThirdSlide() {
    const [selectedImage, setSelectedImage] = useState("");

    function openModal(img) {
        setSelectedImage(() => img)
    }
    return (
        <div className="slide slide3 pt-5 min-vh-100 pt-lg-0">
            <div className="d-flex flex-column justify-content-center align-items-center text-center col-lg-6 pt-5 pt-lg-0">
                <div>
                    <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1 fw-normal fs-1 mb-1 color-dark'>What we Do ?</motion.p>
                    <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='z-1 fs-4 text-center mx-2' style={{ fontFamily: "Poppins", fontWeight: "200" }}>
                        Click Club desires to make your college years memorable. We document all those beautiful moments you shared at the campus, by covering all the activities and happenings of the college. We organise workshops, photo exhibitions and aim to promote the art of photography.
                    </motion.p>
                </div>
                <div style={{ height: '2vh' }}></div>
                <div className="container row d-flex justify-content-center align-items-center px-sm-4 px-md-0">
                    <div className="col-lg-3">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img">
                                <img onClick={() => openModal("https://clickclub.nitrr.ac.in/media/ADITYA%20RAJ1.jpg")} data-bs-toggle="modal" data-bs-target="#imageModal" src="https://clickclub.nitrr.ac.in/media/ADITYA%20RAJ1.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img">
                                <img onClick={() => openModal("https://clickclub.nitrr.ac.in/media/ANITESH%20KUMAR%20(2).jpg")} data-bs-toggle="modal" data-bs-target="#imageModal" src="https://clickclub.nitrr.ac.in/media/ANITESH%20KUMAR%20(2).jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img">
                                <img onClick={() => openModal("https://clickclub.nitrr.ac.in/media/HARSH%204.jpg")} data-bs-toggle="modal" data-bs-target="#imageModal" src="https://clickclub.nitrr.ac.in/media/HARSH%204.jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card mb-3 p-0 w-80">
                            <div className="card-img">
                                <img onClick={() => openModal("https://clickclub.nitrr.ac.in/media/VITTHAL%20SHUKLA%20(18).jpg")} data-bs-toggle="modal" data-bs-target="#imageModal" src="https://clickclub.nitrr.ac.in/media/VITTHAL%20SHUKLA%20(18).jpg" className="img-fluid mb-sm-2 mb-lg-0 rounded-2" alt="" style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade border-0"
                id="imageModal"
                tabIndex="-1"
                aria-labelledby="imageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl text-center bg-transparent border-0 modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0">
                        <div className="modal-header bg-transparent border-0">
                            <button
                                type="button"
                                className="btn-close bg-light rounded-circle"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <img src={selectedImage} className="img-fluid" alt="Enlarged" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSlide