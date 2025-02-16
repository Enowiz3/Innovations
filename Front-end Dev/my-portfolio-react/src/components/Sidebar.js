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
            
            {/* Azure Link */}
            <div className="items">
              <Link to="/techarchive/azure">Azure</Link>
            </div>

          <div className="sublabel">
            <h5>System Administration</h5>
          </div>

            <div className="items">
              <Link to="/techarchive/googleworkspace"> Google Workspace</Link>
            </div>

            <div className="items">
              <Link to="/techarchive/m365">Microsoft 365</Link>
            </div>

          <div className="sublabel">
            <h5>Scripting</h5>
          </div>
            <div className="items">
              <Link to="/techarchive/python">Python</Link>
            </div>

            <div className="items">
              <Link to="/techarchive/powershell">Powershell</Link>
            </div>

          <div className="sublabel">
            <h5>Software Development</h5>
          </div>
            <div className="items">
              <Link to="/techarchive/mongodb">React</Link>
            </div>            
            <div className="items">
              <Link to="/techarchive/mongodb">MongoDB</Link>
            </div>

            <div className="items">
              <Link to="/techarchive/django">Django</Link>
            </div>

          <div className="sublabel">
            <h5>Network</h5>
          </div>

          <div className="sublabel">
            <h5>Security</h5>
          </div>
        </>
      ) : (
        <div className="empty-sidebar"></div> // Empty sidebar for other pages
      )}
    </div>
  );
};

export default Sidebar;