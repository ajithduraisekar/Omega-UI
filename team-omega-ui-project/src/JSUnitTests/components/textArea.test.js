import { shallow } from 'enzyme';
import TextArea from '../../../src/components/textArea'

describe('testing the component, passing props', () => {
   
    it('renders if classname exists or not', () => {
        const wrapper = shallow(<TextArea />);
        expect(wrapper.find(".form-control").exists()).toBe(true);
    });
})