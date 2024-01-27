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
import APICalling from "../service/APICalling";
import { Provider } from "react-redux";
import store from "../reduxTest/Store";
import Counter from "../reduxTest/Counter";
import TestProvider from "../components/contextExample/TestProvider";

export default function Navigation() {
  const location = useLocation();
  console.log("Current Location :" + location.pathname);
  const loginStatus = localStorage.getItem("login");
  console.log("LOGIN STATUS-----" + loginStatus);
  return (
    <div>
      <div>
        {location.pathname === "/signIn" ? (
          <></>
        ) : (
          <MyAppBar loginStatus={loginStatus}></MyAppBar>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Provider store={store}>
            <Routes>
              <Route path="/api" element={<APICalling></APICalling>}></Route>
              <Route index element={<Home></Home>}></Route>
              <Route path="/signIn" element={<SignIn></SignIn>}></Route>
              <Route
                path="/myaccount"
                element={<MyAccount></MyAccount>}
              ></Route>
              <Route
                path="/classComponent"
                element={<Classcomponent></Classcomponent>}
              ></Route>
              <Route
                path="/functionCompnent"
                element={<MyFunctionComponent></MyFunctionComponent>}
              ></Route>
              <Route path="/todo" element={<TODOList></TODOList>}></Route>
              <Route
                path="/employee"
                element={<Employee></Employee>}
              ></Route>{" "}
              <Route path="/counterRedux" element={<Counter></Counter>}></Route>
              <Route
                path="/contextExample"
                element={<TestProvider></TestProvider>}
              ></Route>
            </Routes>
          </Provider>
        </div>
      </div>
    </div>
  );
}
