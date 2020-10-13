import React, { Component } from "react";
import Home from "./components/Home/home";
import Header from "./components/shared/header";
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
