import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import "./footer.css";
import footerImage from "../assets/footeredit.png";
const Footer = () => {
  return (
    <>
      <section className="footerSection">
        <div className="footerContainer">
          <div className="footerContentOne">
            <div className="footerContentOneLogo">
              <img src={footerImage} alt="" />
            </div>
            <p className="footerContentOneParagraph">
              Newbanger streamlines music promotion reducing <br />
              costs and enabling artists to reach new fans through <br />
              direct.
            </p>
            <div className="footerContentOneIcons">
              <div className="footerContentOneIconOne">
                <IoIosMail
                  style={{
                    display: "block",
                    width: "fitContent",
                    marginRight: "5px",
                    color: "rgba(255, 97, 77, 1)",
                    fontSize: "19px",
                  }}
                />
                <p>Support@newbanger.com</p>
              </div>
              <div className="footerContentOneIconTwo">
                <MdOutlineWifiCalling3
                  style={{
                    display: "block",
                    width: "fitContent",
                    marginRight: "5px",
                    color: "rgba(255, 97, 77, 1)",
                    fontSize: "19px",
                  }}
                />
                <p>+234-806 969 8488</p>
              </div>
            </div>
          </div>
          <div className="footerContentTwo">
            <h2>Company</h2>
            <div className="footerContentTwoContainer">
              <ul className="footerContentTwoList">
                <li>
                  {" "}
                  <Link className="ink">About Us</Link>{" "}
                </li>
                <li>
                  <Link className="ink">Contact Us</Link>
                </li>
                <li>
                  <Link className="ink">How it Works</Link>
                </li>
                <li>
                  <Link className="ink">Curator/Pro</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContentThree">
            <h2>Resources</h2>
            <div className="footerContentThreeList">
              <ul>
                <li>
                  <Link className="ink">F.A.Q</Link>
                </li>
                <li>
                  <Link className="ink">Blog</Link>
                </li>
                <li>
                  <Link className="ink">Pricing</Link>
                </li>
                <li>
                  <Link className="ink">Features</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContentFour">
            <h2>Legal</h2>
            <div className="footerContentFourList">
              <ul>
                <li>
                  <Link className="ink">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="ink">Cookies Settings</Link>
                </li>
                <li>
                  <Link className="ink">Musicians T&C</Link>
                </li>
                <li>
                  <Link className="ink">Curator T&C</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* new */}
        </div>
        <div className="alleyesonme">
          <div className="alleyeonmeOne">
            <IoIosMail
              style={{
                display: "block",
                width: "fitContent",
                marginRight: "5px",
                color: "rgba(255, 97, 77, 1)",
                fontSize: "19px",
              }}
            />
            <p>Support@newbanger.com</p>
          </div>
          <div className="alleyeonmeTwo">
            <MdOutlineWifiCalling3
              style={{
                display: "block",
                width: "fitContent",
                marginRight: "5px",
                color: "rgba(255, 97, 77, 1)",
                fontSize: "19px",
              }}
            />
            <p>+234-806 969 8488</p>
          </div>
        </div>
        <div className="footerbottomicon">
          <div className="footerbottomone">
            <Link>
              <IoLogoInstagram className="ftIcon" />
            </Link>
          </div>
          <div className="footerbottomone">
            <Link className="ftIcon">
              <FaXTwitter />
            </Link>
          </div>
          <div className="footerbottomone">
            <Link>
              <FaLinkedin className="ftIcon" />
            </Link>
          </div>
          <div className="footerbottomone">
            <Link>
              <FaFacebookF className="ftIcon" />
            </Link>
          </div>
        </div>
        <div className="footerline"></div>
        <p className="ftSign">
          &copy; 2026 All Right Reserved NewBanger Digital Limited{" "}
        </p>
      </section>
    </>
  );
};

export default Footer;
