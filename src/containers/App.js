import React, { Component } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Header from "../components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Profile />
      </div>
    );
  }
}

export default App;
