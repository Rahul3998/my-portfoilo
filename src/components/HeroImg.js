import "./Styles/HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/background.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro-Image" />
      </div>
      <div className="content">
        <p>Hii, My Name is Rahul Adagale..!</p>
        <h1>Java FullStack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/about" className="btn btn-light">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
