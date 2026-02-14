import React from "react";
import usericon from "../assets/musicianandcurator.png";
import backgroundImage from "../assets/backgroundimage.jpeg";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaCheckCircle, FaRocket, FaUsers } from "react-icons/fa";

const SecondComponent = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Professional gradient overlay on background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gray-900/95" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 md:space-y-10 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm animate-[slideInLeft_0.6s_ease-out]">
              <FaCheckCircle className="text-primary text-sm" />
              <span className="font-['Montserrat'] text-sm font-medium text-primary tracking-wide">
                #1 Music Promotion Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="space-y-4 animate-[fadeIn_0.8s_ease-in_0.1s_both]">
              <span className="block font-['Montserrat'] text-[36px] lg:text-[50px] leading-none tracking-wide uppercase text-white">
                Amplify Your
              </span>
              <span className="block font-['Montserrat'] text-[36px] lg:text-[50px] leading-none italic text-danger">
                Music Career
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-['Montserrat'] text-base text-gray-300 leading-relaxed max-w-2xl animate-[fadeIn_0.8s_ease-in_0.3s_both]">
              Connect with verified influencers, playlist curators, and music
              bloggers. Get your tracks heard by the right audience.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 animate-[fadeIn_0.8s_ease-in_0.5s_both]">
              <div className="text-center lg:text-left">
                <div className="font-['Montserrat'] text-4xl md:text-5xl text-secondary">
                  1K+
                </div>
                <div className="font-['Montserrat'] text-sm text-gray-400">
                  Active Users
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-['Montserrat'] text-4xl md:text-5xl text-primary">
                  500+
                </div>
                <div className="font-['Montserrat'] text-sm text-gray-400">
                  Curators
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-['Montserrat'] text-4xl md:text-5xl text-primary">
                  10K+
                </div>
                <div className="font-['Montserrat'] text-sm text-gray-400">
                  Campaigns
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-[fadeIn_0.8s_ease-in_0.7s_both]">
              <button className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white font-['Montserrat'] font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-3">
                <FaRocket className="text-xl group-hover:translate-x-1 transition-transform" />
                Start Campaign
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-['Montserrat'] font-semibold text-lg rounded-xl transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                View Pricing
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-[scaleIn_0.8s_ease-out_0.4s_both]">
            {/* Card with glassmorphism */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Trust Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-primary rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <BsMegaphoneFill className="text-white text-xl" />
                  <span className="font-['Montserrat'] text-white text-sm tracking-wider">
                    TRUSTED PLATFORM
                  </span>
                </div>
              </div>

              {/* User Icons */}
              <div className="flex justify-center pt-8 pb-6">
                <img
                  src={usericon}
                  alt="Musicians and Curators"
                  className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Rating */}
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-1 text-3xl text-secondary">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="font-['Montserrat'] text-base md:text-lg text-white">
                  <span className="font-bold">4.9/5</span> from{" "}
                  <span className="font-semibold text-secondary">1,000+</span>{" "}
                  reviews
                </p>

                {/* Features List */}
                <div className="pt-6 space-y-3 text-left">
                  {[
                    "Real verified curators",
                    "Transparent pricing",
                    "24/7 support",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <FaCheckCircle className="text-primary text-lg flex-shrink-0" />
                      <span className="font-['Montserrat']">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondComponent;
