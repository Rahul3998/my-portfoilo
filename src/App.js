import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import React from "react";
import Project from "./route/Project";
import About from "./route/About";
import Contact from "./route/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
