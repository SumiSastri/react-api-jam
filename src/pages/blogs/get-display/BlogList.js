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

const BlogList = ({ displayPosts, handleDeleteClick }) => {
  return (
    <List className="cards">
      {displayPosts.map((post) => {
        return (
          <div className="pa3 pa5-ns" key={post.id}>
            <RenderImages
              className="w-100 f5 measure"
              alt="Cats"
              src={`https://robohash.org/${post.id}?set=set4`}
            />
            <Card
              className="measure lh-copy"
              title={post.title}
              body={post.body}
              id={post.id}
            >
              <h6>{post.title}</h6>{" "}
              <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib light-purple">
                Edit title?
              </button>
              <p>{post.body}</p>{" "}
              <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib light-purple">
                Edit copy?
              </button>
              <button
                onClick={handleDeleteClick}
                className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink"
              >
                Delete
              </button>
            </Card>
          </div>
        );
      })}
    </List>
  );
};

export default BlogList;
