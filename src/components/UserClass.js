import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countTwo: 2,
    };
    console.log("Child constructor");
  }
  render() {
    console.log("Child Render");
    const { name, location, pic } = this.props;
    const { count, countTwo } = this.state;
    const clickHandler = () => {
      this.setState({
        count: count + 1,
      });
    };
    return (
      <div>
        <img src={pic} alt="profile pic" width={"200"} height={"200"} />
        <h2> Name : {name} </h2>
        <h2> Address :{location}</h2>
      </div>
    );
  }
  componentDidMount() {
    console.log("Child Component Did Mount !");
  }
}

export default UserClass;
