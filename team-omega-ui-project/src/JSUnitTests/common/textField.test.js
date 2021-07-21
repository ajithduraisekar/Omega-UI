import { shallow } from 'enzyme';
import TextField from '../../components/common/textField';
import React from 'react';

describe("testing common input", () => {
  it("should render my component", () => {
    const wrapper = shallow(<TextField />);
    const commonTextArea = (wrapper.find('textarea'))
    expect(commonTextArea.exists()).toBe(true);
  });
  it('renders textarea for handleChange', () => {
    const text = {
      target: {
        name: "",
      },
    };
    const wrapper = shallow(<TextField />);
    wrapper.instance().handleChange(text);
    expect(wrapper.find("handleChange").exists()).toBe(false);
  });
  // it()
});