import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg01 from "../components/HeroImg01";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg01 heading="CONTACT" text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
