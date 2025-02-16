import React from "react";
import "../styles.css"; // Ensure global styles are applied
import { FaRegCopyright } from "react-icons/fa"; // Import Copyright icon

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Enoch Park Corporation <FaRegCopyright /> {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
