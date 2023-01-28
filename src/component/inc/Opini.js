import React from "react";
import MovementImg from "../images/opini/movement.jpg"
import MusicPeopleImg from "../images/opini/music people club.png"
import AntiGradImg from "../images/opini/anti gradient.jpg"

const Opini = () => {
    return (
        <div className="container">
            <div class="row g-0 bg-dark text-light position-relative border-bottom mt-2">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={MusicPeopleImg} class="w-100" height={'360px'} alt="..." />
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <a href="#" className="text-decoration-none text-light fs-5 fw-bold">MUSIC PEOPLE CLUB "APASIH ITU ?"</a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam pariatur, ratione quas iure autem quidem ipsum dolor, nulla nesciunt commodi cum non eum similique voluptate at minima. Quo rem, vitae possimus numquam, animi facere magnam quaerat accusantium molestias, voluptate soluta. Molestiae distinctio earum nemo provident eveniet in neque nesciunt vel?</p>
                    <a href="#">Klik kalau kepo</a>
                </div>
            </div>
            <div class="row g-0 bg-dark text-light position-relative border-bottom mt-2">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={MovementImg} class="w-100" height={'360px'} alt="..." />
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <h5 class="mt-0"><a href="#" className="text-decoration-none text-light fw-bold">"DESAIN BEGINIAN BANYAK BANGET DI SHOPPEE"</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, facere possimus quae voluptatum quia doloremque molestiae perspiciatis sed? Error sed adipisci vero ducimus fugiat quasi inventore ullam temporibus nobis earum! Illo assumenda doloribus blanditiis quo molestias ratione non, repudiandae deleniti, repellat consequatur ex quisquam debitis sunt natus autem? Commodi, dolore.
                    </p>
                    <a href="#">Klik kalau kepo</a>
                </div>
            </div>
            <div class="row g-0 bg-dark text-light position-relative mt-2">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={AntiGradImg} class="w-100" height={'360px'} alt="..." />
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <h5 class="mt-0"><a href="#" className="text-decoration-none text-light fw-bold">"ANTI DESAIN ? DESAIN GAYA SO KEREN !"</a></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis earum nostrum assumenda facilis laborum fuga mollitia quasi quisquam libero corrupti natus labore aliquam et esse optio, blanditiis eligendi doloribus animi praesentium reprehenderit vel molestiae alias nam? Facilis quasi deserunt minus porro fugit praesentium inventore voluptates quam quaerat. Eveniet, eaque omnis.</p>
                    <a href="#">Klik kalau kepo</a>
                </div>
            </div>
        </div>
    );
}

export default Opini;