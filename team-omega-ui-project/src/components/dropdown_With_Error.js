import React, { Component } from "react";
import Data from "../mock/mockdata";
import "../styles/App.css";
import CommonDropDown from "./common/commonDropdown";

class Dropdown_With_Error extends Component {
  render() {
    return (
      <div className="Dropdown_With_Error_div">
        <div className="col-sm-8 col-md-10 col-lg-10 main-content2">
          <div className="main-content-storybook">
            <h4> {this.props.DropDown_With_Error} </h4>
            <div className=" col-md-6 form-group">
              <CommonDropDown
                dropdownList={this.props.dropdown2}
                id="status"
                label=""
                onClick={this.handleOnClick}
                hasError={true}
                errorMsg={this.props.Please_select_one_option} />
            </div>

            <h4> {this.props.DropDown_With_100_Width}</h4>
            <h6>{this.props.Bootstrap_Class_col_md_12_is_Used}</h6>
            <div className=" col-md-12 form-group">
              <CommonDropDown
                label=""
                dropdownList={this.props.dropdown2}
                id="status"
                onClick={this.handleOnClick}
                hasError={true}
                errorMsg={this.props.Please_select_one_option}/>
            </div>

            <h4> {this.props.Label_DropDown_With_Error}</h4>
            <div className=" col-md-6 form-group">
              <CommonDropDown
                dropdownList={this.props.dropdown2}
                id="status"
                onClick={this.handleOnClick}
                label={this.props.label}
                hasError={true}
                errorMsg={this.props.Please_select_one_option} />
            </div>

            <h4> {this.props.Label_DropDown_With_100_Width}</h4>
            <h6>{this.props.Bootstrap_Class_col_md_12_is_Used}</h6>
            <CommonDropDown
              dropdownList={this.props.dropdown2}
              id="status"
              onClick={this.handleOnClick}
              label={this.props.label}
              hasError={true}
              errorMsg={this.props.Please_select_one_option} />
          </div>
        </div>
      </div>
    );
  }
}
Dropdown_With_Error.defaultProps = Data;
export default Dropdown_With_Error;
