import React from "react";
import MyContext from "./MyContext";
import ContextFunctionalComponent from "./ContextFunctionalComponent";

export default function TestProvider() {
  const data = "Hello from Context!";
  return (
    <MyContext.Provider value={data}>
      <ContextFunctionalComponent></ContextFunctionalComponent>
    </MyContext.Provider>
  );
}
