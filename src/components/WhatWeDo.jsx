import React from "react";
import "./whatwedo.css";
import influenceLogo from "../assets/campaignicon.png";
import blogIcon from "../assets/blogicon.png";
import musicIcon from "../assets/playlisticon.png";
const WhatWeDo = () => {
  return (
    <>
      <section className="unlock-section">
        <h1 className="unlock-title">Unlock Your Music’s Potentials</h1>
        <p className="unlock-subtitle">
          NewBanger stands out by giving artists real, targeted{" "}
          <br className="desktop-br" /> music promotion that builds genuine
          listeners—not just numbers
        </p>

        <div className="features">
          <div className="feature-card">
            <div className="featureImg">
              <img src={influenceLogo} alt="" />
            </div>

            <h3>Go Viral with Influencers</h3>
            <p>
              Partner with social media stars who push your{" "}
              <br className="desktop-br" /> tracks to new listeners
            </p>
          </div>

          <div className="feature-card">
            <div className="featureImg">
              <img src={blogIcon} alt="" />
            </div>
            <h3>Get Featured on Top Blogs</h3>
            <p>
              Your music deserves the spotlight. Let music{" "}
              <br className="desktop-br" /> bloggers share your story
            </p>
          </div>

          <div className="feature-card">
            <div className="featureImg">
              <img src={musicIcon} alt="" />
            </div>
            <h3>Hit the Playlists That Matter</h3>
            <p>
              Reach curated playlists and grow your streams with{" "}
              <br className="desktop-br" /> fans who actually listen
            </p>
          </div>
        </div>

        <button className="cta-btn">Start Your Campaign</button>
      </section>
    </>
  );
};

export default WhatWeDo;
