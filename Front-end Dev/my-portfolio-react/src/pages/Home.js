import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is applied
import profileImg from "../assets/images/home-image.png"; // Import your profile image

const Home = () => {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>Explore my portfolio by selecting a section from the navigation menu above.</p>
      <img className="mt-3"
          src={profileImg}
          alt="Enoch Park"
          style={{ width: "1200px", height: "auto" }} 
        />
    </div>
  );
};

export default Home;