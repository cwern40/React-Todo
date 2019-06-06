import React from 'react';

const Todo = props => {
    console.log(props);
    return (
        <div className={`todo${props.todo.completed ? " completed" : ""}`}>
            {props.todo.task}
        </div>
    );
};

export default Todo;