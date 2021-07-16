import { shallow } from 'enzyme';
import App from '../components/App';

describe("render App component" ,()=>{
 it("should find classname with App",()=>{
     const wrapper= shallow(<App/>);
     expect(wrapper.find('.App').exists()).toBe(true);
 });

});