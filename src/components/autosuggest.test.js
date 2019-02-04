import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Autosugget from "./autosuggest";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Auto suggest component", () => {
    test("renders", () => {
        const wrapper = shallow(<Autosugget/>);
        expect(wrapper.exists()).toBe(true);
    });
});