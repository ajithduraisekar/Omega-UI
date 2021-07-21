import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import IconsControl from '../../../components/common/iconsControl';

describe('IconsControl component', () => {
  let props = {
    icon: "envelop",
    className: "fa fa-envelope ",
    handleClick: fn => fn
  }
  it("renders iconsControl components", () => {
    const wrapper = shallow(<IconsControl {...props} />);
    expect(wrapper.find(".icons").exists()).toBe(true);
  });

  it('should call handleonClick method', () => {

    const handleClick = sinon.spy();
    const wrapper = shallow(<IconsControl {...props} handleClick={handleClick} />);
    wrapper.instance().handleonClick();
    expect(handleClick).toHaveProperty('callCount', 1);
  });
  it("should call switch case Add Users icon", () => {
    let props = {
      icon: "Add Users",
      className: "fa fa-user-plus ",
      handleClick: fn => fn
    }
    const handleClick = sinon.spy();
    const data = shallow(<IconsControl {...props} handleClick={handleClick} />);
    data.find('i').simulate('click')
    expect(handleClick.calledOnce).toBe(true)
  })
  it("should call switch case Eye Icon icon ", () => {
    let props = {
      icon: "Eye Icon",
      className: "fa fa-eye  ",
      handleClick: fn => fn
    }
    const handleClick = sinon.spy();
    const data = shallow(<IconsControl {...props} handleClick={handleClick} />);
    data.find('i').simulate('click');
    expect(handleClick.calledOnce).toBe(true)
  })
  it("should call switch case Search Icon ", () => {
    let props = {
      icon: "Search Icon",
      className: "fa fa-search form-control-feedback ",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case envelop icon ", () => {
    const onButtonClick = sinon.spy();
    const handleClick = sinon.spy();
    const data = shallow(<IconsControl {...props} handleClick={handleClick} onClick={onButtonClick} />);
    data.find('i').simulate('click')
    expect(onButtonClick.calledOnce).toBe(false)
    expect(handleClick.calledOnce).toBe(true)
  })


  it("should call switch case Add Users icon", () => {
    let props = {
      icon: "Add Users",
      className: "fa fa-user-plus ",
      saveElement: fn => fn
    }
    const saveElement = sinon.spy();
    const data = shallow(<IconsControl {...props} saveElement={saveElement} />);
    data.find('i').simulate('click')
    expect(saveElement.calledOnce).toBe(false)
  })

  it("should call switch case User Plus Icon With Property icon ", () => {
    let props = {
      icon: "User Plus Icon With Property",
      className: "fa fa-user-plus  ",
      handleClick: fn => fn
    }
    const onButtonClick = sinon.spy();
    const data = shallow(<IconsControl {...props} onClick={onButtonClick} />);
    data.find('i').simulate('click');
    expect(onButtonClick.calledOnce).toBe(false)
  })


  it("should call switch case Edit Icon ", () => {
    let props = {
      icon: "Edit Icon",
      className: "fa fa-edit ",
      handleClick: fn => fn
    }
    const font = shallow(<IconsControl {...props} />);
    expect(font.find(".icons").exists()).toBe(true);
  })


  it("should call switch case Trash Icon ", () => {
    let props = {
      icon: "Trash Icon",
      className: "fa fa-trash ",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.exists()).toBe(true);
  })
  it("should call switch case Bull Horn Icon ", () => {
    let props = {
      icon: "Bull Horn Icon",
      className: "fa fa-bullhorn ",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case Clip Board Icon ", () => {
    let props = {
      icon: "Clip Board Icon",
      className: "fa fa-clipboard ",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case DefaultAngle Left Icon ", () => {
    let props = {
      icon: "DefaultAngle Left Icon",
      className: "fas fa-angle-left ",
      name: "Input Button",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })

  it("should call switch case Default Angle Right Icon ", () => {
    let props = {
      icon: "Default Angle Right Icon",
      className: "fas fa-angle-right",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })

  it("should call switch caseAngle Left Icon With Property Icon ", () => {
    let props = {
      icon: "Angle Left Icon With Property",
      className: "fas fa-angle-left",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case Angle Right Icon With Property ", () => {
    let props = {
      icon: "Angle Right Icon With Property",
      className: "fas fa-angle-right",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case Angle Double Right Icon ", () => {
    let props = {
      icon: "Angle Double Right Icon",
      className: "fa fa-angle-double-right right-icon",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
  it("should call switch case Angle Double Left Icon ", () => {
    let props = {
      icon: "Angle Double Left Icon",
      className: "fa fa-angle-double-left left-icon",
      handleClick: fn => fn
    }
    const data = shallow(<IconsControl {...props} />);
    expect(data.find(".icons").exists()).toBe(true);
  })
});










