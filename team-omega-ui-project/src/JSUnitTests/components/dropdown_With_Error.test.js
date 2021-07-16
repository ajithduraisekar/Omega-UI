import  {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Dropdown_With_Error from '../../components/dropdown_With_Error';
//Enzyme.configure({adapter: new Adapter()});
 
describe('Dropdown_With_Error', ()=> {
    it('renders  components', () => {
        const wrapper = shallow(<Dropdown_With_Error/>);
        expect(wrapper.find(".Dropdown_With_Error_div").exists()).toBe(true);
    });
});