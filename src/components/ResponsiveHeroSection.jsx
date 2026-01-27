import React from "react";
import "./responsiveherosection.css";
import responsiveherosection from "../assets/responsiveHero.png";
const ResponsiveHeroSection = () => {
  return (
    <>
      <div className="responsiveherosection">
        <img src={responsiveherosection} alt="" />
      </div>
    </>
  );
};

export default ResponsiveHeroSection;
