import React, { Component } from "react";
import MyFunctionComponent from "./FunctionComponent";
import { TextField } from "@mui/material";

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
        <TextField
          id="outlined-basic"
          label="Name "
          variant="standard"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <MyFunctionComponent
          click={this.incrementCount}
          name={this.state.name}
        ></MyFunctionComponent>
      </div>
    );
  }
}

export default Classcomponent;
