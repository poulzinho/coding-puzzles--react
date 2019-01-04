import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import JumpingOnClouds from "./JumpingOnClouds";

Enzyme.configure({ adapter: new Adapter() });

it(`Should create a 3 levels Numbers Triangle`, () => {
    const wrapper = shallow(<JumpingOnClouds/>);
    const clouds = [0, 0, 1, 0, 0, 0, 1, 0, 1];
    expect(wrapper.instance().puzzleCode(clouds)).toEqual(5);
});


