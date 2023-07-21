import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
      <div className="todo-list">
        {props.thingsTodo.map(todo => (
          <Todo toggleTodo={props.toggleTodo} key={key.id} todo={todo} />
        ))}
      </div>
    );
};

export default TodoList;
