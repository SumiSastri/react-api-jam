import React from "react";
import RobotCard from "./RobotCard";

const RobotGallery = ({ robots }) => {
  // if (true) {
  // 	throw new Error('An Error Has Occured Check your Code!');
  // }
  // UNCOMMENT CODE FOR PRODUCTION
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <RobotCard
            key={i}
            id={robot.id}
            name={robot.name}
            favefood={robot.favefood}
            description={robots.description}
          />
        );
      })}
    </div>
  );
};

export default RobotGallery;
