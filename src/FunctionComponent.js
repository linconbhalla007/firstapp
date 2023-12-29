import React, { useState } from "react";

function MyFunctionComponent(props) {
  return (
    <div className="App">
      {console.log("" + props.click)}
      <h1>This is My Function Component</h1>
      <button onClick={props.click}> increment in function</button>
      <p1>Name: {props.name}</p1>
    </div>
  );
}

export default MyFunctionComponent;
