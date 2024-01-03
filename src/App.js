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
  return (
    <Router>
      <Navigation></Navigation>
    </Router>
  );
}

export default App;
