import React, { useState, useContext } from "react";
import MyContext from "./components/contextExample/MyContext";

function MyFunctionComponent(props) {
  const value = useContext(MyContext);

  return (
    <div className="App">
      {console.log("" + props.click)}
      <h1>This is My Function Component</h1>
      <button onClick={props.click}> increment in function</button>
      <p1>Name: {props.name}</p1>

      <p1>This is value coming from use context----: {value}</p1>
    </div>
  );
}

export default MyFunctionComponent;
