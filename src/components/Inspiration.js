import React from "react";
import "../styles/Inspiration.scss";
import heart from "../images/heart.svg";
import star from "../images/star.svg";

const Inspiration = (props) => {
  return (
    <div className="inspiration">
      <img
        src={props.inspiration.img}
        className="inspiration-img"
        alt="inspiration"
      />

      <img src={heart} alt="" className="heart" />

      <div className="inspiration-texts">
        <div className="inspiration-info">
          <p>Desert king</p>
          <p>1MBT per night</p>
        </div>

        <div className="inspiration-info">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className="inspiration-star_rating">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
