import React from "react";
import influenceLogo from "../assets/campaignicon.png";
import blogIcon from "../assets/blogicon.png";
import musicIcon from "../assets/playlisticon.png";
import { FaArrowRight, FaFire, FaPenNib, FaHeadphones } from "react-icons/fa";

const WhatWeDo = () => {
  const features = [
    {
      icon: influenceLogo,
      iconBg: "danger/10",
      accentColor: "danger",
      emoji: <FaFire className="text-danger" />,
      title: "Go Viral with Influencers",
      description: "Partner with verified social media stars who push your tracks to millions of new listeners",
      stat: "500K+",
      statLabel: "Reach"
    },
    {
      icon: blogIcon,
      iconBg: "primary/10",
      accentColor: "primary",
      emoji: <FaPenNib className="text-primary" />,
      title: "Get Featured on Top Blogs",
      description: "Your music deserves the spotlight. Let established music bloggers share your story",
      stat: "200+",
      statLabel: "Blogs"
    },
    {
      icon: musicIcon,
      iconBg: "success/10",
      accentColor: "success",
      emoji: <FaHeadphones className="text-success" />,
      title: "Hit the Playlists That Matter",
      description: "Reach curated playlists and grow your streams with fans who actually listen",
      stat: "1M+",
      statLabel: "Listeners"
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-['Montserrat'] text-sm font-bold text-primary uppercase tracking-wider">Our Services</span>
          </div>

          <h2 className="font-['Montserrat'] text-[40px] md:text-[58px] text-gray-900 leading-none tracking-wide uppercase">
            Unlock Your Music's
            <span className="block font-['Montserrat'] italic text-primary mt-2">
              Full Potential
            </span>
          </h2>

          <p className="font-['Montserrat'] text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NewBanger delivers real, targeted promotion that builds genuine listeners—not just numbers
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-gray-300 transition-all duration-500 hover:-translate-y-2 animate-[scaleIn_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
            >

              {/* Icon - Positioned at Top Right */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="absolute -top-3 -right-3 w-12 h-12 object-contain"
              />

              {/* Title */}
              <h3 className="font-['Montserrat'] font-bold text-[20px] text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-['Montserrat'] text-base text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Stat */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <div className="font-['Montserrat'] text-3xl text-gray-900">{feature.stat}</div>
                  <div className="font-['Montserrat'] text-sm text-gray-500">{feature.statLabel}</div>
                </div>
                <FaArrowRight className="text-danger text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gray-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h3 className="font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Ready to <span className="text-danger">Amplify</span> Your Reach?
            </h3>
            <p className="font-['Montserrat'] text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of artists who are already growing their fanbase with NewBanger
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group px-10 py-5 bg-primary hover:bg-primary/90 text-white font-['Montserrat'] font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-3">
                Start Your Campaign
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-['Montserrat'] font-semibold text-lg rounded-xl transition-all duration-300 border-2 border-white/20 hover:border-white/40">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
