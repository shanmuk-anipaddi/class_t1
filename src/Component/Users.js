import React, { useState } from "react";
import User from "./User";
import classes from "./users.module.css";

const DUMMY_USERS = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Tifanny" },
  { id: 3, name: "Siddu" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(false);

  const showHandler = () => {
    setShowUsers((setUsetList) => !setUsetList);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => {
        return <User name={user.name} />;
      })}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={showHandler}>{showUsers ? "Hide" : "Show"} Users</button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;