import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from '../dashboard'
import teamContact from '../teamContact'
import teamManagements from '../teamManagements'

class Layoutheader extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg cust-nav bg-light">
  <img src="Resources/Images/mphasis-logo.png" alt="Mphasis logo" />
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContentLG"
    aria-controls="navbarSupportedContentLG"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
    <i className="fa fa-bars" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContentLG">
    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      <li className="nav-item">
        <a className="nav-link" >
        <Link to="/dashboard">DASHBOARD{" "}</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" >
        <Link to="/teamManagements">TEAM MANAGEMENTS</Link>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link " >
        <Link to="/teamContact">TEAM CONTACTS{" "}</Link>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link active" >
        <Link to="/storyBook">STORY BOOK</Link>  <span className="sr-only">(current)</span>
        </a>
      </li>
    </ul>
  </div>
 </nav>

    );
  }
}

export default Layoutheader;
