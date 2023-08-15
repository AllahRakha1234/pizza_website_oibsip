import React from 'react';
// import myImage1 from '../../assets/images/image1Slider.jpg';
// import myImage2 from '../../assets/images/image3Slider.jpg';
// import myImage3 from '../../assets/images/image2Slider.jpeg';

export default function Slider() {
    return (
        <>
            <div className="container mt-4">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://image.slidesdocs.com/responsive-images/background/illustration-of-pizza-slices-powerpoint-background_538bc08cbc__960_540.jpg" className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://w.forfun.com/fetch/29/294ef78f903afd4d1d15691d074b350e.jpeg" className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.summitmedia-digital.com/spotph/images/2022/11/25/pizza-1200-1669380911.jpg" className="d-block" style={{ width: "100vw", height: "80vh" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}
