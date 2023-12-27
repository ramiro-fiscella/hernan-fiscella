import React, { useRef, useEffect, useState } from "react";
import style from "./FeaturedCard.module.css";

const FeaturedCard = ({ date, title, description, image }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleScroll = () => {
      const top = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chequea si el elemento es visible al inicio

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${style.featuredCard} ${isVisible ? style.visible : ""}`}
    >
      <div className={style.featuredCardImg} style={cardStyle}></div>
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
