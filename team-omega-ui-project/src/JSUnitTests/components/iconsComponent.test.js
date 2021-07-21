import React from 'react';
import { shallow } from 'enzyme';
import IconsComponent from '../../components/iconsComponent';
describe('IconsComponent', () => {
    test("renders IconsComponent" , ()=>{
        const wrapper = shallow(<IconsComponent />); 
    expect(wrapper.exists()).toBe(true);
  })});

  it('should call saveData method', ()=>{
    const content = {  
        target:{
          value:"James"
        }
      }
      const wrapper=shallow(<IconsComponent/>);
      wrapper.instance().handleClick(content);
      expect(wrapper.state('content')).toEqual("James");
})



  
