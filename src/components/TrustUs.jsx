import React from "react";
import "./trustus.css";
import profile from "../assets/profile.png";
import rightAudience from "../assets/rightaudience.png";
import growth from "../assets/growth.png";
import analytics from "../assets/analytics.png";
import streamline from "../assets/streamlineprocess.png";
import systemsupport from "../assets/personalizesupport.png";
const TrustUs = () => {
  return (
    <>
      <section className="why-section">
        <p className="why-tag">WHY CHOOSE US?</p>
        <h2 className="why-title">
          Why Artists Trust <span>NewBanger</span>?
        </h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <img src={profile} alt="" />
            </div>
            <h3>Take Control of Your Music Promotion</h3>
            <p>
              With NewBanger, you choose the platforms and curators that fit
              your music. No one decides for you—you’re in the driver’s seat.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={rightAudience} alt="" />
            </div>
            <h3>Reach the Right Audience</h3>
            <p>
              Our vast network of industry professionals and curated platforms
              ensures your music gets in front of listeners who truly matter.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={growth} alt="" />
            </div>
            <h3>Amplify Your Growth</h3>
            <p>
              Whether you’re new or scaling fast, NewBanger connects you with
              opportunities that grow your audience and elevate your sound.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={analytics} alt="" />
            </div>
            <h3>Real-Time Analytics</h3>
            <p>
              Track your campaign performance with detailed insights so you know
              exactly what’s working and where to improve.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={streamline} alt="" />
            </div>
            <h3>Simple, Streamlined Process</h3>
            <p>
              From uploading your track to launching your campaign, our
              intuitive platform makes promotion easy and efficient.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <img src={systemsupport} alt="" />
            </div>
            <h3>Personalized Support</h3>
            <p>
              Our team is here to guide you every step of the way, offering tips
              and advice to make sure your music reaches its full potential.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustUs;
