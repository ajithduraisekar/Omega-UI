import React, { Component } from "react";
import data from "./mock/MockData";
import InputControl from './inputControl'
import TextArea from "./textArea";
import Navbar from "./leftnavbar/navbarroute";
import SearchBox from "./SearchBox";
export default class App extends Component {

  render() {
    return (
      <div className="set">
        <InputControl Content={this.props.Content} />,
        <TextArea Content={this.props.Content} />,
        <Navbar />,
        <SearchBox Content={this.props.Content} />
      </div>
    );
  }
}
App.defaultProps = {
  Content: data
};
