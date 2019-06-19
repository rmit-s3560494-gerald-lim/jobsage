import React, { Component } from 'react';
import JobsList from '../components/JobsList';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('#Database Front-end', () => {
    test('renders', () => {
        const wrapper = new shallow(<JobsList />);
        expect(wrapper.exists()).toBeTruthy;
    });

    test('should show each column', () => {
        const wrapper = new shallow(<JobsList />);
        expect(wrapper.containsMatchingElement(
            <th>Job Title</th>,
            <th>Job Type</th>,
            <th>City</th>,
            <th>Company Name</th>,
            <th>Job Description</th>,
            <th>Skills</th>,
            <th>Salary</th>,
        )).toBeTruthy;
    });
});