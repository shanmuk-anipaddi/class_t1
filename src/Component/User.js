import React, { Component } from "react";

class User extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li>{props.name}</li>;
// };

export default User;
