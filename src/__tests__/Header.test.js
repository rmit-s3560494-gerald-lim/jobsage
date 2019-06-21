import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

describe('Header Unit Tests', () => {
    test('renders', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    xit('has a navbar', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.containsMatchingElement(
            <nav id="navBar" />
        )).toBeTruthy();
    })
});