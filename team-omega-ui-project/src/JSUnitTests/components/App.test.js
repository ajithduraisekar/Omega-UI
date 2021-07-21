import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
describe('AppComponent', () => {
  test("renders App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })
})