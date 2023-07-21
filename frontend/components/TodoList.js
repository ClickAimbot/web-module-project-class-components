import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  render () {
    return (
      <div className="todo-list"> 
        <ul>
          {
            this.props.todos.map(todo => {
              return (<Todo todo={todo} />)
            })
          }
        </ul>
      </div>
    );
 }
};


