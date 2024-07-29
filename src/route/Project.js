import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg01 from "../components/HeroImg01";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
// import { HeroImg01 } from "../components/HeroImg01";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg01 heading="PROJECTS" text="Some of my recent works." />
      <Work />
      {/* <PricingCard /> */}
      <Footer />
    </div>
  );
};

export default Project;
