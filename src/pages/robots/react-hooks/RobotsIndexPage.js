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
  const [filteredRobots, setFilteredRobots] = useState([]);

  //  call useEffect to get data instead of componentDidMount
  //  call the search handler in the dependency array
  useEffect(() => {
    const fetchRobots = async () => {
      await fetch(usersUrl)
        .then((response) => response.json())
        .then((responseData) => setRobots(responseData));
      setIsLoading(false);
    };
    fetchRobots();
  }, [filteredRobots]);

  const handleSearchChange = (searchValue) => {
    setSearchField(searchValue);
    if (searchField !== "") {
      const filteredRobots = usersUrl.filter((robots) => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
      });
      setFilteredRobots(filteredRobots);
    } else {
      setFilteredRobots(usersUrl);
    }
  };
  //   console.log(filteredRobots, "filtered");

  //   CONSOLE LOGS TO CHECK DATA FLOWS FROM API AND THEN INTO COMPONNT
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

  return (
    !isLoading && (
      <div className="tc bg dark-blue bg-light-red">
        <h1>Robot Friends with</h1>
        <ScrollyBar>
          <ErrorBoundary>
            <SearchBox onChange={(e) => handleSearchChange(e.target.value)} />
            <RobotGallery isLoading={isLoading} robots={robots} />
          </ErrorBoundary>
        </ScrollyBar>
      </div>
    )
  );
};
export default RobotsIndexPage;
