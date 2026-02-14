import React, { useState } from "react";
import { Link } from "react-router-dom";
import newBangerImage from "../assets/newbanger.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Promote Your Music", href: "#promote" },
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Blogs", href: "#blogs" },
    { label: "Curators/Pro", href: "#curators" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src={newBangerImage}
              alt="NewBanger Logo"
              className="h-7 sm:h-8 md:h-9 lg:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-['Montserrat'] px-3 xl:px-4 py-2 text-sm text-gray-700 hover:text-primary font-medium transition-colors duration-300 hover:bg-primary/5 rounded-xl tracking-wide whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link
              to="/login"
              className="font-['Montserrat'] px-5 xl:px-6 py-2.5 text-sm text-gray-700 font-semibold hover:bg-gray-100 rounded-xl transition-all duration-300 tracking-wide"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="font-['Montserrat'] px-4 xl:px-5 py-2.5 text-sm bg-primary text-white font-semibold tracking-wider uppercase rounded-xl hover:bg-primary/90 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile: Sign Up + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <Link
              to="/signup"
              className="font-['Montserrat'] px-3 sm:px-4 py-2 text-xs sm:text-sm bg-primary text-white font-semibold tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Sign Up
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-1 border-t-2 border-gray-100">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-['Montserrat'] px-4 py-3 text-sm sm:text-base text-gray-700 hover:text-primary hover:bg-primary/5 font-medium rounded-xl transition-all duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 px-4 border-t-2 border-gray-100 mt-3">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="font-['Montserrat'] text-center px-4 py-3 text-sm sm:text-base text-gray-700 font-semibold border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="font-['Montserrat'] text-center px-4 py-3 text-sm sm:text-base bg-primary text-white font-semibold tracking-wider uppercase rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
