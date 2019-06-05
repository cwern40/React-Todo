import React from 'react';

const TodoData = (props) => {
    return (
        <div className="todo-item">
            {props.item}
        </div>
    );
}

export default TodoData