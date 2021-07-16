import React, { Component } from "react";
import Data from "../mock/mockdata";
import CommonDropDown from "./common/commonDropdown";
import "../styles/App.css";

class Default_Dropdown extends Component {
  render() {
    return (
      <div className="Default_Dropdown_div">
        <div className="main-content-storybook">
          <div className="dropdown-storybook" id="dropdown-storybook">
            <h4>{this.props.Default_DropDown}</h4>
            <div className="form-group col-md-3 col-sm-4">
              <CommonDropDown
                dropdownList={this.props.dropdown1}
                id="gridfilter"
                className="small"
                label=""
                onClick={this.handleOnClick}
              />
            </div>

            <h4>{this.props.Default_DropDown_with_100}</h4>
            <div className="form-group filter-search ">
              <CommonDropDown
                dropdownList={this.props.dropdown1}
                id="gridfilter"
                className="small"
                onClick={this.handleOnClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Default_Dropdown.defaultProps = Data;
export default Default_Dropdown;
