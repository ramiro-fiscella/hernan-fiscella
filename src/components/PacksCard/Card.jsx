import React from "react";
import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <h2>Work</h2>
      <div className={style.cardImg}></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsam
        quis non!
      </p>
      <button>View Work</button>
    </div>
  );
};

export default Card;
