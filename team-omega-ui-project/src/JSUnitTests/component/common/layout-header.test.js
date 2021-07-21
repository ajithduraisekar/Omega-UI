import react from 'react';
import { shallow } from 'enzyme';
import Layoutheader from '../../../components/common/layout-header';
import { Link } from 'react-router-dom';


describe('renders header component which includes div tags with class names',()=>{
    it('should check ul tag',()=>{
        const wrapper = shallow(<Layoutheader/>);
        const checkdiv = wrapper.find('.collapse navbar-collapse')
        expect(wrapper.exists()).toBe(true);
    });


    it('finds matching element <link/>',()=>{
        const wrapper = shallow(<Layoutheader/>);
        const checkelement = wrapper.containsMatchingElement(<Link/>)
        expect(wrapper.exists()).toBe(true);
    })

})