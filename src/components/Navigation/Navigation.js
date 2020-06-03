import React from "react";

import styles from "./Navigation.module.scss";

import About from "../About/About";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="navi-toggle"
      />

      <label for="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      </label>

      <div className={styles.navigation__background}>&nbsp;</div>
      <div className={styles.navigation__nav}>
        <About />
      </div>

      {/* 
      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>01</span>About Natous
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>01</span>About Natous
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>01</span>About Natous
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Navigation;
