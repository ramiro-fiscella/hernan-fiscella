import React, { useRef, useState } from "react";
import style from "./FeaturedCard.module.css";

const FeaturedCard = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const img = card.querySelector(`.${style.featuredCardImg}`);

    const xAxis = (window.innerWidth / 2 - e.pageX) / 50; // Controla el movimiento horizontal
    const yAxis = (window.innerHeight / 2 - e.pageY) / 50; // Controla el movimiento vertical
    img.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const img = card.querySelector(`.${style.featuredCardImg}`);

    img.style.transition = "transform 0.5s ease-in-out";
    img.style.transform = "translate(0, 0)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    const img = card.querySelector(`.${style.featuredCardImg}`);

    setIsHovered(true);
  };

  return (
    <div
      className={style.featuredCard}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className={style.featuredCardImg}></div>
      <div className={style.featuredCardText}>
        <h2>Featured Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod
          perferendis incidunt ducimus molestias dolor cum aliquam facere. Est,
          saepe?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          voluptatum?
        </p>
        <button className={style.workBtn}>View Work</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
