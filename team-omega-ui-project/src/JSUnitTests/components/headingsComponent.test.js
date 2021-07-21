import React from 'react';
import { shallow } from 'enzyme';
import HeadingsComponent from '../../components/headingsComponent';

describe('HeadingsComponent', () => {
    test("renders HeadingsComponent" , ()=>{
        const wrapper = shallow(<HeadingsComponent />); 
        expect(wrapper.find(".HeadingsComponent").exists()).toBe(true);
  })

});