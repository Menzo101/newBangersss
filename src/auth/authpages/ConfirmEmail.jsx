import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logoimage from "../../assets/newbanger.png";
import avatarImage from "../../assets/musicianandcurator.png";
import { SignUpContext } from "../../context/SignUpContext";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const { signupData } = useContext(SignUpContext);

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
            Turn Every Release Into a
            <br />
            New <span className="text-primary">Banger!</span>
          </h2>
          <p className="font-['Outfit'] text-gray-300 text-base max-w-md mb-8">
            Grow your audience, boost your streams and connect with real
            curators, the smart way.
          </p>

          {/* Trusted By */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={avatarImage}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="font-['Outfit'] text-white/80 text-sm">
              Trusted by over{" "}
              <span className="font-semibold text-white">100+</span> musicians
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Email Verified */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white overflow-y-auto">
        <div className="flex-1 px-6 sm:px-12 lg:px-16 py-8 flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <img src={logoimage} alt="NewBanger" className="h-10" />
          </div>

          {/* Centered Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm text-center">
              {/* Green Checkmark Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none">
                  <path
                    d="M28 4L33.09 7.36L39.27 6.18L41.82 12.02L47.82 14.02L47.18 20.27L51.18 25.09L47.82 30.18L48.46 36.36L42.82 38.91L40.27 44.91L34.09 44.82L28 48.18L21.91 44.82L15.73 44.91L13.18 38.91L7.54 36.36L8.18 30.18L4.82 25.09L8.82 20.27L8.18 14.02L14.18 12.02L16.73 6.18L22.91 7.36L28 4Z"
                    fill="#16A34A"
                  />
                  <path
                    d="M20 27L25.5 32.5L36 22"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h1 className="font-['Sora'] text-xl font-bold text-gray-900 mb-3">
                Email Address succesfully verified
              </h1>

              {/* Description */}
              <p className="font-['Outfit'] text-gray-500 text-sm leading-relaxed mb-8">
                click on the proceed button below to complete your profile
              </p>

              {/* Proceed Button */}
              <button
                onClick={() => {
                  if (signupData.curatorType === "music_blog") {
                    navigate("/additional_information");
                  } else if (signupData.curatorType === "playlist_curator") {
                    navigate("/playlist-curator-info");
                  } else {
                    navigate("/login");
                  }
                }}
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-['Sora'] font-semibold text-sm rounded-full transition-all duration-300"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
