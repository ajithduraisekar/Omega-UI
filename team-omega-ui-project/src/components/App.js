import React, { Component } from 'react';
import '../styles/App.css';
import HeadingsComponent from './headingsComponent';
import ButtonComponent from './buttonComponent';
import ButtonWithIconComponent from './buttonWithIconComponent';
import IconsComponent from './iconsComponent';

class App extends Component {

  render() {
    return (

     <div className="App Component">
        <ButtonComponent />
        <ButtonWithIconComponent />
        <HeadingsComponent />
        <IconsComponent />
      </div>
    )
  }
}

export default App;
