import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from '../../components/buttonComponent';

describe('App component', () => {
    test("renders App component" , ()=>{
        const wrapper = shallow(<ButtonComponent />);
        expect(wrapper.find(".buttonComponent").exists()).toBe(true); 
  })});

  it('should call saveData method', ()=>{
    const content = {  
        target:{
          value:"James"
        }
      }
      const wrapper=shallow(<ButtonComponent/>);
      wrapper.instance().handleClick(content);
      expect(wrapper.state('content')).toEqual("James");
})