import React, { Component } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import Header from "../components/Header/Header";

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
    );
  }
}

export default App;
