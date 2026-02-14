import React from "react";
import profile from "../assets/profile.png";
import rightAudience from "../assets/rightaudience.png";
import growth from "../assets/growth.png";
import analytics from "../assets/analytics.png";
import streamline from "../assets/streamlineprocess.png";
import systemsupport from "../assets/personalizesupport.png";

const TrustUs = () => {
  const benefits = [
    {
      icon: profile,
      title: "Take Control of Your Music Promotion",
      description: "With NewBanger, you choose the platforms and curators that fit your music. No one decides for you—you're in the driver's seat."
    },
    {
      icon: rightAudience,
      title: "Reach the Right Audience",
      description: "Our vast network of industry professionals and curated platforms ensures your music gets in front of listeners who truly matter."
    },
    {
      icon: growth,
      title: "Amplify Your Growth",
      description: "Whether you're new or scaling fast, NewBanger connects you with opportunities that grow your audience and elevate your sound."
    },
    {
      icon: analytics,
      title: "Real-Time Analytics",
      description: "Track your campaign performance with detailed insights so you know exactly what's working and where to improve."
    },
    {
      icon: streamline,
      title: "Simple, Streamlined Process",
      description: "From uploading your track to launching your campaign, our intuitive platform makes promotion easy and efficient."
    },
    {
      icon: systemsupport,
      title: "Personalized Support",
      description: "Our team is here to guide you every step of the way, offering tips and advice to make sure your music reaches its full potential."
    }
  ];

  return (
    <section className="why-section bg-gray-50 py-20 md:py-28 lg:py-36 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-28 space-y-6">
          <p className="font-['Sora'] text-sm sm:text-base md:text-lg font-bold text-primary tracking-[0.3em] uppercase">
            WHY CHOOSE US?
          </p>
          <h2 className="font-['Bebas_Neue'] font-normal text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[0.95] tracking-wide uppercase">
            Why Artists Trust <span className="text-danger italic font-['DM_Serif_Display']">NewBanger</span>?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-md border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:-translate-y-1 animate-[scaleIn_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Icon */}
              <div className="mb-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-['Sora'] font-bold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-['Outfit'] font-light text-base sm:text-lg text-gray-600 leading-relaxed tracking-wide">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
