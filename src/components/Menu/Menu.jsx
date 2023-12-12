import React from "react";
import style from "./Menu.module.css";

const Menu = ({ onClose }) => {
  const handleMenuClick = (e) => {
    // Aquí puedes manejar las acciones al hacer clic en cada elemento del menú
    // Por ejemplo, podrías navegar a diferentes secciones de tu aplicación.
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.menu}>
        <a href="#" onClick={handleMenuClick}>
          Home
        </a>
        <a href="#" onClick={handleMenuClick}>
          Work
        </a>
        <a href="#" onClick={handleMenuClick}>
          About
        </a>
        <a href="#" onClick={handleMenuClick}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
