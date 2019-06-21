import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginPage from '../components/LoginPage'

describe('LoginPage Unit Tests', () => {
  test('renders', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });


  it('renders the logo', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.containsMatchingElement(
      <img className="img-fluid" alt="JobSage Logo" />
    )).toBe(true);
  });

  it('has a login label', () => {
    const wrapper = mount(<LoginPage />);
    expect(wrapper.containsMatchingElement(
      <label>Email Address</label>
    )).toBeTruthy();
  });

  xit('has an input for email', () => {
    const wrapper = mount(<LoginPage />);
    const input = wrapper.find('input');
    expect(input.props('name')).toEqual('email');
  })

  it('has a submit button', () => {
    const wrapper = mount (<LoginPage />);
    expect(wrapper.containsMatchingElement(
      <button type="submit" className="btn btn-primary">Submit</button>
    )).toBeTruthy();
  })
});