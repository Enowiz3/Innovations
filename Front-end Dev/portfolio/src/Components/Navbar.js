import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          MyPortfolio
        </Link>

    
        {/* Navbar Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/projects" >Projects</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;