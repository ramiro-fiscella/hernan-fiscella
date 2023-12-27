import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from "./Featured.module.css";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import weddingData from "../FeaturedCard/weddingData.json";
import businessData from "../FeaturedCard/businessData.json";

const Featured = () => {
  const { category } = useParams();
  let data;

  if (category === "wedding") {
    data = weddingData;
  } else if (category === "business") {
    data = businessData;
  }

  return (
    <div className={style.featuredContainer}>
      {data.map((item) => (
        <FeaturedCard
          key={item.id}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ))}
      <Link to="/" className={style.backBtn}>
        Go back
      </Link>
    </div>
  );
};

export default Featured;
