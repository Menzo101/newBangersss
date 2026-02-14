import React, { useState } from "react";

const MusicCreatorBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle form submission logic here
      console.log({ email, userType: "curator" });
      setIsSubmitted(true);
    }
  };

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Waitlist Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 md:p-16 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-['Montserrat'] text-sm font-medium text-white/90 tracking-wide uppercase">
                Early Access for Curators
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-['Montserrat'] font-bold text-[34px] sm:text-4xl md:text-[44px] lg:text-[58px] text-white tracking-wide uppercase mb-6"
              style={{ lineHeight: 1.4 }}
            >
              Be The First To{" "}
              <span className="italic font-['Montserrat'] text-primary">
                Monetize
              </span>{" "}
              Your Influence
            </h2>

            {/* Subheading */}
            <p className="font-['Montserrat'] text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12" style={{ lineHeight: 1.7 }}>
              Join our exclusive waitlist and get early access to discover new
              artists, promote great music, and earn from your platform as a
              curator.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 font-['Montserrat'] text-[16px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-['Montserrat'] font-bold text-[16px] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                  >
                    Join Waitlist
                  </button>
                </div>

                {/* Helper Text */}
                <p className="font-['Montserrat'] text-sm text-white/50 mt-4">
                  No spam, ever. We'll only notify you when we launch.
                </p>
              </form>
            ) : (
              /* Success State */
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-xl mx-auto border border-white/20">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-3">
                  You're on the list!
                </h3>
                <p className="font-['Montserrat'] text-[16px] text-white/70">
                  We'll reach out as soon as early access opens. Get ready to
                  discover new artists and start earning from your influence.
                </p>
              </div>
            )}

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-12 border-t border-white/10">
              <div className="text-center">
                <p className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white">
                  2,500+
                </p>
                <p className="font-['Montserrat'] text-white/60 text-sm mt-1">
                  Curators Waiting
                </p>
              </div>
              <div className="text-center">
                <p className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white">
                  800+
                </p>
                <p className="font-['Montserrat'] text-white/60 text-sm mt-1">
                  Curators Available
                </p>
              </div>
              <div className="text-center">
                <p className="font-['Montserrat'] font-bold text-4xl md:text-5xl text-white">
                  50M+
                </p>
                <p className="font-['Montserrat'] text-white/60 text-sm mt-1">
                  Potential Reach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicCreatorBanner;
