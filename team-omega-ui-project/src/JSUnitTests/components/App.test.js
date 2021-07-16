import  {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from '../../components/App';
//Enzyme.configure({adapter: new Adapter()});
 
describe('App', ()=> {
    it('renders  components', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".app_div").exists()).toBe(true);
    });
    it('renders  components and checks for false case', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find(".app_div1").exists()).toBe(false);
    });
});