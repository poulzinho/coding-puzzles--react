import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumbersTriangle from "./NumbersTriangle";

Enzyme.configure({ adapter: new Adapter() });

it(`Should create a 3 levels Numbers Triangle`, () => {
    const wrapper = shallow(<NumbersTriangle/>);
    const levels = 3;
    const expected = ['1\n', '12\n', '123\n'];
    expect(wrapper.instance().puzzleCode(levels)).toEqual(expected);
});


