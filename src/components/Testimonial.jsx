import React, { useState } from "react";
import { faqs } from "../data.js";
import { FaChevronDown } from "react-icons/fa";
import "./testimonial.css";
const leftColumn = faqs.slice(0, 4);
const rightColumn = faqs.slice(4);
const Testimonial = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey(openKey === key ? null : key);
  };
  const renderItem = (faq, key) => (
    <div className="faq-card" key={key}>
      <button className="faq-question" onClick={() => toggle(key)}>
        <span>{faq.question}</span>
        <span className={`faq-icon ${openKey === key ? "open" : ""}`}>
          <FaChevronDown />
        </span>
      </button>

      {openKey === key && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
  return (
    <>
      <section className="faq-section">
        <p className="faq-label">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="faq-title">
          Answers to Your Most Common Questions; Let’s Clear Things Up
        </h2>

        <div className="faq-columns">
          <div className="faq-column">
            {leftColumn.map((faq, index) => renderItem(faq, `left-${index}`))}
          </div>

          <div className="faq-column">
            {rightColumn.map((faq, index) => renderItem(faq, `right-${index}`))}
          </div>
        </div>

        <div className="faq-footer">
          <p>Have Questions that are not answered?</p>
          <p>
            Contact us{" "}
            <a href="#">
              <span>here</span>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
