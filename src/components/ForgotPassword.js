import React, { Component } from "react";
import axios from 'axios';
import logo from '../logo.png';

const Error = props => <div id="loginOrPasswordMessage" class="alert alert-danger" role="alert">Email not valid</div>
const Success = props => <div id="loginOrPasswordMessage" class="alert alert-success" role="alert">Recovery email sent</div>

class ForgotPassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: false,
      success: false,
    };
  }

  validateEmail = () => {
    axios.get('http://35.212.88.235/users/').then(response => {
      const users = response.data;
      if(users.find(user => user.user_email === this.state.email) !== undefined) {
        this.setState({
          success: true,
          error: false,
        })
      } else {
        this.setState({
          error: true,
          success: false,
        })
      }
    }).catch(error => {
      this.setState({
        error: true,
      });
    })
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateEmail();
  }

  render() {
    return (
      <div>
        <div class="centerLogin">
          <img src={logo} class="img-fluid" alt="JobSage Logo" />
          <h1 id="applicationTitle" class="display-3">JobSage</h1>
          {this.state.error === true && (
            <Error />
          )}
          {this.state.success === true && (
            <Success />
          )}
          <div class="form">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="emailLabel">Recovery Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={this.handleChange}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;