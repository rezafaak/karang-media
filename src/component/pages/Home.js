import React from "react";

import Carousel from "../inc/Carousel";
import Opini from "../inc/Opini";
import Rilisan from "../inc/Rilisan";
import Sidebar from "../inc/Sidebar";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-9 mt-2">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="fw-bolder text-light">BREAKING NEWS</h1>
                        <div className="underline"></div>
                    </div>
                    <Carousel />
                </div>
                <div className="col-lg-3 border-start border-white border-opacity-50">
                    <Sidebar />
                </div>
            </div>
            <div className="row">
                <div className="col-12 border-top border-bottom">
                    <h1 className="text-light fw-bolder p-3 d-flex align-items-center " id="Opini">OPINI PUBLIK</h1>
                </div>
                <div className="col-lg-9">
                    <Opini />
                </div>
                <div className="col-lg-3 border-start border-white border-opacity-50"></div>
            </div>
            <div className="row">
                <div className="col-12 border-top border-bottom">
                    <h1 className="text-light fw-bolder p-3 d-flex align-items-center " id="Rilisan">RILISAN TERBARU</h1>
                </div>
                <div className="col-lg-12">
                    <Rilisan />
                </div>
            </div>
        </div>
    )
}

export default Home;