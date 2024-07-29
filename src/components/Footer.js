import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Styles/FooterStyles.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Indira Vasahat, GaneshKhind Road, Aundh, Pune - 411007</p>
              <p>Pune, Maharastra, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8668460900
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              rahuladagale3998@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a FullStack Java Developer working professional at LinguaSol
            Pvt Ltd. I am having 1 year of experience doing this job.
          </p>
          <div className="social">
            <a
              href="https://www.instagram.com/_rahul___1511/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Enhances security and performance
              style={{ textDecoration: "none" }} // Removes underline if desired
            >
              <FaInstagram
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <a
              href="https://www.linkedin.com/in/rahul-adagale/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Enhances security and performance
              style={{ textDecoration: "none" }} // Removes underline if desired
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
