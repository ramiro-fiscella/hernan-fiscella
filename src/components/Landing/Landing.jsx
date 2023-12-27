import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  const handleWorkClick = (e) => {
    e.preventDefault();
    const work = document.getElementById("work-sections");
    work.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={style.landing}>
      <div className={style.left}>
        <h1>
          HERNAN <br /> FISCELLA
        </h1>
        <p>Photographer and Videographer</p>

        <div className={style.social}>
          <a target="_blank" href="https://www.instagram.com/">
            Ig
          </a>
          <a target="_blank" href="https://www.facebook.com/">
            Fb
          </a>

          <a onClick={handleWorkClick} className={style.downBtn}>
            Visit Website
          </a>
        </div>
      </div>
      <div className={style.right}></div>
    </div>
  );
};

export default Landing;
