import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import footerImage from "../assets/newbangerfooterlogo.png";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Curator/Pro", href: "#curator" },
  ];

  const resourceLinks = [
    { label: "F.A.Q", href: "#faq" },
    { label: "Blog", href: "#blog" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookies Settings", href: "#cookies" },
    { label: "Musicians T&C", href: "#musicians-tc" },
    { label: "Curator T&C", href: "#curator-tc" },
  ];

  const socialLinks = [
    { icon: IoLogoInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
              <img
                src={footerImage}
                alt="NewBanger Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
            <p className="font-['Montserrat'] font-light text-sm md:text-base text-gray-400 leading-relaxed max-w-xs tracking-wide">
              Newbanger streamlines music promotion reducing costs and enabling artists to reach new fans through direct connections.
            </p>

            {/* Contact Info - Desktop */}
            <div className="hidden sm:flex flex-col space-y-4">
              <div className="flex items-center gap-3 text-sm md:text-base">
                <IoIosMail className="text-danger text-xl md:text-2xl flex-shrink-0" />
                <span className="font-['Montserrat'] font-light text-gray-300 tracking-wide">Support@newbanger.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <MdOutlineWifiCalling3 className="text-danger text-xl md:text-2xl flex-shrink-0" />
                <span className="font-['Montserrat'] font-light text-gray-300 tracking-wide">+234-806 969 8488</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-base md:text-lg mb-5 md:mb-7 text-white tracking-wide">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Montserrat'] font-light text-sm md:text-base text-gray-400 hover:text-danger transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-base md:text-lg mb-5 md:mb-7 text-white tracking-wide">
              Resources
            </h3>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Montserrat'] font-light text-sm md:text-base text-gray-400 hover:text-danger transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-['Montserrat'] font-bold text-base md:text-lg mb-5 md:mb-7 text-white tracking-wide">
              Legal
            </h3>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-['Montserrat'] font-light text-sm md:text-base text-gray-400 hover:text-danger transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info - Mobile */}
        <div className="flex sm:hidden flex-col space-y-4 mb-10 pb-10 border-b-2 border-gray-800">
          <div className="flex items-center gap-3 text-base">
            <IoIosMail className="text-danger text-xl flex-shrink-0" />
            <span className="font-['Montserrat'] font-light text-gray-300 tracking-wide">Support@newbanger.com</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <MdOutlineWifiCalling3 className="text-danger text-xl flex-shrink-0" />
            <span className="font-['Montserrat'] font-light text-gray-300 tracking-wide">+234-806 969 8488</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 md:gap-6 mb-8 pb-8 border-b border-gray-800">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-danger hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-danger/50"
              >
                <Icon className="text-lg md:text-xl" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="font-['Montserrat'] font-light text-center text-sm md:text-base text-gray-400 tracking-wide">
          &copy; 2026 All Rights Reserved NewBanger Digital Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
