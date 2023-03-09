import "./Header.css";
import React from "react";
import { useState } from "react";
// import Header from './Header'
import logo from "./logo.jpg";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    winth: "70px",
    height: "70px",
  },
  gnb: {
    display: "flex",
  },
};
function Header() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="globel-header">
          <nav style={styles.nav}>
            <h1 className="logo">
              <a href="">
                <img src={logo} alt="" style={styles.image} />
              </a>
            </h1>
            <ul className="gnb" style={styles.gnb}>
              <li className="gnb-list">
                <a href="">menu1</a>
              </li>
              <li className="gnb-list">
                <a href="">menu2</a>
              </li>
              <li className="gnb-list">
                <a href="">menu3</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
