import React, { Component } from 'react';
// import logo from '../img/logo.svg';
import '../styles/App.css';
import Dropdown_With_Error from './dropdown_With_Error';
import Default_Dropdown from './default_Dropdown';
import Multiselect_dropdown from './multiselect_dropdown'

class App extends Component {
  render() {
    return (
      <div className="app_div"> 
        <Dropdown_With_Error/>,
        <Default_Dropdown/>
        <Multiselect_dropdown/>
      </div>
    );
  }
}

export default App;
