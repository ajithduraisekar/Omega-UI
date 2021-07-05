import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import Layoutfooter from './common/layout-footer'
import Leftsidebar from './leftSideBar'

class Storybook extends Component{
    render(){
        return(
            <div>
          
            <Leftsidebar/>
            
            {/* <Layoutfooter/> */}
            </div>
        )
    }
}
export default Storybook