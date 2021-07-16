import  {shallow} from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
import Default_Dropdown from '../../components/default_Dropdown';
//Enzyme.configure({adapter: new Adapter()});
 
describe('Default_Dropdown', ()=> {
    it('renders  components', () => {
        const wrapper = shallow(<Default_Dropdown />);
        expect(wrapper.find(".Default_Dropdown_div").exists()).toBe(true);
    });
});