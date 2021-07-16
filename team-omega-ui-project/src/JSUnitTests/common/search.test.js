import { shallow } from 'enzyme';
import Search from '../../components/common/search';
import React from 'react';

describe("testing common input", () => {
  let wrapper;
    let props = {
        className : "small"
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
        })
        expect(wrapper.state('users')).toEqual([]);
    });
    it("should render my component", () => {
        let defaultProps = { ...props }
        defaultProps.className = "large"
        const wrapper = shallow(<Search {...defaultProps} />);
        const commonInput = (wrapper.find('input'))
        expect(commonInput.exists()).toBe(true);
      });
      it('renders textarea for handleOnSubmit', () => {
        const users = {
          target: {
            name: [],
          },
        };
        const wrapper = shallow(<Search />);
        wrapper.instance().handleOnSubmit(users);
        expect(wrapper.find("handleOnSubmit").exists()).toBe(true);
      });
      beforeEach(() => {
        wrapper = shallow(<Search {...props} />);
      });
      it('should check `componentDidMount()`', () => {
        const instance = wrapper.instance(); // you assign your instance of the wrapper
        jest.spyOn(instance, 'setState'); 
        instance.componentDidMount();
        expect(instance.setState).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
      });
});
