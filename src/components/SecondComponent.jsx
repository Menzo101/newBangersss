import React from "react";
import "./secondcomponent.css";
import usericon from "../assets/musicianandcurator.png";
import { BsMegaphoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import techpoint from "../assets/techpoint.png";
// import techcabal from "../assets/techcabal.png";
// import love from "../assets/tribune.png";

const SecondComponent = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>
            Get Your Music Heard
            <span className="highlight">Everywhere</span>
          </h1>

          <p>
            Connect with top influencers, playlist curators, and music bloggers
            instantly <br className="desktop-br" /> NewBanger makes music
            promotion simple, fast, <br className="desktop-br" /> and affordable
            for every artist.
          </p>

          <button className="cta-btn">Promote Your Music</button>

          <div className="social-proof">
            <div className="avatars">
              <img src={usericon} />
            </div>
            <div className="newContainer">
              <div className="icons">
                <BsMegaphoneFill id="trumpet" />

                <span id="stars"> ⭐⭐⭐⭐⭐⭐</span>
              </div>
              <p>Trusted by over 1000 musicians and curators</p>
            </div>
          </div>
        </div>

        {/* <div className="featured-strip">
          <h3>Featured on: </h3>
          <div className="ticker">
            <div className="ticker-track">
              <Link className="tick-link">
                <img src={techcabal} alt="" className="barb" />
              </Link>

              <Link className="tick-link">
                {" "}
                <img src={love} alt="" className="barb" />
              </Link>
              <Link className="tick-link">
                <img src={techpoint} alt="" className="barb" />
              </Link>

              <Link className="tick-link">
                <img src={techcabal} alt="" className="barb" />
              </Link>

              <Link className="tick-link">
                <img src={techpoint} alt="" className="barb" />
              </Link>

              <Link className="tick-link">
                <img src={techcabal} alt="" className="barb" />
              </Link>

              <Link className="tick-link">
                <img src={techpoint} alt="" className="barb" />
              </Link>
              <Link className="tick-link">
                {" "}
                <img src={love} alt="" className="barb" />
              </Link>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default SecondComponent;
