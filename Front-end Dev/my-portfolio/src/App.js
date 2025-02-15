import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechArchive from "./pages/TechArchive";
import Contact from "./pages/Contact";
import Aws from "./pages/Aws"; // Import AWS page
import "./styles.css";

function Layout() {
  return (
    <div className="content-container">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techarchive" element={<TechArchive />} />
          <Route path="/techarchive/aws" element={<Aws />} /> {/* New AWS page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
    </Router>
  );
}

export default App;