import React from "react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get current page path

  return (
    <div className="sidebar">
      {/* Sidebar Content ONLY for Tech Archive */}
      {location.pathname.startsWith("/techarchive") ? (
        <>
          <div className="label">
            <h4>Proof of Concept (POC)</h4>
          </div>

          <div className="sublabel">
            <h5>Cloud Computing</h5>
          </div>

          {/* AWS Link */}
          <div className="items">
            <Link to="/techarchive/aws">AWS</Link>
          </div>
        </>
      ) : (
        <div className="empty-sidebar"></div> // Empty sidebar for other pages
      )}
    </div>
  );
};

export default Sidebar;