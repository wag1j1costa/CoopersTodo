import React from 'react';
import MediaQuery from 'react-responsive'
import '../Home.css';
import img from '../img/slide1.png'
const Home = () => {
    return (
        <div className="row">
            <div className="col-md-7 vh-100">
            <h1 className="titulo ms-5">Organize</h1>
            <h2 className="sub-titulo text-break ms-5 pb-md-2">your daily jobs</h2>
            <p className="ms-5 strong p-inicio mt-5">The only way to get your things done</p>
            </div>
            <div className="col-md-5 back-logo vh-md-100">
            <MediaQuery minWidth={1224}>
            <div className="row">
                <div className="col-md-2">
                
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center vh-100">
                
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..."/>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-2">
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
                <div className="row">
                     <div className="d-flex justify-content-center align-items-center  p-5 mb-5">
                        <img src={img} className="img-fluid img-thumbnail" alt="..."/>
                    </div>
                </div>
            </MediaQuery>
            </div>
        </div>
    )
}

export default Home;