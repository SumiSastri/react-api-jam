import React, { useState } from "react";

import { FormInput } from "../../../components/FormInput";
import { contentUrl } from "../../../../constants/listOfURLs";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // deconstruct object for elements you want in the form
    const addContent = {
      title,
      body,
    };

    // post data in the submit  handler (201 created but cached - referesh db you will get 200)
    // THIS BODY IS response.body (not the user title-body)
    fetch(contentUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addContent),
    });
    console.log("CHECK SUBMISSION:", addContent);
  };

  // set data in the UI with change handlers for each individual state change
  return (
    <div className="form-container">
      <h2>Authorized admin users: Add content</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          className="inpt-2s"
          label="Add blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
          className="inpt-2s"
          label="Add blog text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className="button-two">Save</button>
      </form>
    </div>
  );
};

export default CreateBlog;
