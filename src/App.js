import React from "react";
import "./App.css";

import Classcomponent from "./Classcomponent";

import MyFunctionComponent from "./FunctionComponent";
import TODOList from "./components/TODOList";
import MyAppBar from "./hader/MyAppBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyAccount from "./components/MyAccount";
import Employee from "./components/Employee";

function App() {
  return (
    <Router>
      <div>
        <MyAppBar></MyAppBar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/myaccount" element={<MyAccount></MyAccount>}></Route>
            <Route
              path="/classComponent"
              element={<Classcomponent></Classcomponent>}
            ></Route>
            <Route
              path="/functionCompnent"
              element={<MyFunctionComponent></MyFunctionComponent>}
            ></Route>
            <Route path="/todo" element={<TODOList></TODOList>}></Route>
            <Route path="/employee" element={<Employee></Employee>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <MyAppBar></MyAppBar>
    //   <TODOList></TODOList>
    //   {/* <Classcomponent></Classcomponent> */}
    // </div>
  );
}

export default App;
