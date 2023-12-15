import React from "react";
import style from "./FeaturedCard.module.css";

const FeaturedCard = () => {
  return (
    <div className={style.featuredCard}>
      <div className={style.featuredCardText}>
        <h2>Featured Card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod
          perferendis incidunt ducimus molestias dolor cum aliquam facere. Est,
          saepe?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          voluptatum?
        </p>
      </div>
      <div className={style.featuredCardImg}></div>
    </div>
  );
};

export default FeaturedCard;
