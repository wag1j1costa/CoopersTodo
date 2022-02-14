import React from 'react';
import '../Home.css';
import { getDatabase, ref, remove, update, child} from "firebase/database";
import {getAuth} from 'firebase/auth';
import { Draggable } from 'react-beautiful-dnd';
import { toastSuccess, toastError } from '../customAlerts';
import unchecked from '../img/unchecked.png'

export default function Todo({ todo, index }) {
  const deleteTodo = () => {
    const db = getDatabase();
    const todoRef = child(ref(db, 'Todo/users/' + getAuth().currentUser.uid),todo.id)
    remove(todoRef);
    toastError("The task was deleted.")
  };
  const completeTodo = () => {
    const db = getDatabase();
    const todoRef = child(ref(db, 'Todo/users/' + getAuth().currentUser.uid),todo.id)
    update(todoRef,{
      complete: !todo.complete,
    });
    toastSuccess("Task completed!")
  };
  return (
    <Draggable draggableId={todo.id} index={index}>
        {(provided) => (
        <div key={todo.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="lines mt-3 d-flex justify-content-lef align-items-center 1 mb-1">
            <img src={unchecked} className="ps-3 pe-2 img-btn" alt="" onClick={completeTodo}/>
            <span className="span-max d-inline-box">
            {todo.title}
            <button className="ms-3 pull-right btn btn-sm btn-danger" onClick={deleteTodo}><i className="bi bi-trash-fill text-light"></i></button>
            </span>
        </div>
        )}
  </Draggable>
    
  );
}