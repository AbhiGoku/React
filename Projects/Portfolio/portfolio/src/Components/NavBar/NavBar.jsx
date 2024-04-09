import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import styles from "./NavBar.module.css";

import { getImageUrl } from "../../utils";

function NavBar() {
  const [index, setIndex] = useState(0);
  const { text } = (
    <Typewriter
      words={["Welcome", "ಸ್ವಾಗತ", "नमस्ते"]}
      loop={100}
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          <span>
            <Typewriter
              words={["Welcome", "ಸ್ವಾಗತ", "नमस्ते"]}
              loop={100}
              cursorStyle="?"
              typeSpeed={200}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </a>
        <div className={styles.menu}>
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            className={`${styles.menuBtn} ${styles.menuImg}`}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
