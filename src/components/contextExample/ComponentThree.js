import { React, useContext } from "react";
import MyContext from "./MyContext";

export default function ComponentThree() {
  const value = useContext(MyContext);
  return (
    <div>
      <h1>This Is component 3: ----{value}</h1>
    </div>
  );
}
