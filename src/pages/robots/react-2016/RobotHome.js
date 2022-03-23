import React, { Component } from "react";
import "../../../index.css";
import { usersUrl } from "../../../constants/listOfURLs";
import RobotGallery from "../RobotGallery";
import SearchBox from "../../../components/searchbox";
import ScrollyBar from "../../../components/scroll";
import ErrorBoundary from "../../../components/errorboundary";

class RobotHome extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((responseData) => this.setState({ robots: responseData }));

    // NOTE: do not remove checks the loading message works
    //   .then((response) => console.log(response))
    //   .then((responseData) => this.setState({}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <div>
        <h2>Please wait this page is still loading</h2>
      </div>
    ) : (
      <div className="tc bg dark-blue bg-light-red">
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ScrollyBar>
          <ErrorBoundary>
            <RobotGallery robots={filteredRobots} />
          </ErrorBoundary>
        </ScrollyBar>
      </div>
    );
  }
}
export default RobotHome;
