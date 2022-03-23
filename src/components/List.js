import React from "react";
import Card from "./Card.js";

const List = ({ props }) => {
  // if (true) {
  // 	throw new Error('An Error Has Occured Check your Code!');
  // }
  // UNCOMMENT CODE FOR PRODUCTION
  return (
    <div>
      {props.map((i) => {
        return <Card key={i} />;
      })}
    </div>
  );
};

export default List;
