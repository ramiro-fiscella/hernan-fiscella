import React from "react";
import style from "./FeaturedCard.module.css";

const FeaturedCard = ({ date, title, description }) => {
  return (
    <div className={style.featuredCard}>
      <div className={style.featuredCardImg}></div>
      <div className={style.featuredCardText}>
        <h4 className={style.date}>{date}</h4>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={style.workBtn}>View Work</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
