import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";

export default class App extends Component {
  // activeState()
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              pageSize={5}
              key="general"
              country="in"
              category="General"
              title="Khabarnama-Home | Latest News Headlines"
            />
          </Route>
          <Route exact path="/business">
            <News
              pageSize={5}
              key="business"
              country="in"
              category="Business"
              title="Latest Business News | Khabarnama"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              pageSize={5}
              key="entertainment"
              country="in"
              category="Entertainment"
              title="Latest Entertainment News | Khabarnama"
            />
          </Route>
          <Route exact path="/general">
            <News
              pageSize={5}
              key="general"
              country="in"
              category="General"
              title="Latest News Headlines | Khabarnama"
            />
          </Route>
          <Route exact path="/health">
            <News
              pageSize={5}
              key="health"
              country="in"
              category="Health"
              title="Latest Health News | Khabarnama"
            />
          </Route>
          <Route exact path="/science">
            <News
              pageSize={5}
              key="science"
              country="in"
              category="Science"
              title="Latest Science News | Khabarnama"
            />
          </Route>
          <Route exact path="/sports">
            <News
              pageSize={5}
              key="sports"
              country="in"
              category="Sports"
              title="Latest Sports News | Khabarnama"
            />
          </Route>
          <Route exact path="/technology">
            <News
              pageSize={5}
              key="technology"
              country="in"
              category="Technology"
              title="Latest Technology News | Khabarnama"
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}
