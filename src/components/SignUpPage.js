import React, { Component } from "react";
import './App.css';
import logo from '../logo.png';
import axios from "axios";

const Error = (props) => {
  if (props.error === 'emailError') {
    return <div id="helperAlert" class="alert alert-danger" role="alert">Email already used</div>
  } else if (props.error === 'passwordError') {
    return <div id="helperAlert" class="alert alert-danger" role="alert">Password do not match</div>
  }
}
class SignUpPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      email: '',
      password1: '',
      password2: '',
      type: '',
      error: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  selectChange = (e) => {
    this.setState({
      type: e.target.value
    });
  }

  validateNewUser = () => {
    if (this.state.type === 'employer') {
      axios.post('http://35.212.88.235/users/signup', {
        user_name: this.state.user_name,
        user_email: this.state.email,
        password: this.state.password2,
        user_type: this.state.type,
      }).then(response => {
        alert('Succesfully registered. Clicking ok will redirect to login page')
        this.props.history.push('/login');
      }).catch(error => {
        this.setState({
          error: 'emailError',
        });
      })
    } else if (this.state.type === 'employee') {
      axios.post('http://35.212.88.235/users/signup', {
        user_name: this.state.user_name,
        user_email: this.state.email,
        password: this.state.password2,
        user_type: this.state.type,
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
        }]
      }).then(response => {
        alert('Succesfully registered. Clicking ok will redirect to login page')
        this.props.history.push('/login');
      }).catch(error => {
        this.setState({
          error: 'emailError',
        });
      })
    }
  }

  checkPassword = () => {
    if (this.state.password1 === this.state.password2) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkPassword() === true) {
      this.validateNewUser();
    } else {
      this.setState({
        error: 'passwordError',
      })
    }
  }

  render() {
    return (
      <div>
        <div class="centerLogin">
          <img src={logo} className="img-fluid" alt="JobSage Logo" />
          {this.state.error && <Error error={this.state.error} />}
          <div class="form">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <lable for="unameLabel">User Name</lable>
                <input type="text" class="form-control" onChange={this.handleChange} id="uname"
                  name="user_name" placeholder="User Name" />
              </div>
              <div class="form-group">
                <label for="emailLabel">Email address</label>
                <input type="email" class="form-control" onChange={this.handleChange} id="email"
                  name="email" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="passwordLabel">Password</label>
                <input type="password" class="form-control" onChange={this.handleChange} id="exampleInputPassword1"
                  name="password1" placeholder="Password" />
              </div>
              <div class="form-group">
                <label for="passwordLabel">Re-type Password</label>
                <input type="password" class="form-control" onChange={this.handleChange} id="exampleInputPassword1"
                  name="password2" placeholder="Password" />
              </div>
              <div class="form-group" id="type" name="type" onChange={this.selectChange} value={this.state.type}>
                <label for="userType">User Type</label>
                <select className="form-control">
                  <option value="select">Select</option>
                  <option value="employee">Job Seeker</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
