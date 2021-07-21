import React from 'react';
import { shallow } from 'enzyme';
import ButtonWithIconComponent from '../../components/buttonWithIconComponent';

  it('should call state content value', () => {
    const wrapper = shallow(<ButtonWithIconComponent  />);
    expect(wrapper.state('content')).toEqual("");
  }); 

 