import React from "react";
import KerjaPolisiImg from '../images/carousel/kerja-polisi.jpg';
import KuasaHukumImg from '../images/carousel/kuasa hukum.jpg';
import MoonerImg from '../images/carousel/Mooner.jpg';

const Carousel = () => {
    return (
        <div className="mx-lg-5 my-lg-2">
            <div id="carouselExampleAutoplaying" class="carousel slide p-2 border" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={KerjaPolisiImg} class="d-block w-100" style={{ height: '480px' }} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={MoonerImg} class="d-block w-100" style={{ height: '480px' }} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={KuasaHukumImg} class="d-block w-100" style={{ height: '480px' }} alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;