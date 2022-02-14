import React from 'react';
import '../Home.css';
import Todolist from './Todolist'
import MediaQuery from 'react-responsive'
import CompleteTodos from './CompleteTodos'
import {useAuth} from "../firebaseconfig";
import { getDatabase, ref, push, remove, query, orderByChild, equalTo } from "firebase/database";
import { toastSuccess, toastError } from '../customAlerts';
import add from '../img/add.png'

const Todo = () => {
    const [title, setTitle] = React.useState('');
    const [total, setTotal] = React.useState('');
    const currentUser = useAuth()
    
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = () => {
        const db = getDatabase();
        push(ref(db, 'Todo/users/' + currentUser.uid), {
            title,
            complete: false
        });
        setTitle('')
        toastSuccess('Task added successfully!')
    }

    const eraseAllUndone = () => {
        const db = getDatabase();
        const todoRef = query(ref(db, 'Todo/users/' + currentUser.uid),orderByChild('complete'),equalTo(false))
        remove(todoRef)
        toastError('All tasks erased!')
    }

    const eraseAllDone = () => {
        const db = getDatabase();
        const todoRef2 = query(ref(db, 'Todo/users/' + currentUser.uid),orderByChild('complete'),equalTo(true))
        remove(todoRef2)
        toastError('All tasks erased!')
    }
      
    return (
        <div>
            <MediaQuery minWidth={1224}>
            <div className="row mt-5">
                <div className="container d-md-inline-flex justify-content-md-evenly align-items-center mx-5 pt-5">
                    <div className="pricing col-md-3 shadow">
                    <div className="pricing-stroke-orange"></div>
                    <h2 className="my-5">To-do</h2>
                    <h5>Take a breath.</h5>
                    <h5>Start doing.</h5>
                    <div className="mt-5">
                        <img src={add} alt=""/>
                        <span>
                            <input className="input-todo mx-1" type="text" placeholder="Type your task here" onChange={handleOnChange} value={title}/>
                            <button className="btn btn-sm btn-green" onClick={createTodo}><i className="bi bi-plus text-light"></i>Add</button>
                        </span>
                    </div>
                    <Todolist/>
                    <div className="d-grid gap-2 mx-5 mt-5 mb-3">
                        <button className="btn btn-lg btn-black-round mb-5" onClick={eraseAllDone}>erase all</button>
                    </div>
                    </div>

                    <div className="pricing col-md-3 shadow">
                    <div className="pricing-stroke-green"></div>
                    <h2 className="my-5">Done</h2>
                    <h5>Congratulations!</h5>
                    <h5><strong>You have done {total} tasks</strong></h5>
                    <CompleteTodos setProps={setTotal} value={total}/>
                    <div className="d-grid gap-2 mx-5 mt-5 mb-3">
                        <button className="btn btn-lg btn-black-round mb-5" onClick={eraseAllUndone}>erase all</button>
                    </div>
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1223}>
                <div className="container my-5">
                    <div className="pricing col-md-10 shadow">
                        <div className="pricing-stroke-green"></div>
                        <h2 className="my-5">To-do</h2>
                        <h5>Congratulations!</h5>
                        <h5><strong>You have done {total} tasks</strong></h5>
                        <div className="mt-5">
                        <img src={add} alt=""/>
                        <span>
                            <input className="input-todo mx-1" type="text" placeholder="Type your task here" onChange={handleOnChange} value={title}/>
                            <button className="btn btn-sm btn-green" onClick={createTodo}><i className="bi bi-plus text-light"></i>Add</button>
                        </span>
                        </div>
                        <Todolist/>
                        <CompleteTodos setProps={setTotal} value={total}/>
                        <div className="d-grid gap-2 mx-5 mt-5 mb-3">
                            <button className="btn btn-lg btn-black-round mb-5" onClick={eraseAllUndone}>erase all</button>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Todo;