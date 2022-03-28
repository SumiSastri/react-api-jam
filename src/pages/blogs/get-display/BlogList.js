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
          <div className="pa3 pa5-ns" key={post.id}>
            <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib light-purple">
              Edit
            </button>
            <RenderImages
              className="w-100 f5 measure"
              alt="Cats"
              src={`https://robohash.org/${post.id}?set=set4`}
            />
            <Card
              className="measure lh-copy"
              title={post.title}
              body={post.body}
            >
              <h6>{post.title}</h6>
              <p>{post.body}</p>
            </Card>

            <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink">
              Delete
            </button>
          </div>
        );
      })}
    </List>
  );
};

export default BlogList;
