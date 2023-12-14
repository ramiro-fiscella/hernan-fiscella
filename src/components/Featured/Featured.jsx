import React from "react";
import style from "./Featured.module.css";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const Featured = () => {
  return (
    <div className={style.featuredContainer}>
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
      <FeaturedCard />
    </div>
  );
};

export default Featured;
