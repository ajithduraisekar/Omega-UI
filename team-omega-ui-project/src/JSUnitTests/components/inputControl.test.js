import { shallow } from 'enzyme';
import InputControl from '../../../src/components/inputControl'

describe('testing the component', () => {
    let props = {
        data: {
            text: "Search Box",
            sub: "Default Search Box",
            sub1: "Search Box With 100% Width",
            placeholder: "Search",
            hint: "Enter Input",
            textArea: "Text Area",
            text1: "Default Text Area",
            text2: "Default Text Area Without Label",
            text3: "Type here",
            label: "Label",
            heading: "Text Area With Subject",
            text4: "Add a Subject",
            text5: "Post here",
            input1: "Input Fields",
            input2: "Used Bootstrap Class col-sm-12 For 100% Width",
            input3: "Default Input",
            input4: "Default Input With Label",
            input5: "Default Input With 100% Width",
            input6: "Input With Error",
            holder: "Place Holder",
            errorTxt: "With Error",
            input7: "Input With Error Using 100% Width",
            disabledinput: "Disabeled Input",
            disabledinput1: "Disabeled Input With 100% Width",
            disable: "Disabled Input",
            users: [
                {
                    name: "Gayathri",

                },
                {
                    name: "Teja",

                },
                {
                    name: "Himanshu",

                },
                {
                    name: "Satheesh",

                },
            ]
        }
    }
    it('renders if classname exists or not', () => {
        const wrapper = shallow(<InputControl {...props} />);
        expect(wrapper.find(".small").exists()).toBe(true);
    });
})