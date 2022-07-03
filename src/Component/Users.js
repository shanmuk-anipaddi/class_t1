import React, { useState, Component } from "react";
import User from "./User";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Tifanny" },
  { id: 3, name: "Siddu" },
];

class Users extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
    };
  }
  showHandler() {
    this.setState((showList) => {
        //console.log(showList)
      return {show:!showList.show};
    });
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.showHandler.bind(this)}>
          {this.state.show ? "Hide" : "Show"} Users
        </button>
        {this.state.show  && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(false);

//   const showHandler = () => {
//     setShowUsers((setUsetList) => !setUsetList);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => {
//         return <User name={user.name} />;
//       })}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={showHandler}>{showUsers ? "Hide" : "Show"} Users</button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
