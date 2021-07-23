import { shallow } from 'enzyme';
import InputField from '../../components/common/input';
import React from 'react';

describe("testing common input", () => {
  let props = {
    className: "small",
    data: {
      text: "Search Box",
      sub: "Default Search Box",
      sub1: "Search Box With 100% Width",
      placeholder: "Search",
      hint: "Enter Input",
      textArea: "Text Area",
      text1: "Default Text Area",
      text2: "Default Text Area Without Label",
      text3: "Type here",
      label: "Label",
      heading: "Text Area With Subject",
      text4: "Add a Subject",
      text5: "Post here",
      input1: "Input Fields",
      input2: "Used Bootstrap Class col-sm-12 For 100% Width",
      input3: "Default Input",
      input4: "Default Input With Label",
      input5: "Default Input With 100% Width",
      input6: "Input With Error",
      holder: "Place Holder",
      errorTxt: "With Error",
      input7: "Input With Error Using 100% Width",
      disabledinput: "Disabeled Input",
      disabledinput1: "Disabeled Input With 100% Width",
      disable: "Disabled Input",
      users: [
        {
          name: "Gayathri",
        },
        {
          name: "Teja",
        },
        {
          name: "Himanshu",
        },
        {
          name: "Satheesh",
        },
      ]
    }
  }

  it('renders textarea for handleOnChange', () => {
    const title = {
      target: {
        name: "",
      },
    };
    const wrapper = shallow(<InputField {...props} />);
    wrapper.instance().handleOnChange(title);
    expect(wrapper.find("handleOnChange").exists()).toBe(false);
  });
  it("should render my component", () => {
    const wrapper = shallow(<InputField {...props} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  it("should render my component", () => {
    let defaultProps = { ...props }
    defaultProps.className = "large"
    const wrapper = shallow(<InputField {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  it("should render my component", () => {
    let defaultProps = { ...props }
    defaultProps.className = "large"
    const wrapper = shallow(<InputField {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  it("should render my component", () => {
    let defaultProps = { ...props }
    defaultProps.className = "disabled_small"
    const wrapper = shallow(<InputField {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  it("should render my component", () => {
    let defaultProps = { ...props }
    defaultProps.className = "disabled_large"
    const wrapper = shallow(<InputField {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  it("should render my component", () => {
    let defaultProps = { ...props}
    defaultProps.className = ""
    const wrapper = shallow(<InputField {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
});