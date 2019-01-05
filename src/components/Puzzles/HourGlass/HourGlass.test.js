import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HourGlass from './HourGlass';

Enzyme.configure({ adapter: new Adapter() });

it(`Should create a Floyd Triangle`, () => {
    const wrapper = shallow(<HourGlass/>);

    const arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    const expected = 19;
    expect(wrapper.instance().puzzleCode(arr)).toEqual(expected);
});


