import React, { Component } from "react";
import reactDom from "react-dom";
import content from "../Mock";
class Layoutfooter extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container-fluid">
          <footer className="page-footer font-small text-white">
            <div className="footer-copyright text-center py-3">
              {this.props.Content.footerText}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
Layoutfooter.defaultProps = { Content: content };
export default Layoutfooter