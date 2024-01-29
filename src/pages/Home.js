import React from "react";
import Slider from "../components/Slider.js";
import Intro from "../components/Intro.js";


const Home = () => {
  return (
    <>
      <div id="hero-section">
        <Intro />
        <Slider className="slider" />
      </div>
    </>
  );
};

export default Home;
