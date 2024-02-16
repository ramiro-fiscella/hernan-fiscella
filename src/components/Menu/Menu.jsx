import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMenuClick = (e) => {
    // Aquí puedes manejar las acciones al hacer clic en cada elemento del menú
    // Por ejemplo, podrías navegar a diferentes secciones de tu aplicación.
  };
  const handleContactClick = (e) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isVisible ? setIsVisible(false) : setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${style.overlay} ${isVisible ? style.visible : ""}`}
      onClick={onClose}
    >
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
        </div>
      </div>
      <div className={style.menu}>
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/wedding" onClick={handleMenuClick}>
          Wedding
        </Link>
        <Link to="/business" onClick={handleMenuClick}>
          Business
        </Link>
        <a href="#contact" onClick={handleContactClick}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
