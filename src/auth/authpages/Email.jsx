import React from "react";
import logoimage from "../../assets/newbanger.png";

const Email = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000')`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <h2 className="font-['Bebas_Neue'] text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-wide uppercase mb-4">
            Where Creators Build
            <br />
            <span className="text-primary">Momentum</span> & Grow!
          </h2>
          <p className="font-['Outfit'] text-gray-300 text-base max-w-md mb-8">
            Turn your platform into income by promoting music that deserves
            attention—and get paid for your influence.
          </p>

          {/* Trusted By */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"
                />
              ))}
            </div>
            <span className="font-['Outfit'] text-white/80 text-sm">
              Trusted by over{" "}
              <span className="font-semibold text-white">100+</span> bloggers
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Email Confirmation */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white overflow-y-auto">
        <div className="flex-1 px-6 sm:px-12 lg:px-16 py-8 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <img src={logoimage} alt="NewBanger" className="h-10" />
          </div>

          {/* Centered Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm">
              {/* Card with border */}
              <div className="border-2 border-primary rounded-2xl p-8 text-center">
                {/* Email Icon */}
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Heading */}
                <h1 className="font-['Sora'] text-xl font-bold text-gray-900 mb-3">
                  Confirm your email address
                </h1>

                {/* Description */}
                <p className="font-['Outfit'] text-gray-500 text-sm leading-relaxed mb-6">
                  Just one more thing! We've just sent you an e-mail to confirm
                  your email address. Click the link in the email to confirm
                  your account.
                </p>

                {/* Proceed Button */}
                <button
                  onClick={() => (window.location.href = "/confirm-email")}
                  className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-['Sora'] font-semibold text-sm rounded-full transition-all duration-300"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
