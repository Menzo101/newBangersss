import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoimage from "../../assets/newbanger.png";
import avatarImage from "../../assets/musicianandcurator.png";

const ContentMoreInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    blogAge: "",
    monthlyViews: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Platform info:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/social-media");
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
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-6"
            >
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

            {/* Step Indicator */}
            <p className="font-['Montserrat'] text-xs text-gray-500 mb-2">
              Step 3 of 3
            </p>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="font-['Montserrat'] text-2xl font-bold text-gray-900">
                Tell us more about you and your platform
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Blog Age */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  How old is your blog or website?
                </label>
                <div className="relative">
                  <select
                    name="blogAge"
                    value={formData.blogAge}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select range
                    </option>
                    <option value="less_than_6_months">Less than 6 months</option>
                    <option value="6_to_12_months">6 - 12 months</option>
                    <option value="1_to_2_years">1 - 2 years</option>
                    <option value="2_to_5_years">2 - 5 years</option>
                    <option value="5_plus_years">5+ years</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Monthly Views */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  What is your average monthly views?
                </label>
                <div className="relative">
                  <select
                    name="monthlyViews"
                    value={formData.monthlyViews}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled className="text-gray-400">
                      Select range
                    </option>
                    <option value="0-500">0 - 500 views</option>
                    <option value="500-1000">500 - 1,000 views</option>
                    <option value="1000-5000">1,000 - 5,000 views</option>
                    <option value="5000-10000">5,000 - 10,000 views</option>
                    <option value="10000-50000">10,000 - 50,000 views</option>
                    <option value="50000-100000">50,000 - 100,000 views</option>
                    <option value="100000+">100,000+ views</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                disabled={isLoading}
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
                  "Next"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMoreInfo;
