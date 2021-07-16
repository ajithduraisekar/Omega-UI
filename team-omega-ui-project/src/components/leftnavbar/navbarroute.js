import React, { Component } from 'react';
import content from '../mock/Mock';
class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4 col-md-2 col-lg-2 main-content1">
                    {/* Left side navigation bar*/}
                    <div className="sidebar-storybook">
                        <aside>
                            <div className="sidebar-menu">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.button}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href={this.props.Content.buttonlink}>{this.props.Content.button1}</a>
                                            <a className="dropdown-item" href={this.props.Content.buttonlink1}>{this.props.Content.button2}</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.dropdown}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href={this.props.Content.ddlink}> {this.props.Content.dropdown1} </a>
                                            <a className="dropdown-item" href={this.props.Content.ddlink1}> {this.props.Content.dropdown2} </a>
                                            <a className="dropdown-item" href={this.props.Content.ddlink2}> {this.props.Content.dropdown3} </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href={this.props.Content.clink} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.card}
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.input}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href={this.props.Content.inputlink}> {this.props.Content.input1}</a>
                                            <a className="dropdown-item" href={this.props.Content.inputlink1}> {this.props.Content.input2}</a>
                                            <a className="dropdown-item" href={this.props.Content.inputlink2}> {this.props.Content.input3}</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown ">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.layout}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href={this.props.Content.laylink}>{this.props.Content.layout1} </a>
                                            <a className="dropdown-item" href={this.props.Content.laylink1}>{this.props.Content.layout2} </a>
                                            <a className="dropdown-item" href={this.props.Content.laylink2}>{this.props.Content.layout3} </a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href={this.props.Content.tablelink} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.table}
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.grid}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href={this.props.Content.gridlink}>{this.props.Content.grid1}</a>
                                            <a className="dropdown-item" href={this.props.Content.gridlink1}>{this.props.Content.grid2}</a>
                                            <a className="dropdown-item" href={this.props.Content.gridlink2}>{this.props.Content.grid3}</a>
                                            <a className="dropdown-item" href={this.props.Content.gridlink3}>{this.props.Content.grid4}</a>
                                            <a className="dropdown-item" href={this.props.Content.gridlink4}>{this.props.Content.grid5}</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href={this.props.Content.pagelink} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.pagination}
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href={this.props.Content.carolink} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.carousel}
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href={this.props.Content.modallink} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.modal}
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {this.props.Content.utility}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="headings.html">{this.props.Content.utility1}</a>
                                            <a className="dropdown-item" href="labels.html">{this.props.Content.utility2}</a>
                                            <a className="dropdown-item" href="icons.html">{this.props.Content.utility3}</a>
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
                        <div className="layout-controls-storybook" id="layout-controls-storybook">
                            <h2>{this.props.Content.layoutcontrol}</h2>
                            <h4>{this.props.Content.layoutcontrol1} </h4>
                            <div className="sidebar" id="to-toggle">
                                <aside>
                                    <div className="sidebar-menu">
                                        <ul>
                                            <li className="active"><a className="active" href="#"><span className="fa fa-envelope" /><span id="sidebar-text1">
                                                {this.props.Content.email}</span></a></li>
                                            <li><a href="#"><span className="fa fa-bullhorn" /><span id="sidebar-text2">
                                                {this.props.Content.annouce}</span></a></li>
                                            <li><a href="#"><span className="fa fa-clipboard" /><span id="sidebar-text3">
                                                {this.props.Content.task}</span></a>
                                            </li>
                                            <li>
                                                <div className="sidebar-toggle">
                                                    <span className="fa fa-angle-double-right" id="release" onclick="myDisplay()" title="open the sidebar" tabIndex={0} /><span className="fa fa-angle-double-left" id="compress" onclick="myClose()" title="close the sidebar" tabIndex={0} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div></div></div></div>
        )
    }
}
Navbar.defaultProps = { Content: content };
export default Navbar;