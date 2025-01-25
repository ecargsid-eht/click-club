import { useEffect, useState } from "react";

const awards = ['award1.jpg', 'award2.JPG'];
const news = ['news1.jpg', 'news2.jpg', 'news3.png', 'news4.jpg', 'news5.jpg', 'news6.jpeg'];
const vogue = ['vogue1.jpg', 'vogue5.JPG', 'vogue15.jpg', 'vogue2.JPG', 'vogue13.jpg', 'yourlens1.PNG', 'vogue3.PNG', 'vogue4.JPG', 'vogue6.jpg', 'vogue7.jpg', 'vogue8.png', 'vogue9.jpg', 'vogue10.png', 'vogue11.png', 'vogue12.png', 'vogue14.png'];

function AchievementsPage() {
    const [chunkSize, setChunkSize] = useState(3); // Default chunk size for larger screens

    useEffect(() => {
        // Update chunkSize based on screen width
        const updateChunkSize = () => {
            setChunkSize(window.innerWidth < 768 ? 1 : 3); // 768px is the breakpoint for mobile/tablet
        };

        updateChunkSize(); // Set initial chunk size
        window.addEventListener('resize', updateChunkSize); // Update on resize

        return () => {
            window.removeEventListener('resize', updateChunkSize); // Cleanup on unmount
        };
    }, []);
    const chunkArray = (arr, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const vogueSlides = chunkArray(vogue, chunkSize);
    const awardSlides = chunkArray(awards, chunkSize);
    const newsSlides = chunkArray(news, chunkSize);
    return (
        <div className="container mb-2 mt-4">
            <p className="display-5 fw-bold text-center mb-1 text-black">Achievements</p>
            <p className="text-secondary text-center fw-light">
                Let us celebrate the journey of <span style={{ color: "#ff6633" }}>Click Club</span>, marked by features and newspaper mentions that highlight its achievements and growth.
            </p>
            <div className="mt-5"></div>
            <div className="w-100">
                <p className="text-black fs-3 fw-bold ps-1 mb-4 pb-0" style={{ borderLeft: "0.3rem solid #ff6633" }}>Featured Photographs</p>
                <div id="features" className="carousel slide w-100 p-4 shadow-sm rounded-3" style={{ backgroundColor: '#e7e7e7' }} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {vogueSlides.map((slideImages, slideIndex) => (
                            <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                                <div className="row">
                                    {slideImages.map((vImage, key) => (
                                        <div className="col-12 col-md-4" key={key}>
                                            <img
                                                src={`/publicAssets/achievements/${vImage}`}
                                                className="d-block w-100 rounded-3"
                                                alt={`Vogue Image ${slideIndex * 3 + key + 1}`}
                                                // style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex rounded-pill mt-3">
                        <button className="carousel-control-prev position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#features" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#features" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Newspaper */}
                <p className="text-black fs-3 fw-bold ps-1 mb-4 mt-5 pb-0" style={{ borderLeft: "0.3rem solid #ff6633" }}>Newspaper Mentions</p>
                <div id="newspaper" className="carousel slide w-100 p-4 shadow-sm rounded-3 mb-5" style={{ backgroundColor: '#e7e7e7' }} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {newsSlides.map((slideImages, slideIndex) => (
                            <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                                <div className="row">
                                    {slideImages.map((vImage, key) => (
                                        <div className="col-12 col-md-4" key={key}>
                                            <img
                                                src={`/publicAssets/achievements/${vImage}`}
                                                className="d-block w-100 rounded-3"
                                                alt={`Vogue Image ${slideIndex * 3 + key + 1}`}
                                                // style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex rounded-pill mt-3">
                        <button className="carousel-control-prev position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#newspaper" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#newspaper" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Others */}
                <p className="text-black fs-3 fw-bold ps-1 mb-4 pb-0" style={{ borderLeft: "0.3rem solid #ff6633" }}>Awards & Recognition</p>
                <div id="awards" className="carousel slide w-100 p-4 shadow-sm rounded-3" style={{ backgroundColor: '#e7e7e7' }} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {awardSlides.map((slideImages, slideIndex) => (
                            <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`} key={slideIndex}>
                                <div className="row">
                                    {slideImages.map((vImage, key) => (
                                        <div className="col-12 col-md-4" key={key}>
                                            <img
                                                src={`/publicAssets/achievements/${vImage}`}
                                                className="d-block w-100 rounded-3"
                                                alt={`Vogue Image ${slideIndex * 3 + key + 1}`}
                                                // style={{ maxHeight: '300px', objectFit: 'cover' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex rounded-pill mt-3">
                        <button className="carousel-control-prev position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#awards" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next position-static bg-dark mx-2 rounded-circle p-2 " style={{width:'fit-content'}} type="button" data-bs-target="#awards" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AchievementsPage