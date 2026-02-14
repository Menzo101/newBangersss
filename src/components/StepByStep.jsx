import React from "react";
import { steps } from "../data.js";

const StepByStep = () => {
  return (
    <section className="how-section bg-white py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-28 space-y-6">
          <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold text-secondary tracking-[0.3em] uppercase">
            HOW IT WORKS
          </p>
          <h2
            className="font-['Montserrat'] font-bold text-3xl sm:text-4xl md:text-[44px] lg:text-[58px] text-gray-900 tracking-wide max-w-6xl mx-auto uppercase"
            style={{ lineHeight: 1.4 }}
          >
            How <span className="text-danger italic">NewBanger</span> Takes Your Sound
            to the Next Level
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start bg-gradient-to-br from-white to-gray-50 p-8 md:p-10 rounded-3xl border-2 border-gray-200 hover:border-secondary hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-all duration-500 hover:-translate-y-3 animate-[slideInLeft_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >
              {/* Icon with Step Number */}
              <div className="relative mb-8">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ff614d' }}>
                  <span className="font-['Montserrat'] text-white text-lg sm:text-xl font-normal">
                    {item.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-['Montserrat'] font-bold text-[18px] text-gray-900 group-hover:text-secondary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="font-['Montserrat'] font-light text-base text-gray-600 leading-relaxed tracking-wide">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-primary text-white font-['Montserrat'] font-normal text-lg tracking-wider uppercase rounded-2xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-2xl w-full max-w-sm">
            Promote Your Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
