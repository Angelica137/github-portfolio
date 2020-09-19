import React from "react";
import logo from "../../logo.svg";
import "./Header.css";

const Header = () => (
  <header className="App-Header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1>My Github portfolio</h1>
  </header>
);

export default Header;
