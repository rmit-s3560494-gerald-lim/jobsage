import React, { Component } from "react";
import './App.css';
import logo from '../logo.png';
import axios from "axios";

// const PasswordMismatch = props => <div id="userLoginError" class="alert alert-danger" role="alert">Password do not match.</div>
// const EmailInUse = props => <div id="userLoginError" class="alert alert-danger" role="alert">Email already in use.</div>

const Error = props => <div id="userLoginError" class="alert alert-danger" role="alert">Password do not match.</div>
// const Error = (type) => {
//   if(type === 'email')
//     return <div id="userLoginError" class="alert alert-danger" role="alert">Password do not match.</div>
//   else {
//     return <div id="userLoginError" class="alert alert-danger" role="alert">Email already in use.</div>
//   }
// }
class SignUpPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      email: '',
      password1: '',
      password2: '',
      type: '',
      emailError: false,
      passwordError: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    // if (this.state.password2 !== this.state.password1) {
    //   this.setState({
    //     passwordError: true,
    //   })
    // } else {
    //   this.setState({
    //     passwordError: false,
    //   })
    // }
  }

  selectChange = (e) => {
    this.setState({
      type: e.target.value
    });
  }

  validateNewUser = () => {
    axios.post('http://35.212.88.235/users/signup', {
      user_name: this.state.user_name,
      user_email: this.state.email,
      password: this.state.password2,
      user_type: this.state.type,
    }).then(response => {
      console.log(response);
      this.setState({
        emailError: false,
      })
      this.props.history.push('/login');
    }).catch(error => {
      console.log(error.response);
      this.setState({
        emailError: true,
      });
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateNewUser();
  }

  render() {
    return (
      <div>
        <div class="centerLogin">
          <img src={logo} className="img-fluid" alt="JobSage Logo" />
          {this.state.passwordError === true || this.state.emailError === true && (
            <Error />
          )}
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
