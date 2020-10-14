import React, { Component } from "react";
import Home from "./components/home/Home";
import Header from "./components/shared/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="h-100">
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
