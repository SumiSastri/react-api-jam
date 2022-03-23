import React from "react";

import RenderImages from "../../components/RenderImages";

const RobotCard = ({ name, description, favefood, id }) => {
  return (
    <div className="dib pa3 ma2 grow bg-animate .15s ease-in-out tc ">
      <RenderImages
        className="bg-gold dib pa3 ma2 grow bg-animate transition: background-color .15s ease-in-out tc ba bw2 shadow-6"
        src={`https://robohash.org/${id}`}
        alt="robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{favefood}</p>
      </div>
    </div>
  );
};

export default RobotCard;
