import React from "react";
import RenderImages from "../../components/RenderImages";

// props passed down from the parent list component where response data destructured
const RobotCard = ({ name, username, email, id }) => {
  return (
    <div className="dib pa3 ma2 grow bg-animate .15s ease-in-out tc">
      <RenderImages
        className="bg-gold dib pa3 ma2 grow bg-animate transition: background-color .15s ease-in-out tc ba bw2 shadow-6"
        src={`https://robohash.org/${id}`}
        alt="robots"
      />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default RobotCard;
