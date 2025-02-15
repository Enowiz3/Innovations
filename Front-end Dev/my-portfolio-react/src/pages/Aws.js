import React from "react";
import "../styles.css"; // Ensure global styles are applied
import awsImage from "../assets/images/aws-intro.jpg"; // Image for AWS
import awsPDF from "../assets/pdfs/aws.pdf"; // AWS PDF file

const Aws = () => {
  return (
    <div className="container aws-container">
      <h2>What is Amazon Web Services?</h2>
      <p>
        Amazon Web Services (AWS) is a secure cloud services platform, offering computing power, 
        database storage, content delivery, and other functionality to help businesses scale and grow. 
        AWS provides a suite of infrastructure services such as computing power, storage options, 
        and networking that can be used to build sophisticated applications with increased flexibility, 
        scalability, and reliability.
      </p>

      {/* AWS Image */}
      <div className="text-center pb-4">
        <img 
          src={awsImage} 
          width="600" 
          height="500" 
          alt="AWS Architecture Diagram" 
          className="img-fluid shadow-lg rounded"
        />
      </div>

      {/* AWS Concept Overview */}
      <div className="text-center mb-4">
        <h2>AWS Concept Overview</h2>
        <p>Document was created by Enoch Park</p>
      </div>

      {/* AWS PDF iFrame */}
      <div className="pdf-container">
        <iframe src={awsPDF} title="AWS Documentation"></iframe>
      </div>
    </div>
  );
};

export default Aws;
