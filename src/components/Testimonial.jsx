import React, { useState } from "react";
import { faqs } from "../data.js";
import { FaChevronDown } from "react-icons/fa";

const leftColumn = faqs.slice(0, 4);
const rightColumn = faqs.slice(4);

const Testimonial = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  const renderItem = (faq, key) => (
    <div
      key={key}
      className="bg-white rounded-3xl border-2 border-gray-200 hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
    >
      <button
        className="w-full flex items-center justify-between p-4 md:p-5 text-left group"
        onClick={() => toggle(key)}
      >
        <span className="font-['Montserrat'] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 pr-6" style={{ lineHeight: 1.5 }}>
          {faq.question}
        </span>
        <FaChevronDown
          className={`flex-shrink-0 text-primary text-xl transition-transform duration-300 ${
            openKey === key ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          openKey === key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-1">
          <p className="font-['Montserrat'] font-light text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 tracking-wide" style={{ lineHeight: 1.7 }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-28 space-y-6">
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold text-primary tracking-[0.3em] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2
            className="font-['Montserrat'] font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-[58px] text-gray-900 tracking-wide max-w-6xl mx-auto uppercase"
            style={{ lineHeight: 1.4 }}
          >
            Answers to Your Most <span className="italic font-['Montserrat'] text-primary">Common</span> Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            {leftColumn.map((faq, index) => renderItem(faq, `left-${index}`))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            {rightColumn.map((faq, index) => renderItem(faq, `right-${index}`))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-gradient-to-br from-gray-50 to-white p-10 md:p-14 lg:p-16 rounded-3xl border-2 border-gray-200">
          <p className="font-['Montserrat'] text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold mb-5" style={{ lineHeight: 1.4 }}>
            Have Questions that are not answered?
          </p>
          <p className="font-['Montserrat'] text-lg md:text-xl lg:text-2xl text-gray-600 font-light tracking-wide">
            Contact us{" "}
            <a
              href="#contact"
              className="font-['Montserrat'] text-primary font-bold underline decoration-2 underline-offset-4 hover:text-primary/80 transition-colors duration-300"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
