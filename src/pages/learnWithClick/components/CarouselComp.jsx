
function CarouselComp() {
    return (
        <div className="bg-black">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"/publicAssets/learnCarousel/juxtaposition.webp"} className=' d-block  mx-auto opacity-50' style={{ width: '80%' }} alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-white text-center mb-2 fs-4 fw-semibold" >Sports</p>
                            <p className="text-white fs-1 fw-light text-center mb-2">Juxtaposition</p>
                            <ul className='learnCarousel d-none d-md-block w-75 mx-auto' style={{ listStyleType: 'none' }}>
                                <li className='mb-4 fw-light'>The definition of juxtaposition is placing two contrasting elements together in order show a difference in perspective or to imply a statement from the artist.</li>
                                <li className='mb-4 fw-light'>The two elements should be contrasting, or opposing, each other in subject matter, shape, color, line, or meaning.</li>
                                <li className='mb-4 fw-light'>Juxtaposition is a very powerful tool. It is used to show difference in time, scene or concept.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={"/publicAssets/learnCarousel/reflectionAndSymmetry.webp"} className=' d-block  mx-auto opacity-50' style={{ width: '80%' }} alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-white text-center mb-2 fs-4 fw-semibold" >Architecture</p>
                            <p className="text-white fs-1 fw-light text-center lh-1 mb-2">Reflection and Symmetry</p>
                            <ul className='learnCarousel d-none d-md-block w-75 mx-auto' style={{ listStyleType: 'none' }}>
                                <li className='mb-4 fw-light'>
                                    A symmetrical image is one that looks the same on one side as it does on the other.</li>
                                <li className='mb-4 fw-light'>Look for symmetrical patterns with strong lines, curves and patterns. The more visually beautiful your subject is the more appealing it will be as a symmetrical image.</li>
                                <li className='mb-4 fw-light'>Reflections in photography can lead to some amazing effects and beautiful images. Using water, windows, mirrors or any sort of reflective surface can change an image into a work of art.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={"/publicAssets/learnCarousel/frameInFrame.webp"} className=' d-block  mx-auto opacity-50' style={{ width: '80%' }} alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-white text-center mb-2 fs-4 fw-semibold" >Architecture</p>
                            <p className="text-white fs-1 fw-light text-center lh-1 mb-2">Frame In Frame</p>
                            <ul className='learnCarousel d-none d-md-block w-75 mx-auto' style={{ listStyleType: 'none' }}>
                                <li className='mb-4 fw-light'>In photography, a frame within a frame is when the photographer uses something within the scene in front of them to frame the main subject. Therefore a second frame is created within the image hence: a frame within a frame.</li>
                                <li className='mb-4 fw-light'>This compositional technique can improve your image in several ways: Firstly it draws attention to the subject helping to isolate it from any distraction and clutter within the image.</li>
                                <li className='mb-4 fw-light'>Secondly it can add depth and layers to an otherwise flat and boring image.</li>
                                <li className='mb-4 fw-light'>Finally a frame within a frame can create mystery and intrigue within a photo resulting in the viewer exploring the picture for longer.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={"/publicAssets/learnCarousel/leavingSpace.webp"} className=' d-block  mx-auto opacity-50' style={{ width: '80%' }} alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-white text-center mb-2 fs-4 fw-semibold" >Abstract</p>
                            <p className="text-white fs-1 fw-light text-center mb-2">Leaving Space</p>
                            <ul className='learnCarousel d-none d-md-block w-75 mx-auto' style={{ listStyleType: 'none' }}>
                                <li className='mb-4 fw-light'>This rule incorporates two very similar ideas: breathing room and implied movement.

                                </li>
                                <li className='mb-4 fw-light'>The leaving space rule probably comes naturally to you, but if you need a way to visualize it think of your frame as a box and your subject as something you are going to be putting inside of a box.</li>
                                <li className='mb-4 fw-light'>To make your subject comfortable, you need to give him a bigger box that allows him some visual freedom and/or freedom of movement.</li>
                                <li className='mb-4 fw-light'> If your subject is looking at something, make sure there is some “white space” for him to look into. Likewise, “implied motion” means that if your subject is in motion you need to give her some space that she can move into.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img src={"/publicAssets/learnCarousel/ruleOfThirds.webp"} className=' d-block mx-auto opacity-50' style={{ width: '80%' }} alt="" />
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="text-white text-center mb-2 fs-4 fw-semibold" >Wildlife</p>
                            <p className="text-white fs-1 fw-light text-center mb-2">Rule of Thirds</p>
                            <ul className='learnCarousel d-none d-md-block w-75 mx-auto' style={{ listStyleType: 'none' }}>
                                <li className='mb-4 fw-light'>The human eye tends to be more interested in images that are divided into thirds, with the subject falling at or along one of those divisions.</li>
                                <li className='mb-4 fw-light'>Many DSLRs will actually give you a visual grid in your viewfinder that you can use to practice this rule. Divide your image with four lines into nine equal-sized parts, then place your subject at the intersection of those lines.

                                </li>
                                <li className='mb-4 fw-light'>For example, when photographing a person it is generally better to position him or her at the right or left third of the frame rather than directly in the middle.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CarouselComp