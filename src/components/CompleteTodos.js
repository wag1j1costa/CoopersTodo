import React from 'react';
import '../Home.css';
import { getDatabase, ref, onValue, query, equalTo, orderByChild} from "firebase/database";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import checked from '../img/checked.png'

const CompleteTodos = ({ setProps }) => {
    const[todoList2, setTodoList2] = React.useState()

    React.useEffect(() => {    
        onAuthStateChanged(getAuth(), user => {
        const db = getDatabase();
        const todoRef = query(ref(db, 'Todo/users/' + user.uid),orderByChild('complete'),equalTo(true))
        onValue(todoRef, (snapshot) => {
            const todos = snapshot.val();
            const todoList2 = [];
            for(let id in todos) {
                todoList2.push({id, ...todos[id]})
            }
            setTodoList2(todoList2);
            setProps(todoList2.length)
        })
    })
    }, [])

    

    return (
        <div>{todoList2 ? todoList2.map((todo2, index) => (
            <div className="lines mt-3 d-flex justify-content-lef align-items-center 1 mb-1" key={index}>
            <img src={checked} className="ps-3 pe-2" alt=""/>
            <span className="span-max d-inline-box text-truncate">{todo2.title}</span>
            </div>)): ''}
        </div>
    )
}

export default CompleteTodos;