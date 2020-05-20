import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FrontPage from "Views/FrontPage/FrontPage";
import AboutPage from "Views/AboutPage";

import "./assets/css/index.css";

// css

// tess

const Notfound = () => <h1>Not found</h1>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
