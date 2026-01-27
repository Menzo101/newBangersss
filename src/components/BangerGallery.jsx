import React from "react";
import "./bangergallery.css";
import { peopleTwo } from "../data.js";

const BangerGallery = () => {
  return (
    <>
      <section className="network-section">
        <h2 className="network-title">
          Connect with music professionals and grow your <br /> network
        </h2>
        <div className="network-grid">
          {peopleTwo.map((item, index) => (
            <div key={index} className="network-card-wrapper">
              <div className="card-header">
                <span className="card-label">{item.label}</span>
                <img src={item.icon} alt="" className="card-arrow" />
                {/* <span className="card-arrow"></span> */}
              </div>

              <img src={item.img} alt={item.label} className="network-card" />
            </div>
          ))}
        </div>

        <button id="card-btn">Promote your music</button>
      </section>
    </>
  );
};

export default BangerGallery;
