import React, { Component } from 'react';
import data from '../mock/MockData'

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange = e => {
    this.setState({
      title: e.target.value
    });
    // console.log(e.target.value)
  };
  renderInput(className) {
    switch (className) {
      case "small":
        return "form-control";
      case "large":
        return "form-control";
      case "disabled_small":
        return "form-control";
      case "disabled_large":
        return "form-control";
      default:
        return "form-control is-invalid"
    }
  }
  render() {
    let _className = this.renderInput(this.props.className)
    return (
      <div>
        <label for="edituserName" className="form-label">{this.props.label ? this.props.label : ""}</label>
        <input
          onChange={this.handleOnChange}
          type={this.props.type}
          className={this.props.hasError ? "form-control is-invalid" : _className}
          id={this.props.id}
          placeholder={this.props.placeholder}
          defaultValue={this.props.value}
          disabled={this.props.disabled ? this.props.disabled : false}
        />
        {this.props.hasError && <div className="invalid-feedback">
          {this.props.Content.errorTxt}
        </div>}
      </div>
    );
  }
}
InputField.defaultProps = { Content: data }
export default InputField