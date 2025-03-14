import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import Project from "./route/Project";
import About from "./route/About";
import Contact from "./route/Contact";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
