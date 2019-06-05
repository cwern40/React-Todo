import React from 'react';

const TodoData = (props) => {
    return (
        <div className="todo-item">
            {props.task}
        </div>
    );
};

export default TodoData;