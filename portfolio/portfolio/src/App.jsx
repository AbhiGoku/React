import { useState } from "react";
import "./App.css";
import Intro from "./Components/Intro";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <NavBar />

      <AboutMe className="aboutMe"></AboutMe>
      <Resume />
    </>
  );
}

export default App;
