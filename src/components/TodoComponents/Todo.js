import React from 'react';

const Todo = props => {
    console.log("hello");
    return (
        <div className="todo-item">
            {props.todo.task}
        </div>
    );
};

export default Todo;