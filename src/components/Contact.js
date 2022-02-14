import React from 'react';
import '../Home.css'
import tatiana from '../img/tatiana.png'
import iconmail from '../img/icon-mail.png'
import Swal from 'sweetalert2'

const Contact = () => {
    

    const sendForm = () => {
        Swal.fire(
            'Success', 'Message sent successfully!', 'success'
        )
    }

    return ( 
        <div className="contact-form container">
            <div className="shadow container">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={tatiana} alt=""/>
                </div>
                <div>
                    <form>
                        <div className="row">
                            <div className="col-1 my-3 me-1">
                                <img src={iconmail} alt=""/>
                            </div>
                            <div className="col-10 ms-4 mt-4">
                                <p className="p-contact">GET IN</p>
                                <h5>TOUCH</h5>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-12 m-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your name</label>
                                <input type="text" className="form-control" id="yourName" placeholder="type you name here..." required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                <input type="email" className="form-control" id="yourEmail" placeholder="example@example.com" required/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Telephone*</label>
                                <input type="tel" className="form-control" id="yourPhone" placeholder="(  )_____-_____" required/>
                            </div>
                            <div className="col-md-12 my-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Message*</label>
                                <textarea className="form-control" id="yourMessage" placeholder="Type what you want to say to us" rows="5" required/>
                            </div>
                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-green-round" type="submit" onClick={sendForm} >SEND NOW</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact