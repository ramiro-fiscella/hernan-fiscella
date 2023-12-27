import React from "react";
import { useParams } from "react-router-dom";
import style from "./Work.module.css";

const Work = () => {
  const { category } = useParams();

  let content = null;
  if (category === "wedding") {
    content = (
      <div className={style.landing}>
        <div className={style.left}>
          <h1>
            WEDDING <br /> WORKS
          </h1>
          <p>by Hernan Fiscella</p>

          <div className={style.social}>
            <a target="_blank" href="https://www.instagram.com/">
              Ig
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              Fb
            </a>
            <button className={style.downBtn}>View work</button>
          </div>
        </div>
        <div className={style.right}></div>

        <section></section>
      </div>
    );
  } else if (category === "business") {
    content = (
      <div>
        <h2>Contenido de Negocios</h2>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Work;
