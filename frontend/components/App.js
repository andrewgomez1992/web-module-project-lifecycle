import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import Todo from './Todo';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [],
    error: "",
    todoNameInput: "",
    displayCompleted: true,
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todos: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div id="error">Error: No error here</div>
        <div id="todos">
          <h2>Todos:</h2>
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
        </div>
        <form>
          <input type="text" placeholder="Type Todo"></input>
          <input type="submit"></input>
        </form>
        <button>Clear Completed</button>
      </div>
    )
  }
}

