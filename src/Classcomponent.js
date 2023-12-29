import React, { Component } from "react";
import MyFunctionComponent from "./FunctionComponent";

class Classcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  incrementCount = () => {
    console.log("increment event");
    this.setState((prvState) => {
      return { count: prvState.count + 1 };
    });
  };

  handleNameChange = (event) => {
    console.log("Name change event");
    this.setState({ name: event.target.value });
  };

  render() {
    console.log("inside render");
    return (
      <div>
        <h1>This is Class component </h1>
        <p>Count: {this.state.count}</p>
        <input
          type="text"
          placeholder="Enter yor name"
          value={this.state.name}
          onChange={this.handleNameChange}
        ></input>

        <MyFunctionComponent
          click={this.incrementCount}
          name={this.state.name}
        ></MyFunctionComponent>
      </div>
    );
  }
}

export default Classcomponent;
