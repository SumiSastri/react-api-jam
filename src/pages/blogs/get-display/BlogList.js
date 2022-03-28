import React from "react";

import "../../../styles/cardStyles.css";
import List from "../../../components/List";
import Card from "../../../components/Card";
import RenderImages from "../../../components/RenderImages";

// deconstructs state which has been set to the response object maps over the response
// returns display of the card reusable component with the title and body of the response
// const PostList = (props) => {
//   const displayPosts = props.displayPosts;
//   console.log("props", displayPosts);

const BlogList = ({ displayPosts }) => {
  return (
    <List className="cards">
      {displayPosts.map((post) => {
        return (
          <Card className="pa3 pa5-ns" key={post.id}>
            <RenderImages
              className="w-100 f5 measure"
              alt="Cats"
              src={`https://robohash.org/${post.id}?set=set4`}
            />
            <h4>{post.title}</h4>
            <p className="measure lh-copy">{post.body}</p>
          </Card>
        );
      })}
    </List>
  );
};

export default BlogList;
