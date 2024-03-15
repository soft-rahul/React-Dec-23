import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
    console.log("Parent Constructor");
  }

  render() {
    console.log("Parent Render");
    if (!this.state.userInfo) {
      return <h1> Fetching user Data...</h1>;
    }
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h2> About Page</h2>
        <h3> This is a about Page.</h3>
        <UserClass name={name} location={location} pic={avatar_url} />
      </div>
    );
  }

  componentDidMount() {
    const fetchUserData = async () => {
      const response = await fetch("https://api.github.com/users/soft-rahul");
      const data = await response.json();
      this.setState({
        userInfo: data,
      });
      console.log(data);
    };
    fetchUserData().catch((err) => console.log(err));
    console.log("Parent Component Did Mount Call");
  }
}

export default About;
