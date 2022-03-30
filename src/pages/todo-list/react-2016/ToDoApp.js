import React, { Component } from "react";
import "../../../styles/toDoAppStyles.css";

import ToDoList from "../pages/ToDoList";

class ToDoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const toDosURL = fetch("https://jsonplaceholder.typicode.com/todos");
    toDosURL
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({ todos: responseData });
        console.log(this.state);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1 className="bg-yellow pa1">EUROSTAR's To Do App</h1>
        <div className="ToDos">
          {/* <CardList className="List" todos={this.state.todos.sort()} /> */}
          <ToDoList className="List" todos={this.state.todos.reverse()} />
        </div>
      </div>
    );
  }
}
export default ToDoApp;
