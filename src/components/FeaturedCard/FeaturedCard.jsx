import React from "react";
import style from "./FeaturedCard.module.css";

const FeaturedCard = () => {
  return (
    <div className={style.featuredCard}>
      <h1>Featured Card</h1>
      <div className={style.featuredCardImg}></div>
    </div>
  );
};

export default FeaturedCard;
