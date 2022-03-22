import React, { Component } from "react";
import RobotHome from "./pages/robots/react-2016/RobotHome";
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
        <RobotHome />
      </div>
    );
  }
}
export default App;
