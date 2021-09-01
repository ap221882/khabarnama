import "./App.css";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./components/About";

export default class App extends Component {
  // activeState()
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <LoadingBar
          color="#f11946"
          transitionTime="500"
          loaderSpeed="500"
          waitingTime="1000"
          shadow="true"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              a
              pageSize={5}
              key="general"
              country="in"
              category="General"
              title="Khabarnama-Home | Latest News Headlines"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="business"
              country="in"
              category="Business"
              title="Latest Business News | Khabarnama"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="entertainment"
              country="in"
              category="Entertainment"
              title="Latest Entertainment News | Khabarnama"
            />
          </Route>
          <Route exact path="/general">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="general"
              country="in"
              category="General"
              title="Latest News Headlines | Khabarnama"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="health"
              country="in"
              category="Health"
              title="Latest Health News | Khabarnama"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="science"
              country="in"
              category="Science"
              title="Latest Science News | Khabarnama"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
              pageSize={5}
              key="sports"
              country="in"
              category="Sports"
              title="Latest Sports News | Khabarnama"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={this.setProgress}
              apiKey={this.apiKey}
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
