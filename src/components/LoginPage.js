import React, { Component } from "react";
import axios from 'axios';
import logo from '../logo.png';

const Error = props => <div id="userLoginError" class="alert alert-danger" role="alert">Username and Password invalid</div>
class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateUser = () => {
    axios.post('http://35.212.88.235/users/validation/', {
      email: this.state.email,
      password: this.state.password,
    }).then(response => {
      if(response.data[0].user_type === undefined) {
        this.setState({
          error: true,
        });
      } else if (response.data[0].user_type === 'employer') {
        localStorage.setItem('isEmployerLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        this.props.history.push('/employerhome');
      } else {
        localStorage.setItem('isEmployeeLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        this.props.history.push('/employeehome');
      }
    }).catch(error => {
      this.setState({
        error: true,
      });
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateUser();
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
          <div class="form">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="emailLabel">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  onChange={this.handleChange}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="passwordLabel">Password</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  onChange={this.handleChange}
                  id="exampleInputPassword1"
                  placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <a id="signUpLink" href="/signup">Don't have an account?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
