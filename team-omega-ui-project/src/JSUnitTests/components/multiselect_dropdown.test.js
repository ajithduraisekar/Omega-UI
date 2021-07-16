import  {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Multiselect_dropdown from '../../components/multiselect_dropdown';
//Enzyme.configure({adapter: new Adapter()});
 
describe('Multiselect_dropdown', ()=> {
    it('renders  components', () => {
        const wrapper = shallow(<Multiselect_dropdown />);
        expect(wrapper.find(".Multiselect_dropdown_div").exists()).toBe(true);
    });
});