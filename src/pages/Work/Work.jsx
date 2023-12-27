import React from "react";
import { useParams } from "react-router-dom";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";

import style from "./Work.module.css";

const Work = () => {
  const { category } = useParams();

  let content = null;
  if (category === "wedding") {
    content = (
      <div className={style.workContainer}>
        <div className={style.landing}>
          <div className={style.left}>
            <h1>
              WEDDING <br /> WORKS
            </h1>
            <p>by Hernan Fiscella</p>

            <div className={style.social}>
              <button className={style.contactBtn}>View work</button>
            </div>
          </div>
          <div className={style.rightWedding}></div>
        </div>
        <Featured />
      </div>
    );
  } else if (category === "business") {
    content = (
      <div className={style.workContainer}>
        <div className={style.landing}>
          <div className={style.left}>
            <h1>
              BUSINESS <br /> WORKS
            </h1>
            <p>by Hernan Fiscella</p>

            <div className={style.social}>
              <button className={style.contactBtn}>View work</button>
            </div>
          </div>
          <div className={style.rightBusiness}></div>
        </div>
        <Featured />
      </div>
    );
  }

  return (
    <div>
      {content}
      <Footer />
    </div>
  );
};

export default Work;
