import React from "react";

const RobotCard = ({ name, description, favefood, id }) => {
  return (
    <div className="bg-gold dib pa3 ma2 grow bg-animate transition: background-color .15s ease-in-out tc ba bw2 shadow-6">
      <div>
        <img src={`https://robohash.org/${id}?55x55`} alt="robots" />
      </div>

      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{favefood}</p>
      </div>
    </div>
  );
};

export default RobotCard;
