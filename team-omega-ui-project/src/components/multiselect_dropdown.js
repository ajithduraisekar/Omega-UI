import React, { Component } from "react";
import "../styles/App.css";
import Data from "../mock/mockdata";
import CommonMultiSelect from "./common/commonMultiSelect";

class Multiselect_dropdown extends Component {
  render() {
    return (
      <div className="Multiselect_dropdown_div">
        <div className="main-content-storybook">
          <h4>{this.props.Default_Multi_Select_DropDown_With_Label}</h4>
          <div className="form-group input-group-lg">
            <div className="row d-flex justify-content-left mt-100 ">
              <div className="col-md-4 scroll-menu">
                <CommonMultiSelect
                  id="choices-multiple-remove-button"
                  className="small"
                  label={this.props.label}
                  dropdownList={this.props.dropdown3}
                  onClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
          <h4>{this.props.Multi_Select_DropDown_With_100_Width}</h4>
          <h6>{this.props.Bootstrap_Class_col_md_12_is_Used}</h6>
          <div className="form-group input-group-lg">
            <div className="row d-flex justify-content-left mt-100 ">
              <div className="col-md-12 scroll-menu">
                <CommonMultiSelect
                  id="choices-multiple-remove-button"
                  className="large"
                  label={this.props.label}
                  dropdownList={this.props.dropdown3}
                  onClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
          <h4> {this.props.Multi_Select_DropDown_WithOut_Label}</h4>
          <div className="form-group input-group-lg">
            <div className="row d-flex justify-content-left mt-100 ">
              <div className="col-md-4 scroll-menu">
                <CommonMultiSelect
                  id="choices-multiple-remove-button"
                  label=""
                  className="small"
                  dropdownList={this.props.dropdown3}
                  onClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
          <h4> {this.props.Multi_Select_DropDown_100_Width_WithOut_Label}</h4>
          <h6>{this.props.Bootstrap_Class_col_md_12_is_Used}</h6>
          <div className="form-group input-group-lg">
            <label htmlFor="choices-multiple-remove-button" />
            <div className="row d-flex justify-content-left mt-100 ">
              <div className="col-md-12 scroll-menu">
                <CommonMultiSelect
                  id="choices-multiple-remove-button"
                  label=""
                  className="large"
                  dropdownList={this.props.dropdown3}
                  onClick={this.handleOnClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Multiselect_dropdown.defaultProps = Data;
export default Multiselect_dropdown;
