import React from "react";
import TheJansenImg from "../images/article/the jansen.jpg"
import BmthImg from "../images/article/BMTH.png"
import OasisImg from "../images/article/oasis.jpg"
import PanturasImg from "../images/article/panturas.jpg"
import RadioheadImg from "../images/article/radiohead.png"
import RhcpImg from "../images/article/rhcp.jpg"
import TheSigitImg from "../images/article/the sigit.jpeg"

const Rilisan = () => {
    return (
        <div className="container mb-2">
            <div className="row">
                <div className="col-lg-3">
                    <div class="card bg-dark text-light p-2 border border-white my-2 grow">
                        <img src={TheJansenImg} class="card-img-top" />
                        <div class="card-body">
                            <a href="#" class="btn btn-primary mb-3 w-100 grow">CHECK SOKIN</a>
                            <h5 class="card-title">THE JANSEN ALBUM</h5>
                            <p class="card-text">New Album</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card bg-dark text-light p-2 border border-white my-2 grow">
                        <img src={PanturasImg} class="card-img-top" />
                        <div class="card-body">
                            <a href="#" class="btn btn-primary mb-3 w-100 grow">CHECK SOKIN</a>
                            <h5 class="card-title">THE PANTURAS ALBUM</h5>
                            <p class="card-text">New Album</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card bg-dark text-light p-2 border border-white my-2 grow">
                        <img src={RadioheadImg} class="card-img-top" />
                        <div class="card-body">
                            <a href="#" class="btn btn-primary mb-3 w-100 grow">CHECK SOKIN</a>
                            <h5 class="card-title">RADIOHEAD ALBUM</h5>
                            <p class="card-text">New Album</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card bg-dark text-light p-2 border border-white my-2 grow">
                        <img src={TheSigitImg} class="card-img-top" />
                        <div class="card-body">
                            <a href="#" class="btn btn-primary mb-3 w-100 grow">CHECK SOKIN</a>
                            <h5 class="card-title">THE SIGIT ALBUM</h5>
                            <p class="card-text">New Album</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3">
            <button className="btn btn-secondary">SHOW MORE</button>
            </div>
        </div>
    );
}

export default Rilisan;