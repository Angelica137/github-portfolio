import React from "react";
import "./Header.css";

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} classNmae="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code>and save to reload.
    </p>
  </header>
);

export default Header;
