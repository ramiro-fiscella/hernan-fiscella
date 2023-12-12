import React from "react";
import style from "./Featured.module.css";
import Card from "../Card/Card";

const Featured = () => {
  return (
    <div className={style.featured}>
      <h1>FEATURED WORK</h1>
      <div className={style.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <button className={style.viewBtn}>View All</button>
    </div>
  );
};

export default Featured;
