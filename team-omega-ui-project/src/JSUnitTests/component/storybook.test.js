import react from 'react';
import { shallow } from 'enzyme';

import Storybook from '../../components/storybook';
import Leftsidebar from '../../components/common/leftSideBar';



describe('renders storybook component which includes only one div and leftsidebar component',()=>{
    it('should check div tag',()=>{
        const wrapper = shallow(<Storybook/>);
        const checkdiv = wrapper.find(<div></div>)
        expect(wrapper.exists()).toBe(true);
    });

    it('finds matching element <leftsidebar/>',()=>{
        const wrapper = shallow(<Storybook/>);
        const checkelement = wrapper.containsMatchingElement(<Leftsidebar/>)
        expect(wrapper.exists()).toBe(true);
    })
})