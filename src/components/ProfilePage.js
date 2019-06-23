import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class ProfilePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      user_email: '',
      user_type: '',
      password: '',
      skills: [{
        skill1: '',
        rating1: '',
        skill2: '',
        rating2: '',
        skill3: '',
        rating3: '',
        skill4: '',
        rating4: '',
        skill5: '',
        rating5: '',
      }],
    }

  }

  getUserId() {
    var user_details = JSON.parse(localStorage.getItem('user'));
    var id = user_details._id;
    return id;
  }

  skillRatingMapperToText = (skill) => {
    switch (skill) {
      case 1:
        return 'Beginner'
      case 2:
        return 'Intermediate'
      case 3:
        return 'Expert'
      default:
        return ''
    };
  }

  skillRatingMapperToInt = (skill) => {
    switch (skill) {
      case 'Beginner':
        return '1'
      case 'Intermediate':
        return '2'
      case 'Expert':
        return '3'
      default:
        return skill
    };
  }

  existingValueCheck = (value) => {
    if (value === '') {
      return ' -- Select option -- '
    } else {
      return value;
    }
  }

  componentDidMount() {
    axios.get('http://35.212.88.235/users/' + this.getUserId())
      .then(response => {
        console.log('did mount', response.data);
        this.setState({
          user_name: response.data.user_name ? response.data.user_name : '',
          user_email: response.data.user_email ? response.data.user_email : '',
          user_type: response.data.user_type,
          password: response.data.password,
          skills: [{
            skill1: response.data.skills[0].skill1 ? response.data.skills[0].skill1 : '',
            rating1: this.skillRatingMapperToText(response.data.skills[0].rating1),
            skill2: response.data.skills[0].skill2 ? response.data.skills[0].skill2 : '',
            rating2: this.skillRatingMapperToText(response.data.skills[0].rating2),
            skill3: response.data.skills[0].skill3 ? response.data.skills[0].skill3 : '',
            rating3: this.skillRatingMapperToText(response.data.skills[0].rating3),
            skill4: response.data.skills[0].skill4 ? response.data.skills[0].skill4 : '',
            rating4: this.skillRatingMapperToText(response.data.skills[0].rating4),
            skill5: response.data.skills[0].skill5 ? response.data.skills[0].skill5 : '',
            rating5: this.skillRatingMapperToText(response.data.skills[0].rating5),
          }],
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  onChange = (e) => {
    var name = e.target.name;
    const { skills } = this.state;
    if (name.includes('skill')) {
      skills[0][name] = e.target.value;
      this.setState({
        skills
      })
    } else if (name.includes('rating')) {
      skills[0][name] = e.target.value;
      this.setState({
        skills
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit', this.state);
    const newUser = {
      user_name: this.state.user_name,
      user_email: this.state.user_email,
      user_type: this.state.user_type,
      password: this.state.password,
      skills: [{
        skill1: this.state.skills[0].skill1,
        rating1: this.skillRatingMapperToInt(this.state.skills[0].rating1),
        skill2: this.state.skills[0].skill2,
        rating2: this.skillRatingMapperToInt(this.state.skills[0].rating2),
        skill3: this.state.skills[0].skill3,
        rating3: this.skillRatingMapperToInt(this.state.skills[0].rating3),
        skill4: this.state.skills[0].skill4,
        rating4: this.skillRatingMapperToInt(this.state.skills[0].rating4),
        skill5: this.state.skills[0].skill5,
        rating5: this.skillRatingMapperToInt(this.state.skills[0].rating5),
      }],
    };
    console.log('new user', newUser);
    axios.post('http://35.212.88.235/users/edit/' + this.getUserId(), newUser)
      .then(res => {
        console.log(res.data);
        alert("Profile Updated!");
        this.props.history.push('/employeehome');
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="edituser">
          <h3>Profile Page</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input type="text"
                className="form-control"
                name="user_name"
                value={this.state.user_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="text"
                className="form-control"
                name="user_email"
                value={this.state.user_email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Skills: </label>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill1" type="text" placeholder="e.g. ReactJS" defaultValue={this.state.skills[0].skill1} onChange={this.onChange} />

                <select className="form-control " name="rating1" id="skillSelect" onChange={this.onChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating1)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill2" type="text" placeholder="" defaultValue={this.state.skills[0].skill2} onChange={this.onChange} />
                <select className="form-control" name="rating2" id="skillSelect" onChange={this.onChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating2)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill3" type="text" placeholder="" defaultValue={this.state.skills[0].skill3} onChange={this.onChange} />
                <select className="form-control " name="rating3" id="skillSelect" onChange={this.onChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating3)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill4" type="text" placeholder="" defaultValue={this.state.skills[0].skill4} onChange={this.onChange} />
                <select className="form-control " name="rating4" id="skillSelect" onChange={this.onChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating4)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill5" type="text" placeholder="" defaultValue={this.state.skills[0].skill5} onChange={this.onChange} />
                <select className="form-control " name="rating5" id="skillSelect" onChange={this.onChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating5)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Update Profile" className="btn btn-primary" />
              <a href="/employeehome" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
