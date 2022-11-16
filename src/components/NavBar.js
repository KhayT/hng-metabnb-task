import React from "react";
import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import Modal from "./Modal";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const connectWallteHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openMenuHandler = () => {
    setOpenMenu(true);
  };

  const closeMenuHandler = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" />
        <div
          className={`link-container ${openMenu ? "active" : ""}`}
          id="link-container"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x btn-close"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={closeMenuHandler}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
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
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2  btn-open"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={openMenuHandler}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </nav>

      {openModal ? <Modal closeModal={closeModalHandler} /> : ""}
    </>
  );
};

export default NavBar;
