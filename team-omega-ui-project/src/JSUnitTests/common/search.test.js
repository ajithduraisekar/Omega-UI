import { shallow } from 'enzyme';
import Search from '../../components/common/search';
import React from 'react';

describe("testing common input", () => {
  let wrapper;
  let props = {
    className: "small",
    _users: fn => fn,
    handleOnSubmit: fn => fn
  }
  it("should render my component", () => {
    const wrapper = shallow(<Search {...props} />);
    const commonSearch = (wrapper.find('input'))
    expect(commonSearch.exists()).toBe(true);
  });
  it('testing the component lifecycle method', () => {
    const wrapper = shallow(<Search />);
    wrapper.setState({
      users: []
    });
    expect(wrapper.state('users')).toEqual([]);
  });
  it("should render my component", () => {
    let defaultProps = { ...props }
    defaultProps.className = "large"
    const wrapper = shallow(<Search {...defaultProps} />);
    const commonInput = (wrapper.find('input'))
    expect(commonInput.exists()).toBe(true);
  });
  beforeEach(() => {
    wrapper = shallow(<Search {...props} />);
  });
  it('should have an `input` element', () => {
    const wrapper = shallow(
      <Search />
    );
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(true);
  });
});