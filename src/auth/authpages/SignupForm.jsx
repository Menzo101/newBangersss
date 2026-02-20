import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../context/SignUpContext.jsx";
import logoimage from "../../assets/newbanger.png";
import avatarImage from "../../assets/musicianandcurator.png";

const SignupForm = () => {
  const { signupData } = useContext(SignUpContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getAccountTypeLabel = () => {
    if (signupData.accountType === "musician") return "Musician";
    if (signupData.curatorType === "content_creator") return "Content Creator";
    if (signupData.curatorType === "music_blog") return "Blogger";
    if (signupData.curatorType === "playlist_curator")
      return "Playlist Curator";
    return "User";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) return;

    setIsLoading(true);

    try {
      console.log("Signup data:", {
        ...formData,
        accountType: signupData.accountType,
        curatorType: signupData.curatorType,
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/email");
    } catch (error) {
      console.error("Signup error:", error);
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
        {/* Form Container */}
        <div className="flex-1 px-6 sm:px-12 lg:px-16 py-8">
          <div className="w-full max-w-md mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img src={logoimage} alt="NewBanger" className="h-10" />
            </div>

            {/* Heading */}
            <div className="mb-6">
              <h1 className="font-['Montserrat'] text-2xl font-bold text-gray-900 mb-1">
                Create a Free Account
              </h1>
              <p className="font-['Montserrat'] text-gray-500 text-sm">
                For {getAccountTypeLabel()}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Confirm Password:
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full px-3 py-2.5 pr-10 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                />
                <label
                  htmlFor="terms"
                  className="font-['Montserrat'] text-xs text-gray-500"
                >
                  By clicking this you agree with the{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                  >
                    terms & condition
                  </button>{" "}
                  of Newbanger
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!agreeTerms || isLoading}
                className="w-full py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-['Montserrat'] font-semibold text-sm rounded-full transition-all duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
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
                    Creating...
                  </>
                ) : (
                  "Create an Account"
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <p className="text-center mt-6 font-['Montserrat'] text-sm text-gray-500">
              Already have an account?{" "}
              <button className="text-primary hover:underline font-medium">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
