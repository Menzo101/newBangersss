import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../context/SignUpContext.jsx";
import SelectionCard from "../authcomponents/SelectionCard.jsx";
import logoimage from "../../assets/newbanger.png";
import { Link } from "react-router-dom";

const SelectAccountType = () => {
  const [selectedType, setSelectedType] = useState("");
  const { setSignupData } = useContext(SignUpContext);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType === "musician") {
      setSignupData((prev) => ({ ...prev, accountType: "musician" }));
      navigate("/signupform");
    } else if (selectedType === "curator") {
      setSignupData((prev) => ({ ...prev, accountType: "curator" }));
      navigate("/signup/curator/type");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="w-full px-6 sm:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <img src={logoimage} alt="NewBanger" className="h-8 md:h-9" />
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-['Montserrat'] text-gray-500 text-sm">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="font-['Montserrat'] font-semibold text-primary hover:text-primary/80 text-sm transition-colors underline underline-offset-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 shadow-sm">
              <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="font-['Montserrat'] text-gray-600 text-sm">
                Join 6,000 + Musicians and Curators
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h1 className="font-['Montserrat'] text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Select Account Type
            </h1>
            <p className="font-['Montserrat'] text-gray-500 text-base">
              Choose how you want to use our platform
            </p>
          </div>

          {/* Account Type Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <SelectionCard
              title="As a Musician"
              description="Share your music , connect with curators and reach a wider audience"
              icon="musician"
              selected={selectedType === "musician"}
              onClick={() => setSelectedType("musician")}
            />

            <SelectionCard
              title="As a Curator"
              description="Share your music , connect with curators and reach a wider audience"
              icon="curator"
              selected={selectedType === "curator"}
              onClick={() => setSelectedType("curator")}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 rounded-xl font-['Montserrat'] font-semibold text-sm border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300"
            >
              Go Back
            </button>
            <button
              className={`px-8 py-3 rounded-xl font-['Montserrat'] font-semibold text-sm transition-all duration-300 ${
                selectedType
                  ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!selectedType}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectAccountType;
