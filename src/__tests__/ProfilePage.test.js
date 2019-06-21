import ProfilePage from '../components/ProfilePage';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

beforeEach(function () {
    localStorage.setItem('user', JSON.stringify({ 
        "_id": "5d09e7561c9d440000127ab5", 
        "user_name": "t1", 
        "user_email": "t1@test.com", 
        "password": "t1", 
        "user_type": "employee", 
        "skills": [{ 
            "skill1": "React", 
            "rating1": 2, 
            "skill2": "CSS", 
            "rating2": 2, 
            "skill3": "NodeJS", 
            "rating3": 2, 
            "skill4": "Javascript", 
            "rating4": 2, 
            "skill5": "Angular", 
            "rating5": 3 
        }] 
    }))
})
describe('Profile Page Unit Tests', () => {
    test('renders', () => {
        const wrapper = shallow(<ProfilePage />);
        expect(wrapper.exists()).toBe(true);
    });

    it('has a field for username', () => {
        const wrapper = shallow(<ProfilePage />);
        expect(wrapper.containsMatchingElement(
            <div className="form-group">
                <label>Username: </label>
                <input type="text"
                    className="form-control"
                    name="user_name"
                />
            </div>
        )).toBeTruthy();
    });
    
    it('has a field for email', () => {
        const wrapper = shallow(<ProfilePage />);
        expect(wrapper.containsMatchingElement(
            <div className="form-group">
                <label>Email: </label>
                <input type="text"
                    className="form-control"
                    name="user_email"
                />
            </div>
        )).toBeTruthy();
    });

    it('has a submit button', () => {
        const wrapper = shallow(<ProfilePage />);
        expect(wrapper.containsMatchingElement(
            <div className="form-group">
                <input type="submit" value="Update Profile" className="btn btn-primary" />
                <a href="/users" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
            </div>
        )).toBeTruthy();
    })
});