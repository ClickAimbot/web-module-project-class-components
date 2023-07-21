import React from 'react';

import TodoList from './TodoList';
import Form from './Form';
import Todo from './Todo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    console.log(todos);

    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map(todo => {
              return (<Todo todo={todo} />)
            })
          }
        </ul>
        <form>
          <input></input>
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    )
  }
}
