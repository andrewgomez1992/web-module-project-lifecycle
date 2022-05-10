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

  onTodoNameInputChange = (evt) => {
    const { value } = evt.target;
    this.setState({
      ...this.state,
      todoNameInput: value
    });
  }

  postNewTodo = () => {
    axios.post(URL, { name: this.state.todoNameInput })
      .then(res => {
        this.fetchAllTodos()
        this.setState({
          ...this.state,
          todoNameInput: ""
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          error: err.response.data.message
        })
      })
  }

  onTodoFormSubmit = evt => {
    evt.preventDefault()
    this.postNewTodo()
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todos: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          error: err.response.data.message
        })
      })
  }

  componentDidMount() {
    this.fetchAllTodos()
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div id="error">{this.state.error}</div>
        <div id="todos">
          <h2>Todos:</h2>
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
        </div>
        <form onSubmit={this.onTodoFormSubmit} >
          <input
            value={this.state.todoNameInput}
            type="text"
            placeholder="Type Todo"
            onChange={this.onTodoNameInputChange}
          >
          </input>
          <input type="submit"></input>
        </form>
        <button>Clear Completed</button>
      </div>
    )
  }
}

