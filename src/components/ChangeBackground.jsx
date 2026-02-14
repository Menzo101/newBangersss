import React from "react";
import { peopleTwo } from "../data.js";

const ChangeBackground = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="font-['Montserrat'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[58px] text-white text-center mb-10 sm:mb-14 md:mb-20 lg:mb-28 tracking-wide uppercase"
          style={{ lineHeight: 1.3 }}
        >
          Connect with <span className="italic text-secondary">Music Professionals</span> and Boost Your Career
        </h2>

        {/* Network Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {peopleTwo.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 cursor-pointer animate-[scaleIn_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Default Image */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Hover Image */}
              <img
                src={item.hoverImg}
                alt={item.label}
                className="absolute inset-0 w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Default Overlay Header */}
              <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex items-start justify-between z-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-['Montserrat'] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-2xl tracking-wider uppercase">
                  {item.label}
                </span>
                <img
                  src={item.icon}
                  alt="arrow"
                  className="w-7 h-7 md:w-9 md:h-9 filter brightness-0 invert"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="flex items-start justify-between">
                  <span className="font-['Montserrat'] font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-2xl tracking-wider uppercase">
                    {item.label}
                  </span>
                  <img
                    src={item.icon}
                    alt="arrow"
                    className="w-7 h-7 md:w-9 md:h-9 filter brightness-0 invert"
                  />
                </div>
                <div className="h-1.5 bg-danger rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-lg shadow-danger/50" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-primary text-white font-['Montserrat'] font-semibold text-xs sm:text-sm md:text-base tracking-wider uppercase rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
            Promote your music
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangeBackground;
