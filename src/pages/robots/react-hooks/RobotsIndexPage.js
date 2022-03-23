// change imports for Hooks
import React, { useState, useEffect } from "react";

import "../../../index.css";
import { usersUrl } from "../../../constants/listOfURLs";
import RobotGallery from "../RobotGallery";
import ScrollyBar from "../../../components/scroll";
import SearchBox from "../../../components/searchbox";
import ErrorBoundary from "../../../components/errorboundary";

const RobotsIndexPage = () => {
  // call the use State hook refactor and remove class component make it a functional component
  const [robots, setRobots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState("");

  //  call useEffect to get data instead of componentDidMount
  useEffect(() => {
    const fetchRobots = async () => {
      await fetch(usersUrl)
        .then((response) => response.json())
        .then((responseData) => setRobots(responseData));
      setIsLoading(false);
    };
    fetchRobots();
  }, []);

  //   CONSOLE LOGS TO CHECK DATA FLOWS FROM API AND THEN INTO COMPONENT
  //   useEffect(() => {
  //     const fetchRobots = async () => {
  //       await fetch(usersUrl)
  //         .then((response) => response.json())
  //         // .then((responseData) => console.log(responseData, "res data 1"));
  //         .then((responseData) => setRobots(responseData))
  //         .then((responseData) => console.log(responseData, "res data 2"));
  //       setIsLoading(false);
  //     };
  //     fetchRobots();
  //   }, []);

  // this key word removed from utility functions - these can be set to a state array but this is easier
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    !isLoading && (
      <div className="tc bg dark-blue bg-light-red">
        <h1>Robot Friends with</h1>
        {/* don't change order as search box needs to be outside the scroll and error */}
        <SearchBox searchChange={onSearchChange} />
        <ScrollyBar>
          <ErrorBoundary>
            <RobotGallery robots={filteredRobots} />
          </ErrorBoundary>
        </ScrollyBar>
      </div>
    )
  );
};
export default RobotsIndexPage;
