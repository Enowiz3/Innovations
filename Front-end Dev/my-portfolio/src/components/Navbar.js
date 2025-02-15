import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between p-2">
        <Link className="navbar-brand ms-3" to="/">Enoch's Tech Portfolio</Link>
        <div className="d-flex gap-4">
        <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/about">About Me</Link>
          <Link className="nav-link text-white" to="/techarchive">Tech Archive</Link>
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;