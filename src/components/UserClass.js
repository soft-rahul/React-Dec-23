import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      count3: 3,
      count4: 4,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    // this.setState((state) => ({
    //   ...state,
    //   count: state.count + 1,
    // }));
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2> Count : {count}</h2>
        <button onClick={this.handleIncrement}> Increment </button>
        <h4> Name : {this.props.name} </h4>
        <h4> Address: 404 </h4>
      </div>
    );
  }
}

export default UserClass;
