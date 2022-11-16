import React from "react";
import "../styles/Places.scss";
import Inspiration from "./Inspiration";
import { inspirations } from "./InspirationData";
import location from "../images/location.png";

const Places = () => {
  return (
    <>
      <div className="filter">
        <ul className="filter-list">
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>off-grid</li>
          <li>Farm</li>
        </ul>

        <div className="filter-location">
          <p>Location</p>
          <img src={location} alt="" />
        </div>
      </div>
      <section className="places">
        {inspirations.map((insp) => {
          return <Inspiration inspiration={insp} key={insp.id} />;
        })}
      </section>
    </>
  );
};

export default Places;
