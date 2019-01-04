import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RepeatedString from './RepeatedString';

Enzyme.configure({ adapter: new Adapter() });

it(`Should count all a in the RepeatedString`, () => {
    const wrapper = shallow(<RepeatedString/>);
    const s = 'aba';
    const n = 10;
    const expected = 7;
    expect(wrapper.instance().puzzleCode(s, n)).toEqual(expected);
});

it(`Should count all a in the RepeatedString (10000000000 times)`, () => {
    const wrapper = shallow(<RepeatedString/>);
    const s = 'a';
    const n = 1000000000;
    const expected = 1000000000;
    expect(wrapper.instance().puzzleCode(s, n)).toEqual(expected);
});


