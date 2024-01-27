import { React, useContext } from "react";
import MyContext from "./MyContext";

export default function ComponentTwo() {
  const value = useContext(MyContext);
  return (
    <div>
      <h1>This Is component 2--{value}</h1>
    </div>
  );
}
