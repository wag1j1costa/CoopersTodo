import React from 'react';
import '../App.css';
import MediaQuery from 'react-responsive'

const Todohead = () => {
    return (
    
        <div>
            <MediaQuery minWidth={1224}>
            <div className="todoHead">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="d-flex justify-content-center align-items-center text-white">
                <h1 className="titleTodo">To-do List</h1>
            </div>
            <br/>
            <div className="d-flex justify-content-center align-items-center text-white">
                <p>Drag and drop to set your main priorities, check</p>
            </div>
            <div className="d-flex justify-content-center align-items-center text-white">
                <p>when done to create what's new.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
            <div className="bg-dark">
            <div className="text-white text-center pt-2">
                <h1 className="titleTodo">To-do List</h1>
            </div>
            <br/>
            <div className="text-white text-center">
                <p>Drag and drop to set your main priorities, check</p>
            </div>
            <div className="text-white text-center pb-2">
                <p>when done to create what's new.</p>
            </div>
            </div>
            </MediaQuery>
        </div>

)}

export default Todohead;