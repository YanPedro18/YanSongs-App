import { House, List, MonitorPlay, Sparkle } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={isOpen ? "header" : "menu"}>
        <Link to="/">
          <span>YanSongs</span>
        </Link>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <List size={32} />
        </button>
      </header>

      {isOpen && (
        <nav className={styles.nav}>
          <Link to="/">
            <House size={32} />
            Home
          </Link>
          <Link to="/Search">
            <MonitorPlay size={32} />
            Assistir
          </Link>
          <Link to="/Favoritos">
            <Sparkle size={32} />
            Favoritos
          </Link>
          <a className="teste">Olá, Yan</a>
          <img src="./images/teste.jpeg" alt="" />
        </nav>
      )}
    </>
  );
}

export default Header;
