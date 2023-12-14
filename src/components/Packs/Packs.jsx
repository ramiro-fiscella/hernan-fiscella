import React from "react";
import style from "./Packs.module.css";
import PacksCard from "../PacksCard/PacksCard";

const Packs = () => {
  return (
    <div className={style.packs}>
      <h1>PACKS</h1>
      <div className={style.packsCardContainer}>
        <PacksCard />
        <PacksCard />
        <PacksCard />
        <PacksCard />
      </div>

      <button className={style.viewBtn}>View All</button>
    </div>
  );
};

export default Packs;
