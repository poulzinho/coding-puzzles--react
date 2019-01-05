import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BribingLines from './BribingLines';

Enzyme.configure({ adapter: new Adapter() });

describe('Bribing Lines', () => {
    it(`Should return the bribes number on a valid final line state`, () => {
        const wrapper = shallow(<BribingLines/>);
        const arr = [2, 1, 5, 3, 4];
        const expected = 3;
        expect(wrapper.instance().puzzleCode(arr)).toEqual(expected);
    });

    it(`Should return "Too chaotic" on an invalid final line state`, () => {
        const wrapper = shallow(<BribingLines/>);
        const arr = [2, 5, 1, 3, 4];
        const expected = 'Too chaotic';
        expect(wrapper.instance().puzzleCode(arr)).toEqual(expected);
    });
});



