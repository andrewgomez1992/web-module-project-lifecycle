import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [],
    error: "",
    todoNameInput: "",
    displayCompleted: true,
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div id="error">Error: No error here</div>
        <div id="todos">
          <h2>Todos:</h2>
          <div>Walk the dog</div>
          <div>Finish MyAdmin Project</div>
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

