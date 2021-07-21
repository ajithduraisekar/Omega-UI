import React, { Component } from 'react';
import MockData from '../mock/MockData';
import ButtonControl from './common/buttonControl';
class ButtonComponent extends Component {

state = {
    content: '',
  }
  handleClick() {
    this.setState({ content: "James" });
  }
  render() {
    return (
<div className="buttonComponent">
      <div className="col-sm-8 col-md-10 col-lg-10 main-content2">

        <div className="main-content-storybook">

          <h2>Default Buttons</h2>

          <br />
          <h4>Primary Button</h4>
          <div className="view">
            <div className="submit-button" >

              <ButtonControl className="btn btn-primary" buttonWithIcon={false} icon={<i className="fa fa-send-o" />} id="primary" data={this.saveData} name={this.props.Content.primary} type="submit" />

            </div>
            <br />

            <h4>Secondary Button</h4>
            <div className="submit-button">

              <ButtonControl className="btn btn-secondary" id="data" name={this.props.Content.secondary} buttonWithIcon={false} icon={<i className="fa fa-send-o" />} type="button" />

            </div>
            <br />
            <h4>Primary Rounded Button </h4>
            <div className="form-group search-button col-md-6">

              <ButtonControl className="btn btn-primary " id="search" name={this.props.Content.search} buttonWithIcon={false} icon={<i className="fa fa-send-o" />} type="submit" />

            </div>
            <br />

            <h4>Primary Rounded Button With Css Properties</h4>
            <p>width:100% </p>
            <p>border-radius:1rem</p>
            <div className="form-group search-button">

              <ButtonControl className="btn btn-primary" id="kkk" name={this.props.Content.find} buttonWithIcon={false} icon={<i className="fa fa-send-o" />} type="submit" />

            </div>
            <br />

            <h4>Circular Button</h4>
            <div className="search-text">

              <ButtonControl className="btn circular" id="ghh" name={this.props.Content.circular} buttonWithIcon={false} icon={<i className="fa fa-send-o" />} type="button" />

            </div>
          </div>

        </div>
        </div>
      </div>
    )}}
   ButtonComponent.defaultProps ={Content:MockData};
  export default ButtonComponent;