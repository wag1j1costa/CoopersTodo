import React from 'react';
import '../Home.css'
import goodThings from '../img/goodThings.png'

const GoodThings = () => {

    return (
    <div className="d-flex mt-5 justify-content-center align-items-center">
        <img src={goodThings} className="img-fluid" alt=""/>
    </div>
    )
}

export default GoodThings