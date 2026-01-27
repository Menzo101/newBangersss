import React, { useState } from "react";
import "./slider.css";
import { testimonials } from "../data.js";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };
  const next = () => {
    setIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };
  return (
    <>
      <section className="testimonial-section">
        <p className="testimonial-tag">TESTIMONIALS</p>
        <h2 className="testimonial-title">
          The Artists Who Turned Up the <br /> Volume on Their Careers
        </h2>
        <p className="testimonial-subtitle">
          Discover how independent musicians are taking control of their
          promotion, <br /> reaching the right listeners, and growing their
          audiences with NewBanger.
        </p>

        <div className="testimonial-wrapper">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 50}%)` }}
          >
            {testimonials.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{item.text}</p>

                <div className="testimonial-user">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
