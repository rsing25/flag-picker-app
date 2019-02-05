import React, {Component} from 'react';
import Autosugget from "./autosuggest";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

describe("Auto suggest component", () => {

    //Shallow Rendering
    test("renders", () => {
        const wrapper = shallow(<Autosugget/>);
        expect(wrapper.exists()).toBe(true);
    });

    //Full DOM Rendering
    test('allows set props', () => {
        const wrapper = mount(<Autosugget type="normal" data= {[]} />);
        expect(wrapper.props().type).toEqual('normal');
        wrapper.setProps({ type: 'normal' });
        const dataIn = ["Africa","America","Asia","Europe","Oceania"];
        wrapper.setProps({ data: dataIn });
        expect(wrapper.props().data).toEqual(dataIn);
      });
    
});
