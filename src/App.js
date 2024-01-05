import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navigation from "./hader/Navigation";

function App() {
  const loginCred = () => {
    localStorage.setItem("userName", "Test@123");
    localStorage.setItem("password", "123456");
  };
  return (
    <Router>
      {loginCred()}
      <Navigation></Navigation>
    </Router>
  );
}

export default App;
