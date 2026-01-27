import React from "react";
import "./stepbystep.css";
import { steps } from "../data.js";

const StepByStep = () => {
  return (
    <>
      <section className="how-section">
        <p className="how-tag">HOW IT WORKS</p>

        <h2 className="how-title">
          How <span>NewBanger</span> Takes Your Sound <br />
          to the Next Level — Step by Step
        </h2>

        <div className="how-grid">
          {steps.map((item, index) => (
            <div key={index} className="how-card">
              <div className="icon-wrapper">
                <span className="step-number">{item.step}</span>
                <img src={item.icon} className="icon" />
                {/* {item.icon} */}
              </div>
              <div className="gridTwo">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="how-btn">Promote Your Music</button>
      </section>
    </>
  );
};

export default StepByStep;
