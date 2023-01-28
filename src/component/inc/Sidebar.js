import React from "react";
import MoonerImg from '../images/carousel/Mooner.jpg'

const Sidebar = () => {
    return (
        <div className="mt-3">
            <h3 className="d-flex flex-column align-items-center">
                <a href="" className="text-decoration-none text-light">
                    <span className="p-1 fw-bold">
                        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-balloons" /> */}
                        POP
                    </span>
                </a>
                <div className="underline"></div>
            </h3>
            <div className="row g-1">
                <div className="col-4 col-lg-12">
                    <div class="card border-0 bg-dark text-light mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-lg-5">
                                <img src={MoonerImg} class="img-fluid " alt="..." />
                            </div>
                            <div class="col-lg-7">
                                <div class="ms-2">
                                    <h6 class="fw-bold">Profile Band Mooner besutan Rekti 'The Sigit'</h6>
                                    <p className="my-0"><small className="font-monospace">Reza Fauzy Akbar</small></p>
                                    <p class="my-0"><small class="font-monospace text-opacity-50 text-white">23.01.23</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-4 col-lg-12">
                    <div class="card border-0 bg-dark text-light mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-lg-5">
                                <img src={MoonerImg} class="img-fluid " alt="..." />
                            </div>
                            <div class="col-lg-7">
                                <div class="ms-2">
                                    <h6 class="fw-bold">Profile Band Mooner besutan Rekti 'The Sigit'</h6>
                                    <p className="my-0"><small className="font-monospace">Reza Fauzy Akbar</small></p>
                                    <p class="my-0"><small class="font-monospace">23.01.23</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-lg-12">
                    <div class="card bg-dark text-light mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-lg-5">
                                <img src={MoonerImg} class="img-fluid" alt="..." />
                            </div>
                            <div class="col-lg-7">
                                <div class="ms-2 ">
                                    <h6 class="fw-bold">Profile Band Mooner besutan Rekti 'The Sigit'</h6>
                                    <p className="my-0"><small className="font-monospace">Reza Fauzy Akbar</small></p>
                                    <p class="my-0"><small class="font-monospace">23.01.23</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2">
                <button className="btn btn-secondary">Show More</button>
            </div>
        </div>

    )
}

export default Sidebar;