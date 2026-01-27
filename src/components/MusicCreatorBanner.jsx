import React from "react";
import musicBanner from "../assets/slowbanner.png";
import "./musiccreator.css";
import musicbannertwo from "../assets/lastcta.png";

const MusicCreatorBanner = () => {
  return (
    <>
      <div className="creatorSection">
        <img src={musicBanner} alt="" />
      </div>

      <div className="creatorSectiontwo">
        <img src={musicbannertwo} alt="" />
      </div>
    </>
  );
};

export default MusicCreatorBanner;
