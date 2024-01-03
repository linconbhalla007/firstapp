import React from "react";
import Classcomponent from "../Classcomponent";
import MyFunctionComponent from "../FunctionComponent";
import TODOList from "../components/TODOList";
import MyAppBar from "../hader/MyAppBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../components/Home";
import MyAccount from "../components/MyAccount";
import Employee from "../components/Employee";
import SignIn from "../authentication/SignIn";

export default function Navigation() {
  const location = useLocation();
  console.log("Current Location :" + location.pathname);
  return (
    <div>
      <div>
        {location.pathname === "/signIn" ? <></> : <MyAppBar></MyAppBar>}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/signIn" element={<SignIn></SignIn>}></Route>
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
    </div>
  );
}
