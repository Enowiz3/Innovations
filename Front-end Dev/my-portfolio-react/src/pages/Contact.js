import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for styling

const Contact = () => {
  return (
    <div className="container contact-container">
      <div className="row">
        {/* Left Side: Contact Info */}
        <div className="col-md-6 contact-info">
          <h2>Let's Connect</h2>
          <p className="lead">
            Have a project, job opportunity, or just want to say hi? Feel free to reach out!
          </p>

          <ul className="list-unstyled">
            <li>
              <FaPhone className="contact-icon" /> &nbsp;:
              <strong> (818) 921-5206</strong>
            </li>
            <li>
              <FaEnvelope className="contact-icon" /> &nbsp;:&nbsp;
              <a href="mailto:enochpark89@gmail.com">enochpark89@gmail.com</a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="social-links">
            <h3>Find Me Here</h3>
            <a
              href="https://www.linkedin.com/in/enoch-park-b83064122/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary me-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Enowiz3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Contact;