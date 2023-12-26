import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { FaCamera } from "react-icons/fa";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link to="/">HF</Link>
        <a className={style.menu} href="#" onClick={toggleMenu}>
          <FaCamera />
        </a>
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </div>
  );
};

export default Navbar;
