import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import whitelogo from "../images/white-logo.svg";
import facebook from "../images/facebook-logo.svg";
import instagram from "../images/instagram-logo.svg";
import twitter from "../images/twitter-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="brand">
        <img src={whitelogo} alt="logo" height="35px" />
        <div className="socials">
          <li>
            <a href="https://facebook.com">
              <img src={facebook} alt="faceebook" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
        </div>
      </div>

      <ul>
        <h3>Community</h3>
        <li>
          <Link to="">NFTs</Link>
        </li>
        <li>
          <Link to="">Tokens</Link>
        </li>
        <li>
          <Link to="">Landlords</Link>
        </li>
        <li>
          <Link to="">Discord</Link>
        </li>
      </ul>

      <ul>
        <h3>Places</h3>
        <li>
          <Link to="">Castle</Link>
        </li>
        <li>
          <Link to="">Farms</Link>
        </li>
        <li>
          <Link to="">Beach</Link>
        </li>
        <li>
          <Link to="">Learn More</Link>
        </li>
      </ul>

      <ul>
        <h3>About us</h3>
        <li>
          <Link to="">Roadmap</Link>
        </li>
        <li>
          <Link to="">Creators</Link>
        </li>
        <li>
          <Link to="">Career</Link>
        </li>
        <li>
          <Link to="">Contact us</Link>
        </li>
      </ul>

      <p>&copy; {new Date().getFullYear()} Metabnb</p>
    </footer>
  );
};

export default Footer;
