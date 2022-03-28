import React from "react";
import RobotCard from "./RobotCard";

// the responseData has been set to robots the whole response data now available to deconstruct
const RobotGallery = ({ robots }) => {
  // if (true) {
  // 	throw new Error('An Error Has Occured Check your Code!');
  // }
  // UNCOMMENT CODE FOR PRODUCTION
  return (
    <div>
      {/* The response data deconstructed with a map using only the items required for display */}
      {robots.map((robot, i) => {
        return (
          <RobotCard
            key={i}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default RobotGallery;
