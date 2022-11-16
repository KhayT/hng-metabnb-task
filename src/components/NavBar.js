import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import Modal from "./Modal";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  const connectWallteHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place-to-stay">Place to stay</Link>
          </li>
          <li>
            <Link to="/">NFTs</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
        </ul>
        <button onClick={connectWallteHandler} className="nav-btn">
          Connect Wallet
        </button>
      </nav>

      {openModal ? <Modal closeModal={closeModalHandler} /> : ""}
    </>
  );
};

export default NavBar;
