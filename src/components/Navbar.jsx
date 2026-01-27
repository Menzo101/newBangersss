import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import newBangerImage from "../assets/newbanger.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="header-section">
        <header>
          <div className="logo">
            <img src={newBangerImage} alt="" />
          </div>
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link href="" className="links">
                  Promote Your Music
                </Link>
              </li>
              <li>
                <Link href="" className="links">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="links">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="" className="links">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="" className="links">
                  Curators/Pro
                </Link>
              </li>
            </ul>

            <div className="hamburger-element">
              <Link className="login-btn">Sign Up</Link>
              <Link className="signup-btn">Login</Link>
            </div>
          </nav>
          <div className="signup-element">
            <Link className="login-btn">Login</Link>
            <Link className="signup-btn">Sign Up</Link>
          </div>
          <Link id="ham-btn">Sign Up</Link>
          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
