import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";

const App = () => {
  // useState[position, setPosition] = ("sticky");

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero}></Route>

          <Route exact path="/about" component={About}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
