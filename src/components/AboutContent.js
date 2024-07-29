import "./Styles/AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import ImgTop01 from "../assets/img-stack-01.jpeg";
import ImgTop02 from "../assets/img-stack-02.jpeg";
import MyCv from "../";

const AboutContent = () => {
  const handleDownload = () => {
    // URL of the file to be downloaded
    const fileUrl = "/assets/Rahul_Adagale_Resume.pdf";
    const fileName = "Rahul_Adagale_Resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Append the link to the document body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the temporary link element
    document.body.removeChild(link);
  };

  return (
    <div className="about">
      <div className="left">
        <h1>Personal Story and Background</h1>
        <p>
          I started my career as a Java developer, driven by a passion for
          creating efficient and robust applications. As I gained more
          experience, I became proficient in both frontend and backend
          technologies, allowing me to take on a diverse range of projects and
          challenges.
        </p>
        <br />
        <h1>Markup and Styling</h1>
        <p>HTML, CSS</p>
        <br />
        <h1>Programming Languages</h1>
        <p>Java, Javascript</p>
        <br />
        <h1>Frontend Frameworks and Libraries</h1>
        <p>React, React-Native</p>
        <br />
        <h1>Backend Technologies</h1>
        <p>NodeJS, Spring, Springboot, Servlet, JSP</p>
        <br />
        <h1>Databases</h1>
        <p>MySQL, PostgreSQL</p>
        <br />
        <h1>Version Control and Collaboration</h1>
        <p>Git & Github</p>
        <br />
        <h1>Web Servers</h1>
        <p>Apache Server</p>
        <br />
        <Link to="/contact">
          <button className="btn" onClick={handleDownload}>
            Download CV{" "}
          </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ImgTop01} alt="img-top" className="img" />
          </div>
          {/* <div className="img-stack bottom">
            <img src={ImgTop02} alt="img-bottom" className="img" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
