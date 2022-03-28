import React from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import useFetchApiData from "../../../hooks/useFetchApiData";

// deconstructs object key-values from the http response in the card list
// these values are deconstructed from the card list to display them as props of the Card component
export default function Card({ title, body, author, id }) {
  // this id of the router paras
  //   const { blogId } = useParams();
  //   const history = useHistory();

  // get data to dynamically display from api the detail of the page with the id from the api data
  const {
    hasErrors,
    isLoading,
    data: displayPosts,
  } = useFetchApiData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // } = useFetchApiData(`http://localhost:5000/shortStories/${id}`);
  // } = useFetchApiData("http://localhost:5000/shortStories/" +id);

  const handleDeleteClick = () => {
    fetch(`http://localhost:5000/shortStories/${id}`, {
      // fetch("http://localhost:5000/shortStories/" + displayPosts.id, {
      method: "DELETE",
    });
  };

  return (
    <div className="card">
      {isLoading && (
        <div>
          <h5>Please wait the data you requested is loading</h5>
        </div>
      )}
      {hasErrors && (
        <div>
          <h6>{hasErrors}</h6>
        </div>
      )}
      {displayPosts && (
        <article>
          <h3>{title}</h3>
          <h5>{author}</h5>
          <h6>{body}</h6>
          {/* <h3>{displayPosts.title}</h3>
          <h5>{displayPosts.author}</h5>
          <h6>{displayPosts.body}</h6> */}

          <p>
            <hr />
            <button onClick={handleDeleteClick}>Delete</button>
            Note: This action can not be reversed the resource will be
            permanantly deleted from your database
          </p>
        </article>
      )}
    </div>
  );
}
