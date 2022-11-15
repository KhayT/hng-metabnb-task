import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
// import classes from "../styles/NavBar.scss";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./">Place to stay</Link>
        </li>
        <li>
          <Link to="./">NFTs</Link>
        </li>
        <li>
          <Link to="./">Community</Link>
        </li>
      </ul>
      <button>Connect Wallet</button>
    </nav>
  );
};

export default NavBar;
