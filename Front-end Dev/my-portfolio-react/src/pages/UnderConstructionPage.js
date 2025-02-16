import React from "react";
import "../styles.css"; // Ensure global styles are applied
import profileImg from "../assets/images/under-construction.jpg"; // Import your profile image

const UnderConstructionPage = ({ title }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <p>🚧 This page is currently under construction. Stay tuned for exciting updates and project showcases—coming soon!</p>
      <img
        className="circular-image mt-3"
        src={profileImg}
        alt="Enoch Park"
        style={{ width: "1200px", height: "auto" }}
      />
    </div>
  );
};

export default UnderConstructionPage;