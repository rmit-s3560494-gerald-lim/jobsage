import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../components/LoginPage'

describe('LoginPage Unit Tests', () => {
  
  it('renders the logo', () => {
    const wrapper = shallow(<LoginPage />);

  });
});