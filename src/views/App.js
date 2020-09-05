import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "./template/Components/Components.js";
import LandingPage from "./real/LandingPage/LandingPage.js";
import ProfilePage from "./template/ProfilePage/ProfilePage.js";
import LoginPage from "./template/LoginPage/LoginPage.js";

let hist = createBrowserHistory();

export default function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  )
}