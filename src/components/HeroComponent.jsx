import React from "react";
import "./herocomponent.css";
import heroimage from "../assets/heroimage.png";
const HeroComponent = () => {
  return (
    <>
      <div className="heroSection">
        <img src={heroimage} alt="" />
      </div>
    </>
  );
};

export default HeroComponent;
