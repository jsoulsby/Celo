import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

import { AllHerds } from "./AllHerds"
import { Herd } from "./Herd/Herd"
import { TempPage } from "./TempPage"
import { BREAKPOINT } from "../constants";
import { Center } from "./styled";
import { DataProvider } from "../context/data";
import { useData } from "../hooks/useData";
import { useWidth } from "../hooks/useWidth";
import { TopBar } from "./TopBar"
import { BottomAppBar } from "./BottomAppBar"

const Container = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    width: 100vw;
  }
  margin: 0 auto;
  overflow-y: auto;
`;

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <DataProvider>
          <TopBar />
          <Switch>
            <Route exact path="/Herds" component={AllHerds}></Route>
            <Route exact path="/Herd/:herdID" component={Herd}></Route>
            <Route path="/Schedule" component={TempPage}></Route>
            <Route path="/Pasture" component={TempPage}></Route>
            <Route path="/Map" component={TempPage}></Route>
            <Route path="/Alerts" component={TempPage}></Route>
            <Route exact path="/" component={AllHerds}></Route>
          </Switch>
          <BottomAppBar history={history} />
        </DataProvider>
      </Container >
    </BrowserRouter>
  );
};


/*
<div className="App">
  <header className="App-header">
    <p>
      Edit <code>src/App.js</code> and save to reload.
</p>
  </header>
  <p><b>this.state.response</b></p>
  <form onSubmit={(e) => handleSubmit(e.target.value)}>
    <p>
      <strong>Post to Server:</strong>
    </p>
    <input
      type="text"
      value={this.state.post}
      onChange={e => this.setState({ post: e.target.value })}
    />
    <button type="submit">Submit</button>
  </form>
  <p>{this.state.responseToPost}</p>
</div>
*/
