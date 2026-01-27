import React from "react";
import { peopleTwo } from "../data.js";
import "./changebackground.css";

const ChangeBackground = () => {
  return (
    <>
      <section className="network-section">
        {" "}
        <h2 className="network-title">
          {" "}
          Connect with music professionals and boost your music career{" "}
        </h2>{" "}
        <div className="network-grid">
          {" "}
          {peopleTwo.map((item, index) => (
            <div key={index} className="network-card-wrapper">
              {" "}
              {/* Default image */}{" "}
              <img
                src={item.img}
                alt={item.label}
                className="network-card default-img"
              />{" "}
              {/* Hover image */}{" "}
              <img
                src={item.hoverImg}
                alt={item.label}
                className="network-card hover-img"
              />{" "}
              {/* Top text + arrow (default on top of image) */}{" "}
              <div className="card-header">
                {" "}
                <div className="div">
                  {" "}
                  <span className="card-label">{item.label}</span>{" "}
                </div>{" "}
                <img src={item.icon} alt="arrow" className="card-arrow" />{" "}
              </div>{" "}
              {/* Overlay text + arrow + red line (appear on hover over hover image) */}{" "}
              <div className="card-overlay">
                {" "}
                <span className="card-label">{item.label}</span>{" "}
                <img src={item.icon} alt="arrow" className="card-arrow" />{" "}
                <div className="red-line"></div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <button id="card-btn">Promote your music</button>{" "}
      </section>
    </>
  );
};

export default ChangeBackground;
