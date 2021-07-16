import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox'

describe('testing the component, passing props', () => {
   
    it('renders if classname exists or not', () => {
        const wrapper = shallow(<SearchBox />);
        expect(wrapper.find(".large").exists()).toBe(true);
    });
})