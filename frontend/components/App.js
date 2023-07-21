import React from 'react';

import TodoList from './TodoList';
import Form from './Form';

const thingsTodo = [
  {
    name: "Hike",
    id:1,
    completed: false
  },
  {
    name: "Weight-train",
    id:2,
    completed: false
  },
  {
    name: "Mealprep",
    id:3,
    completed: false
  },
  {
    name: "Clean",
    id:4,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingsTodo: thingsTodo
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, thingsTodo: [...this.state.thingsTodo, newTodo]});
  }
  toggleTodo = todoId => {
    console.log(todoId);
    this.setState({...this.state, thingsTodo: this.state.thingsTodo.map(todo => {
      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })})
  }

  completedTodo = () => {
    this.setState({...this.state, thingsTodo: this.state.thingsTodo.filter(todo => {
      if (!todo.completed) return todo;
    })})
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>T</h1>
        </div>
        <TodoList toggleTodo='' thingsTodo={this.state.thingsTodo} />
      </div>
    )
  }
}
