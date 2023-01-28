import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid border-top mt-4 ">
            <div className="row d-flex justify-content-around mt-5 text-center">
                <div className="text-light col-lg-4 col-6">
                    <p><b>INFORMATION</b></p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Press & Media</p>
                </div>
                <div className="text-light col-lg-4 col-6">
                    <p><b>CONTACT US</b></p>
                    <p>Whatsapp :</p>
                    <p>+62 81312476146</p>
                    <p>Email :</p>
                    <p>Rezafauzyakbar@gmail.com</p>
                </div>
                <div className="text-light col-lg-4 col-12">
                    <p><b>SOCIAL MEDIA</b></p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>Spotify</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;