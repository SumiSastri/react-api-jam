import React, { useState } from "react";

import { FormInput } from "../../../../components/FormInput";
import { usersUrl } from "../../../../data/constants/listOfURLs";

const CreateRobotUser = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // deconstruct object for elements you want in the form
    const addRobot = {
      name,
    };

    // post data in the submit  handler (201 created but cached - referesh db you will get 200)
    fetch(usersUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      name: JSON.stringify(addRobot),
    });
    console.log("CHECK SUBMISSION:", addRobot);
  };

  // set data in the UI
  return (
    <div className="form-container">
      <h2>Authorized admin users: Add User</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          className="inpt-2s"
          label="Create a new robot user"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="button-two">Save</button>
      </form>
    </div>
  );
};

export default CreateRobotUser;
