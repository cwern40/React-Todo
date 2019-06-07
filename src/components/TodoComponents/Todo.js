import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log("Todo item:", props);

    const clickHandler = () => {
        props.toggle(props.todo.id);
    };
    return (
        <div className={`todo${props.todo.completed ? " completed" : ""}`} onClick={clickHandler}>
            {props.todo.task}
        </div>
    );
};

export default Todo;