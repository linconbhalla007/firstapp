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
    console.log("inside increment");
    this.setState((prvState) => {
      return { count: prvState.count + 1 };
    });
  };

  render() {
    console.log("inside render");
    return (
      <div>
        <h1>This is Class component </h1>
        <p>Count: {this.state.count}</p>

        <MyFunctionComponent click={this.incrementCount}></MyFunctionComponent>
      </div>
    );
  }
}

export default Classcomponent;
