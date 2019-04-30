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
            <th>id</th>,
            <th>category</th>,
            <th>city</th>,
            <th>company_name</th>,
            <th>geo</th>,
            <th>job_board</th>,
            <th>job_title</th>,
            <th>job_type</th>,
            <th>post_date</th>,
            <th>salary_offered</th>,
            <th>state</th>,
            <th>url</th>
        )).toBeTruthy;
    });
});