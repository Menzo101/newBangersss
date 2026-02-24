import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import { SiAudiomack, SiApplemusic } from "react-icons/si";
import { BsFillPlayCircleFill } from "react-icons/bs";
import logoimage from "../../assets/newbanger.png";
import avatarImage from "../../assets/musicianandcurator.png";

const allGenres = [
  "Afrobeats",
  "Afrobeat",
  "Afrofusion",
  "Amapiano",
  "Highlife",
  "Afropop",
  "R&B",
  "Hip Hop",
  "Dancehall",
  "Reggae",
  "Pop",
  "Jazz",
  "Gospel",
  "Rock",
  "Electronic",
  "Latin",
  "Country",
  "Classical",
];

const initialVisibleCount = 3;

const PlayListCuratorAdditionalInfoPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: "",
    country: "",
    spotifyLink: "",
    audiomackLink: "",
    boomplayLink: "",
    appleMusicLink: "",
  });
  const [selectedGenres, setSelectedGenres] = useState([
    "Afrobeats",
    "Afrobeat",
    "Afrofusion",
  ]);
  const [showAllGenres, setShowAllGenres] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Playlist curator info:", { ...formData, selectedGenres });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/login");
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const visibleGenres = showAllGenres
    ? allGenres
    : allGenres.slice(0, initialVisibleCount);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40" />

        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <h2 className="font-['Montserrat'] font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-wide uppercase mb-4">
            Get Paid for Promoting
            <br />
            Music to Your <span className="text-primary">Audience!</span>
          </h2>
          <p className="font-['Montserrat'] text-gray-300 text-base max-w-md mb-8">
            Earn money by promoting artists' tracks to your audience and getting
            rewarded for real reach and engagement.
          </p>

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
              <span className="font-semibold text-white">100+</span> Influencers
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

            {/* Heading */}
            <div className="mb-8">
              <h1 className="font-['Montserrat'] text-2xl font-bold text-gray-900 mb-1">
                Additional Info
              </h1>
              <p className="font-['Montserrat'] text-gray-500 text-sm">
                Tell us few more things about you
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Gender */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Gender:
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled className="text-gray-400">
                      Choose
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
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

              {/* Country */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-1.5">
                  Country:
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 font-['Montserrat'] text-sm text-gray-900 focus:outline-none focus:border-primary transition-colors appearance-none bg-white"
                  >
                    <option value="" disabled className="text-gray-400">
                      Choose
                    </option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="NG">Nigeria</option>
                    <option value="GH">Ghana</option>
                    <option value="ZA">South Africa</option>
                    <option value="KE">Kenya</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
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

              {/* Curation Profile Links */}
              <div>
                <p className="font-['Montserrat'] text-xs font-medium text-gray-700 mb-3">
                  Connection your active curation profile to verify your reach
                </p>

                <div className="space-y-3">
                  {/* Spotify */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5">
                    <FaSpotify className="w-5 h-5 flex-shrink-0 text-[#1DB954]" />
                    <input
                      type="url"
                      name="spotifyLink"
                      value={formData.spotifyLink}
                      onChange={handleChange}
                      placeholder="Spotify Profile link"
                      className="flex-1 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                  </div>

                  {/* Audiomack */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5">
                    <SiAudiomack className="w-5 h-5 flex-shrink-0 text-[#FFA500]" />
                    <input
                      type="url"
                      name="audiomackLink"
                      value={formData.audiomackLink}
                      onChange={handleChange}
                      placeholder="Audiomack Profile link"
                      className="flex-1 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                  </div>

                  {/* Boomplay */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5">
                    <BsFillPlayCircleFill className="w-5 h-5 flex-shrink-0 text-[#FF6B00]" />
                    <input
                      type="url"
                      name="boomplayLink"
                      value={formData.boomplayLink}
                      onChange={handleChange}
                      placeholder="Boomplay profile link"
                      className="flex-1 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                  </div>

                  {/* Apple Music */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5">
                    <SiApplemusic className="w-5 h-5 flex-shrink-0 text-[#FC3C44]" />
                    <input
                      type="url"
                      name="appleMusicLink"
                      value={formData.appleMusicLink}
                      onChange={handleChange}
                      placeholder="Apple Music Profile link"
                      className="flex-1 font-['Montserrat'] text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Primary Genres */}
              <div>
                <label className="block font-['Montserrat'] text-xs font-medium text-gray-700 mb-3">
                  Primary Genres
                </label>
                <div className="flex flex-wrap gap-2">
                  {visibleGenres.map((genre) => (
                    <button
                      key={genre}
                      type="button"
                      onClick={() => toggleGenre(genre)}
                      className={`px-4 py-1.5 rounded-full font-['Montserrat'] text-xs font-medium transition-all duration-200 ${
                        selectedGenres.includes(genre)
                          ? "bg-[#FF6B5B] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}

                  {/* Add More / Show Less Toggle */}
                  <button
                    type="button"
                    onClick={() => setShowAllGenres(!showAllGenres)}
                    className="px-4 py-1.5 rounded-full font-['Montserrat'] text-xs font-medium bg-[#FF6B5B]/10 text-[#FF6B5B] hover:bg-[#FF6B5B]/20 transition-all duration-200 flex items-center gap-1"
                  >
                    {showAllGenres ? (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                        Show Less
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                        Add More
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Save Button */}
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

export default PlayListCuratorAdditionalInfoPage;
