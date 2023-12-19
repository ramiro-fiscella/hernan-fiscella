import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerTop}>
          <div>
            <h1>HERNAN FISCELLA</h1>
            <p>Photographer & Videographer</p>
          </div>
          <div className={style.footerImg}></div>
        </div>

        <div className={style.footerMiddle}>
          <div className={style.middleContainer}>
            <div className={style.middleLinks}>
              <h3>Adress</h3>
              <a href="#">
                Street 564 - 24 <br /> CP7300 <br /> Azul, Buenos Aires,
                Argentina
              </a>
            </div>
          </div>

          <div className={style.middleContainer}>
            <div className={style.middleLinks}>
              <h3>Links</h3>
              <a href="#">Home</a>
              <a href="#">Work</a>
              <a href="#">About</a>
            </div>
          </div>

          <div className={style.middleContainer}>
            <div className={style.middleLinks}>
              <h3>Socials</h3>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

          <div className={style.middleContainer}>
            <div className={style.middleLinks}>
              <h3>Contact</h3>
              <a href="#">hernanfiscella@photographer.com</a>
            </div>
          </div>
        </div>

        <div className={style.footerBottom}>
          <p>© 2023 HERNAN FISCELLA</p>

          <div className={style.developer}>
            <p>Designed & Developed by</p>
            <a target="_blank" href="https://ramirof.vercel.app/">
              Ramiro Fiscella
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
