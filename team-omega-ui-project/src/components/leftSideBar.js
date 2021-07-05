import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import content from "./Mock";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Leftsidebar extends React.Component {
  constructor() {
    super();
  }
    myClose() {  
    document.getElementById('to-toggle').style.width = '80px';
    document.getElementById('sidebar-text1').style.display = 'none';
    document.getElementById('sidebar-text2').style.display = 'none';
    document.getElementById('sidebar-text3').style.display = 'none';
    document.getElementById('compress').style.display = 'none';
    document.getElementById('release').style.display = 'inline-block';
    // this.myRef.style.width='80px';
    // this.myRef.style.display = 'none';
    // this.myRef.style.display = 'none';
    // this.myRef.style.display = 'none';
    // this.myRef.style.display = 'none';
    // this.myRef.style.display = 'inline-block';
  }
  myDisplay() {
    document.getElementById('to-toggle').style.width = '250px';
    document.getElementById('sidebar-text1').style.display = 'inline-block';
    document.getElementById('sidebar-text2').style.display = 'inline-block';
    document.getElementById('sidebar-text3').style.display = 'inline-block';
    document.getElementById('compress').style.display = 'inline-block';
    document.getElementById('release').style.display = 'none';
  }
  render() {
    return (
      <Router>
        <div>
          <div className="row">
            <div className="col-sm-4 col-md-2 col-lg-2 main-content1">
              <div className="sidebar-storybook">
                <aside>
                  <div className="sidebar-menu">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.Content.button}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item">
                            <Link to={this.props.Content.buttonlink}>
                            {this.props.Content.button1}
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.buttonlink1}>
                            {this.props.Content.button2}
                            </Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.Content.dropdown}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item">
                            <Link to={this.props.Content.ddlink}>
                            {this.props.Content.dropdown1} 
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.ddlink1}>
                            {this.props.Content.dropdown2}
                            </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.ddlink2}>
                            {this.props.Content.dropdown3}
                            </Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link "
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to={this.props.Content.clink}>{this.props.Content.card}</Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.Content.input}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item">
                            <Link to={this.props.Content.inputlink}>{this.props.Content.input1}</Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.inputlink1}>{this.props.Content.input2}</Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.inputlink2}>{this.props.Content.input3}</Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown ">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                         {this.props.Content.layout}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item">
                            <Link to={this.props.Content.laylink}>{this.props.Content.layout1}</Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.laylink1}>{this.props.Content.layout2} </Link>
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.laylink2}>
                            {this.props.Content.layout3}
                            </Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link "
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to={this.props.Content.tablelink} >{this.props.Content.table}</Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.Content.grid}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="">
                            {" "}
                            <Link to={this.props.Content.gridlink}>{this.props.Content.grid1}</Link>
                          </a>
                          <a className="dropdown-item" href="">
                            {" "}
                            <Link to={this.props.Content.gridlink1}>
                            {this.props.Content.grid2}
                            </Link>
                          </a>
                          <a className="dropdown-item" href="">
                            {" "}
                            <Link to={this.props.Content.gridlink2}>
                            {this.props.Content.grid3}
                            </Link>
                          </a>
                          <a className="dropdown-item" href="">
                            {" "}
                            <Link to={this.props.Content.gridlink3}>
                            {this.props.Content.grid4}
                            </Link>
                          </a>
                          <a className="dropdown-item" href="">
                            {" "}
                            <Link to={this.props.Content.gridlink4}>
                            {this.props.Content.grid5}
                            </Link>
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link"
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to={this.props.Content.pagelink}>
                          {this.props.Content.pagination}
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link "
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to={this.props.Content.carolink} >
                          {this.props.Content.carousel}
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link "
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <Link to={this.props.Content.modallink}>
                          {this.props.Content.modal}
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.Content.utility}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item">
                            <Link to={this.props.Content.Uheading}></Link>{this.props.Content.utility1}
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.Ulabels}></Link>{this.props.Content.utility2}
                          </a>
                          <a className="dropdown-item">
                            <Link to={this.props.Content.Uicons}></Link>{this.props.Content.utility3}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
            <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
              {/* Here starts the main content */}
              <div className="main-content-storybook">
                <div
                  className="layout-controls-storybook"
                  id="layout-controls-storybook"
                >
                  <h2>{this.props.Content.LayoutHeading}</h2>
                  <h4>{this.props.Content.layoutHeading2}</h4>
                  <div className="sidebar" id="to-toggle">
                    <aside>
                      <div className="sidebar-menu">
                        <ul>
                          <li className="active">
                            <a className="active" href="#">
                              <span className="fa fa-envelope" />
                              <span id="sidebar-text1">{this.props.Content.groupEmail}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-bullhorn" />
                              <span id="sidebar-text2">{this.props.Content.AnnouncementsText}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="fa fa-clipboard" />
                              <span id="sidebar-text3">{this.props.Content.TasksText}</span>
                            </a>
                          </li>
                          <li>
                            <div className="sidebar-toggle">
                              <span
                                className="fa fa-angle-double-right"
                                id="release"
                                onClick={()=>this.myDisplay()}
                                title="open the sidebar"
                                tabIndex={0}
                              />
                              <span
                                className="fa fa-angle-double-left"
                                id="compress"
                                onClick={()=>this.myClose()}
                                title="close the sidebar"
                                tabIndex={0}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
Leftsidebar.defaultProps = { Content: content };
export default Leftsidebar;
