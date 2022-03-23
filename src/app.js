import React from "react";
// import RobotHome from "./pages/robots/react-2016/RobotHome";
import RobotsIndexPage from "./pages/robots/react-hooks/RobotsIndexPage";
import "./index.css";

const App = () => {
  return (
    <div className="tc bg dark-blue bg-light-red">
      {/* <RobotHome /> */}
      <RobotsIndexPage />
    </div>
  );
};

export default App;
