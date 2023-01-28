import React from "react";
import Logo from "../images/logo/Karang Logo-06.png"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top py-xl-3 border-bottom border-light border-opacity-50">
            <div class="container">
                <a class="navbar-brand" href="#"><img src={Logo} width={'150px'}/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto m-lg-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item mx-lg-5">
                            <a class="nav-link active" aria-current="page" href="#Artikel">Artikel</a>
                        </li>
                        <li class="nav-item me-lg-5">
                            <a class="nav-link active" aria-current="page" href="#Opini">Opini</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true" href="#Rilisan">Rilisan</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 border-dark" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar