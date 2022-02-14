import React from 'react';
import '../App.css';
import MediaQuery from 'react-responsive'

const Footer = () => {
    return (
    
        <div>
            <MediaQuery minWidth={1224}>
            <div className="todoHead mt-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="d-flex justify-content-center align-items-center text-white">
                <p>Need help?</p>
            </div>
            <div className="d-flex justify-content-center align-items-center text-white">
                <p>coopers@coopers.pro</p>
            </div>
            <div className="d-flex justify-content-center align-items-center text-white">
                <small> © 2021 Coopers. All rights reserved. </small>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="d-flex justify-content-center align-items-center">
            <div className="rectangle d-flex justify-content-center align-items-center"></div>
            </div>
            </div>
            
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
            <div className="bg-dark mt-5">
            <div className="text-white text-center pt-2">
                <p className="titleTodo">Need help?</p>
            </div>
            <br/>
            <div className="text-white text-center">
                <p>coopers@coopers.pro</p>
            </div>
            <div className="text-white text-center pb-2">
            <small> © 2021 Coopers. All rights reserved. </small>
            </div>
            </div>
            </MediaQuery>
        </div>

)}

export default Footer;