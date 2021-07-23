import React, { Component } from "react";

import "../styles/App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import teamContact from "./teamContact";
import teamManagements from "./teamManagements";
import Storybook from "./storybook";
import Layoutheader from "./common/layout-header";
import Layoutfooter from "./common/layout-footer";

import content from "./Mock";
class App extends Component {
  render() {
    return (
      <Router>
        <Layoutheader />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/teamManagements" component={teamManagements} />
          <Route path="/teamContact" component={teamContact} />
          <Route path="/storybook" component={Storybook} />
        </Switch>

        <Layoutfooter />
      </Router>
    );
  }
}
App.defaultProps = { Content: content };
export default App;
