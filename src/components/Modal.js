import React from "react";
import cross from "../images/x.svg";
import meta from "../images/meta-mask.svg";
import wallet from "../images/walletConnect.svg";
import arrow from "../images/arrow-right.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div>
        <h1>Connect Wallet</h1>
        <img src={cross} alt="" />
      </div>
      <div>
        <p>choose your preferred Wallet</p>
        <div>
          <img src={meta} alt="" />
          <p>Metamask</p>
          <img src={arrow} alt="" />
        </div>
        <div>
          <img src={wallet} alt="" />
          <p>WalletConnect</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
