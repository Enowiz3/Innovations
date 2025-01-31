import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./Pages/About"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"; // Import Navbar component

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Home />
      <Routes>
      </Routes>
    </Router>
    </>
  );
}

export default App;
