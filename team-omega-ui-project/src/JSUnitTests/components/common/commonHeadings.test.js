import React from 'react';
import { shallow } from 'enzyme';
import CommonHeadings from '../../../components/common/commonHeadings';

describe('CommonHeadings component', () => {
    let props = {
        type: "h2",
        value: "Headings",
    }

    it("renders CommonHeadings components", () => {
        const wrapper = shallow(<CommonHeadings {...props} />);
        expect(wrapper.find(".h2").exists()).toBe(true);
    });
    it("should call switch case h1 tag ", () => {
        let defaultProps = { ...props }
        defaultProps.type = "h1",
            defaultProps.value = "This is h1 tag"

        const wrapper = shallow(<CommonHeadings {...defaultProps} />);
        expect(wrapper.find(".h1").exists()).toBe(true);
    })
    it("should call switch case h3 tag", () => {
        let defaultProps = { ...props }
        defaultProps.type = "h3",
            defaultProps.value = "This is h3 tag"

        const wrapper = shallow(<CommonHeadings {...defaultProps} />);
        expect(wrapper.find(".h3").exists()).toBe(true);
    })
    it("should call switch case h4 tag", () => {
        let defaultProps = { ...props }
        defaultProps.type = "h4",
            defaultProps.value = "This is h4 tag"

        const wrapper = shallow(<CommonHeadings {...defaultProps} />);
        expect(wrapper.find(".h4").exists()).toBe(true);
    })

    it("should call switch case default value", () => {
        let defaultProps = { ...props }
        defaultProps.type = " ",
            defaultProps.value = " "

        const wrapper = shallow(<CommonHeadings {...defaultProps} />);
        expect(wrapper.find(".headings").exists()).toBe(true);
    })
});