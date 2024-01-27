import { React, useContext } from "react";
import MyContext from "./MyContext";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

export default function ContextFunctionalComponent() {
  const value = useContext(MyContext);
  return (
    <div>
      <p> This is our parent Component :---{value}</p>
      <ComponentOne></ComponentOne>
      <ComponentTwo></ComponentTwo>
      <ComponentThree></ComponentThree>
    </div>
  );
}
