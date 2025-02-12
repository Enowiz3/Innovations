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
import "./CSS/App.css"; // Import CSS file
/* 
import "./Navbar.css"; // Import CSS file
*/

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
