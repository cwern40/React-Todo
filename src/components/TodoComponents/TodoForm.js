import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input type="text" placeholder="enter your task" name="todo" className="todo-input" value={props.value} onChange={props.changeTodo}/>
            <button>Add todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;