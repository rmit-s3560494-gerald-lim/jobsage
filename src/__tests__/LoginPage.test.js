import React from 'react';
import { shallow, mount } from 'enzyme';
import LoginPage from '../components/LoginPage';

describe('LoginPage Unit Tests', () => {
  test('renders', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });


  it('renders the logo', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.html()).toContain('img src="logo.png"');
  });

  xit('has an input for email', () => {
    const wrapper = mount(<LoginPage />);
    const input = wrapper.find('input');
    expect(input.props('name')).toEqual('email');
  })

  it('has a submit button', () => {
    const wrapper = mount(<LoginPage />);
    expect(wrapper.containsMatchingElement(
      <button type="submit" className="btn btn-primary">Submit</button>
    )).toBeTruthy();
  })
});