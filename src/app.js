import React, { Component } from "react";
import Robots from "./pages/robots/robots";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  render() {
    return (
      <div className="tc bg dark-blue bg-light-red">
        <Robots />
      </div>
    );
  }
}
export default App;
