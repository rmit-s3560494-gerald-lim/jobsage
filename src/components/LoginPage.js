import React, { Component } from "react";
import './App.css';
import Header from './Header';
import axios from 'axios';
import userAuth from './UserAuth';
class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateUser = () => {
    axios.post('http://35.212.88.235/users/validation/', {
      email: this.state.email,
      password: this.state.password,
    }).then(response => {
      userAuth.login(() => {
        if(response.data[0].user_type === 'employee'){
          this.props.history.push('/home');
        } else {
          this.props.history.push('/add');
        }
      })
    }).catch(error => {
      console.log('Error: ', error);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div class="centerLogin">
        <div class="form">

          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="emailLabel">Email address</label>
              <input type="email" class="form-control" name="email" onChange={this.handleChange} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="passwordLabel">Password</label>
              <input type="password" class="form-control" name="password" onChange={this.handleChange} id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <a href="/signup">Don't have an account?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
