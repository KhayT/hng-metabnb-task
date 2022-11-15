import React from "react";
import heroImg from "../images/heroImage.png";
import "../styles/Home.scss";
import metamask from "../images/Metamask.svg";
import opeansea from "../images/Opensea.svg";
import mbtoken from "../images/MBToken.svg";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h3 className="hero-text_title">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h3>
          <p className="hero-text_subtitle">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="hero-text_form">
            <input type=" " />
            <button>Search</button>
          </form>
        </div>

        <img src={heroImg} alt="hero" className="hero-img" />
      </section>

      <section className="brands">
        <img src={mbtoken} alt="mb token" />
        <img src={metamask} alt="metamask" />
        <img src={opeansea} alt="opensea" />
      </section>

      <section className="inspiration">
        <h4>Inspiration for your next adventure</h4>
        <div className="inspiration-container"></div>
      </section>
    </>
  );
};

export default Home;
