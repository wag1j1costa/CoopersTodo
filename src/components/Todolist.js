import React from 'react';
import '../Home.css';
import { getDatabase, ref, onValue, query, equalTo, orderByChild} from "firebase/database";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import Todo from './TodoFunction'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Todolist = () => {
    const[todoList, setTodoList] = React.useState()

    React.useEffect(() => {    
        onAuthStateChanged(getAuth(), user => {
        const db = getDatabase();
        const todoRef = query(ref(db, 'Todo/users/' + user.uid),orderByChild('complete'),equalTo(false))
        onValue(todoRef, (snapshot) => {
            const todos = snapshot.val();
            
            const todoList = [];
            for(let id in todos) {
                todoList.push({id, ...todos[id]})
            }
            setTodoList(todoList);
        })
    })
    }, [])

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(todoList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodoList(items);
    }


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="myTodo">
            {(provided) => (
            <div className="myTodo" {...provided.droppableProps} ref={provided.innerRef}>
                {todoList
                ? todoList.map((todo, index) => <Todo todo={todo} index={index} key={index} />)
                : ''}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        </DragDropContext>
    )
}

export default Todolist;