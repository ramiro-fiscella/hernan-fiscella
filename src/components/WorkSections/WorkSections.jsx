import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./WorkSections.module.css";

const WorkSections = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/work/${category}`);
  };

  return (
    <div className={style.workContainer}>
      <div className={style.workText}>
        <h1>WORK STYLES</h1>
        <p>
          From capturing the raw emotion of photojournalism to the intricate
          composition of still life, their lens unveils diverse worlds. <br />
          Portraits freeze moments of human connection, while landscapes unveil
          the grandeur of nature. <br />
          Fashion photography merges creativity and design, while abstract
          imagery sparks imagination. <br />
          <br />
          Through their lens, photographers explore, evoke, and immortalize
          moments in time, weaving a tapestry of visual narratives.
        </p>
        {/* <p>Doing fun stuff is great. But doing something great is more fun.</p> */}
      </div>

      <div className={style.stylesContainer}>
        <div
          className={style.wedding}
          onClick={() => handleCategoryClick("wedding")}
        >
          <div className={style.weddingImg}>
            <div className={style.weddingText}>
              <h2>WEDDING</h2>
              <p>Wedding - Birthday - Celebration </p>
            </div>
          </div>
        </div>

        <div
          className={style.business}
          onClick={() => handleCategoryClick("business")}
        >
          <div className={style.businessImg}>
            <div className={style.businessText}>
              <h2>BUSINESS</h2>
              <p>Fashion - Product - Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSections;
