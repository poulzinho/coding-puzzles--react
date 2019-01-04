import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FloydTriangle from './FloydTriangle';

Enzyme.configure({ adapter: new Adapter() });

it(`Should create a Floyd Triangle`, () => {
    const wrapper = shallow(<FloydTriangle/>);
    const levels = 3;
    const expected = ['1\n', '23\n', '456\n'];
    expect(wrapper.instance().puzzleCode(levels)).toEqual(expected);
});


