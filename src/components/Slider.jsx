import React, { useState } from "react";
import { testimonials } from "../data.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold text-primary tracking-[0.3em] uppercase">
            TESTIMONIALS
          </p>
          <h2
            className="font-['Montserrat'] font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-[58px] text-gray-900 tracking-wide uppercase"
            style={{ lineHeight: 1.4 }}
          >
            The Artists Who Turned Up the <span className="italic font-['Montserrat'] text-black">Volume</span> on Their Careers
          </h2>
          <p className="font-['Montserrat'] font-light text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed tracking-wide">
            Discover how independent musicians are taking control of their promotion, reaching the right listeners, and growing their audiences with NewBanger.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="bg-white p-10 md:p-14 lg:p-20 rounded-3xl shadow-md border-2 border-gray-200">
                    {/* Stars */}
                    <div className="text-secondary text-3xl md:text-4xl mb-8">
                      ★★★★★
                    </div>

                    {/* Testimonial Text */}
                    <p className="font-['Montserrat'] text-[16px] text-gray-700 leading-relaxed mb-10 md:mb-14 italic">
                      "{item.text}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                      />
                      <div>
                        <strong className="font-['Montserrat'] text-base md:text-lg text-gray-900 block font-bold">
                          {item.name}
                        </strong>
                        <span className="font-['Montserrat'] text-sm md:text-base text-primary font-medium tracking-wide">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-primary w-8 md:w-10"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
