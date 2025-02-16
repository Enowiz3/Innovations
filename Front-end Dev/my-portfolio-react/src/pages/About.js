import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is applied
import profileImg from "../assets/images/Enoch.jpg"; // Import your profile image
import resume from "../assets/pdfs/resume.pdf"; // Import your resume file
const Home = () => {
  return (
    <div className="container">
    {/* Row for Profile Image & Bio */}
    <div className="row align-items-center">
      <div className="col-md-4 text-center">
        <img
          src={profileImg}
          alt="Enoch Park"
          className="img-fluid rounded-circle shadow"
          width="200"
        />
      </div>
      <div className="col-md-8">
        <h2>About Me</h2>
        <p className="lead">
          <strong>Senior IT Administrator | DevOps Engineer | Cloud Computing | Automation | Security Specialist</strong>
        </p>
        <p>
          I am a results-driven IT professional with over <strong>8 years of experience</strong> in IT administration, automation, and cloud computing.
          My expertise lies in <strong>Microsoft 365 Administration, DevOps, cybersecurity, automation, and scripting</strong> to enhance IT operations and security protocols.
        </p>
        <p>
          With a strong foundation in <strong>Azure, AWS, and security management</strong>, I specialize in optimizing cloud environments and implementing scalable IT solutions.
          I have successfully led security enhancements, automated IT processes using <strong>PowerShell and Python</strong>, and managed cloud-based infrastructures.
        </p>
        <p>
          Passionate about innovation, I continually expand my skill set, staying ahead of industry trends in <strong>cloud security, DevOps, and IT automation</strong>.
        </p>
        <a href={resume} className="btn btn-primary mt-3" download>
          Download My Resume
        </a>
      </div>
    </div>

    {/* Row for Skills & Certifications */}
    <div className="row my-5">
      <div className="col-md-6">
        <h3>Skills & Expertise</h3>
        <ul className="list-group">
          <li className="list-group-item">Microsoft 365 & Azure Administration</li>
          <li className="list-group-item">AWS & Cloud Infrastructure</li>
          <li className="list-group-item">PowerShell & Python Automation</li>
          <li className="list-group-item">Security & Compliance (Intune, Defender, IAM)</li>
          <li className="list-group-item">DevOps & CI/CD Integration</li>
          <li className="list-group-item">IT Operations & Process Optimization</li>
        </ul>
      </div>

      <div className="col-md-6">
        <h3>Certifications</h3>
        <ul className="list-group">
          <li className="list-group-item">AWS Certified Cloud Practitioner</li>
          <li className="list-group-item">AWS Solutions Architect (In Progress)</li>
          <li className="list-group-item">Google Cybersecurity</li>
          <li className="list-group-item">Google AI Essentials</li>
          <li className="list-group-item">Google Agile Essentials</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Home;