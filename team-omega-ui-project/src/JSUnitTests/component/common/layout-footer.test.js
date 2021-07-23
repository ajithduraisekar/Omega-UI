import react from 'react';
import { shallow } from 'enzyme';
import Layoutfooter from '../../../components/common/layout-footer';


describe('renders footer component which includes div tags with class names',()=>{
    it('should check div tag',()=>{
        const wrapper = shallow(<Layoutfooter/>);
        const checkdiv = wrapper.find('.footer-container')
        expect(wrapper.exists()).toBe(true);
    });

})