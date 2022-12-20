import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Navbar";
import Transition from "./components/Transition";

const App = () => {
  return (
    <Router>
      <Nav />
      <Transition />
    </Router>
  );
};

export default App;
