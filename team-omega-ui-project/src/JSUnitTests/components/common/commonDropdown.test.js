import React from "react";
import { shallow } from "enzyme";
import CommonDropDown from "../../../components/common/commonDropDown";

describe("commonDropDown", () => {
  let props = {
    dropdownList: [{ id: "dropDown" }],
    className: "small",
    Data: {
      DropDown_With_Error: "DropDown With Error",
      DropDown_With_100_Width: "DropDown With 100% Width",
      Bootstrap_Class_col_md_12_is_Used: "Bootstrap Class col-md-12 is Used",
      Label_DropDown_With_Error: "Label DropDown With Error",
      Label_DropDown_With_100_Width: "Label DropDown With 100% Width",
      label: "Label",
      Default_DropDown: "Default DropDown",
      Default_DropDown_with_100: "Default DropDown with 100%",
      Default_Multi_Select_DropDown_With_Label:
        "Default Multi-Select DropDown With Label",
      Multi_Select_DropDown_With_100_Width:
        "Multi Select DropDown With 100% Width",
      Multi_Select_DropDown_WithOut_Label:
        "Multi Select DropDown WithOut Label",
      Multi_Select_DropDown_100_Width_WithOut_Label:
        "Multi Select DropDown 100% Width WithOut Label",
      placeholder: "Default Dropdown",
      Please_select_one_option: "Please select one option",
      dropdown1: [
        {
          id: "disable selected",
          name: "Default DropDown",
        },
        {
          id: "active",
          name: "Option1",
        },
        {
          id: "inactive",
          name: "Option2",
        },
      ],
      dropdown2: [
        {
          id: "disable selected",
          name: "DropDown With Error",
        },
        {
          id: "active",
          name: "Option1",
        },
        {
          id: "inactive",
          name: "Option2",
        },
      ],
      dropdown3: [
        {
          id: "ram@gmail.com",
          name: "ram@gmail.com",
        },
        {
          id: "harika@gmail.com",
          name: "harika@gmail.com",
        },
        {
          id: "haritha@gmail.com",
          name: "haritha@gmail.com",
        },
        {
          id: "uday@gmail.com",
          name: "uday@gmail.com",
        },
        {
          id: "satish@gmail.com",
          name: "satish@gmail.com",
        },
        {
          id: "akhil@gmail.com",
          name: "akhil@gmail.com",
        },
        {
          id: "haritha33@gmail.com",
          name: "haritha33@gmail.com",
        },
        {
          id: "rakesh@gmail.com",
          name: "rakesh@gmail.com",
        },
        {
          id: "satish11@gmail.com",
          name: "satish11@gmail.com",
        },
        {
          id: "akhil22@gmail.com",
          name: "akhil22@gmail.com",
        },
      ],
    },
    handleOnClick: (fn) => fn,
  };
  it("renders CommonDropDown components", () => {
    const wrapper = shallow(<CommonDropDown {...props} />);
    expect(wrapper.find(".CommonDropdown_div").exists()).toBe(true);
  });

  it("tests for large case in switch case", () => {
      let defaultProps = {...props}
      defaultProps.className = "large"
    const wrapper = shallow(<CommonDropDown {...defaultProps} />);
    expect(wrapper.find(".CommonDropdown_div").exists()).toBe(true);
  });

  it("tests for default case in switch case", () => {
    let defaultProps = {...props}
    defaultProps.className = ""
  const wrapper = shallow(<CommonDropDown {...defaultProps} />);
  expect(wrapper.find(".CommonDropdown_div").exists()).toBe(true);
  });

  it("should call handleOnClick method", () => {
    const value = {
      preventDefault: (fn) => fn,
      target: {
        name: "Option 1",
      },
    };
    const wrapper = shallow(<CommonDropDown {...props} />);
    wrapper.instance().handleOnClick(value);
    expect(wrapper.find("handleOnClick").exists()).toBe(false);
  });
});
