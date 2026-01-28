import React, { useState } from "react";
import Footer from "../components/footer/FooterNew";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/NavBarNew";
import Resume from "../components/resume/ResumeNew";
import Skills from "../components/skills/SkillsNew";
import Work from "../components/work/WorkNew";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default Home;

