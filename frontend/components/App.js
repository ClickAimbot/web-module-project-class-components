import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286, 
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

  handleAdd = (task) => {
    // setState
    // change todos
    // make a copy of todos
    // add a new todo to the end
    const newTodo = {
      task: task,
      id: Date.now(), 
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleClear = () => {
    // Set State
    // loop through (filter) all todos
    // remove all todos that have completed === true
    // save filtered todos to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  handleToggle = (clickedId) => {
    // setState
    // change todos
    // find the todo that we click on
    // flip the value of completed for that todo
    // keep all other todos the same
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } 

        return todo
      })
    })
  }

  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
