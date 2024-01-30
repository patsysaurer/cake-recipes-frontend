import React from "react";
import Slider from "../components/Slider.js";
import Intro from "../components/Intro.js";


const Home = ({currentUser}) => {
  return (
    <>
      <div id="hero-section">
        <Intro currentUser={currentUser}/>
        <Slider className="slider" />
      </div>
    </>
  );
};

export default Home;
