import react from 'react';
import { ReactWrapper, shallow } from 'enzyme';
import Leftsidebar from '../../../components/common/leftSideBar';

describe('it checks functions myDisplay and myClose',()=>{
    it('checks mydisplay function',()=>{
        const wrapper = shallow(<myDisplay/>)
        const mydisplaycheck = wrapper.instance();
        expect(mydisplaycheck).toEqual(true)
       
    })
})