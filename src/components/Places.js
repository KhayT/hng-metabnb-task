import React from "react";
import "../styles/Places.scss";
import Inspiration from "./Inspiration";
import { inspirations } from "./InspirationData";

const Places = () => {
  return (
    <>
      <section className="places">
        {inspirations.map((insp) => {
          return <Inspiration inspiration={insp} key={insp.id} />;
        })}
      </section>
    </>
  );
};

export default Places;
