import React, { Component } from "react";
import content from "../Mock";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Layoutheader extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="header-container">
            <div className="container-fluid">
              <p className="userlogo">
                Hi, John <i className="fa fa-user" />
              </p>
            </div>
          </div>

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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContentLG"
            >
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link">
                    <Link to={this.props.Content.dashlink}>
                      {this.props.Content.dashboardText}
                    </Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    <Link to={this.props.Content.teamManagelink}>
                      {this.props.Content.teamManage}
                    </Link>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link ">
                    <Link to={this.props.Content.teamcontactlink}>
                      {this.props.Content.teamContact}
                    </Link>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link ">
                    <Link to={this.props.Content.storylink}>
                      {this.props.Content.storyBook}
                    </Link>{" "}
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-sm-4 col-md-2 col-lg-2 main-content1"></div>
          </div>
        </div>
      </Router>
    );
  }
}
Layoutheader.defaultProps = { Content: content };
export default Layoutheader;
