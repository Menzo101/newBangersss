import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimage from "../../assets/newbanger.png";
import avatarImage from "../../assets/musicianandcurator.png";

const SocialMediaPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    instagram: "",
    twitter: "",
    facebook: "",
    linkedin: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hasAtLeastOne =
    formData.instagram ||
    formData.twitter ||
    formData.facebook ||
    formData.linkedin;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasAtLeastOne) return;
    setIsLoading(true);

    try {
      console.log("Social media:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
          <h2 className="font-['Montserrat'] font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-wide uppercase mb-4">
            Where Creators Build
            <br />
            <span className="text-primary">Momentum</span> & Grow!
          </h2>
          <p className="font-['Montserrat'] text-gray-300 text-base max-w-md mb-8">
            Turn your platform into income by promoting music that deserves
            attention—and get paid for your influence.
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
            <span className="font-['Montserrat'] text-white/80 text-sm">
              Trusted by over{" "}
              <span className="font-semibold text-white">100+</span> bloggers
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col bg-white overflow-y-auto">
        <div className="flex-1 px-6 sm:px-12 lg:px-16 py-8">
          <div className="w-full max-w-md mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <img src={logoimage} alt="NewBanger" className="h-10" />
            </div>

            {/* Back Arrow */}
            <button type="button" onClick={() => navigate(-1)} className="mb-6">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="font-['Montserrat'] text-2xl font-bold text-gray-900 mb-1">
                Connect Your Social Media
              </h1>
              <p className="font-['Montserrat'] text-gray-500 text-sm">
                You're required to connect at least one account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Instagram */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Instagram:
                </label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Enter your profile link here"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Twitter */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Twitter:
                </label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="Enter your profile link here"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Facebook */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Facebook:
                </label>
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Enter your profile link here"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  LinkedIn:
                </label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Enter your profile link here"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Save Button */}
              <button
                type="submit"
                disabled={isLoading || !hasAtLeastOne}
                className="w-full py-3 bg-[#FF6B5B] hover:bg-[#FF5A48] disabled:bg-[#FF6B5B]/50 text-white font-['Montserrat'] font-semibold text-sm rounded-full transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Saving...
                  </>
                ) : (
                  "Save"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;
