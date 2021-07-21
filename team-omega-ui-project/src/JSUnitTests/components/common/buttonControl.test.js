import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import ButtonControl from '../../../components/common/buttonControl';


describe(' ButtonControl Component', () => {
  let props = {
    icon: "send icon",
    className: "btn btn-primary default-button ",
    id: "data",
    type: "submit",
    name: "Input Button",
    handleClick: fn => fn
  }
  it('should call switch case EmailSendIcon event', () => {
    let defaultProps = { ...props }
    defaultProps.icon = "email send icon"
    const handleClick = sinon.spy();
    const button = shallow((<ButtonControl {...defaultProps} handleClick={handleClick} />));
    button.find('button').simulate('click');
    expect(handleClick.calledOnce).toBe(true)
  });

  it('should call button click event with switch case send icon', () => {
    const onButtonClick = sinon.spy();
    const handleClick = sinon.spy();
    const button = shallow((<ButtonControl {...props} handleClick={handleClick} onClick={onButtonClick} />));
    button.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toBe(false)
    expect(handleClick.calledOnce).toBe(true)
  });

  it('should call switch case close icon event', () => {
    let props = {
      icon: "close icon",
      className: "btn btn-primary default-button ",
      id: "data",
      type: "submit",
      name: "Input Button"
    }
    const onButtonClick = sinon.spy();
    const button = shallow((<ButtonControl {...props} onClick={onButtonClick} />));
    button.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toBe(false)
  });
});