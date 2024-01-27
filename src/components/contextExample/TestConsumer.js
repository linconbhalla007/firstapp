import React from "react";
import MyContext from "./MyContext";

export default function TestConsumer() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <div>
          <p>{value}</p>
        </div>
      )}
    </MyContext.Consumer>
  );
}
