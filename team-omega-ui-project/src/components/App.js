import React, { Component } from 'react';

import '../styles/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from './dashboard'
import teamContact from './teamContact'
import teamManagements from './teamManagements'
import Layoutheader from './common/layout-header';

class App extends Component {
  render() {
    return (
      <Router>
      <Layoutheader/>
  <Switch>
      <Route path="/dashboard"  component={Dashboard} />
      <Route path="/teamManagements"  component={teamManagements} />
      <Route path="/teamContact"  component={teamContact} />
      {/* <Route path="/"  component={storyBook} /> */}
    </Switch>
</Router>
    );
  }
}

export default App;
