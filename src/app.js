import React from "react";
// import RobotsIndexPage from "./pages/robots/RobotsIndexPage";
import "./index.css";
import DisplayBlogs2016 from "./pages/blogs/react-2016/DisplayBlogs2016";

const App = () => {
  return (
    <div className="tc bg dark-blue bg-light-red">
      {/* <RobotsIndexPage /> */}
      <DisplayBlogs2016 />
    </div>
  );
};

export default App;
