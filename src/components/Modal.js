import React from "react";
import ReactDOM from "react-dom";

import "../styles/Modal.scss";
import cross from "../images/x.svg";
import meta from "../images/meta-mask.svg";
import wallet from "../images/walletConnect.svg";
import arrow from "../images/arrow-right.svg";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="header">
        <h1>Connect Wallet</h1>
        <img src={cross} alt="" onClick={props.closeModal} />
      </div>
      <div className="options">
        <p className="title">choose your preferred Wallet:</p>
        <div className="option">
          <img src={meta} alt="" className="logo" />
          <p>Metamask</p>
          <img src={arrow} alt="" className="arrow" />
        </div>
        <div className="option">
          <img src={wallet} alt="" className="logo" />
          <p>WalletConnect</p>
          <img src={arrow} alt="" className="arrow" />
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
