import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg01 from "../components/HeroImg01";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg01
        heading="ABOUT"
        text="I am a friendly and Senior Java fullstack Developer"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
