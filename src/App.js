import React from "react";
import Navbar from "./components/inc/Navbar";
import Project from "./components/pages/Project";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
