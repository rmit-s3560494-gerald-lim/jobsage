import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.png';

const Error = props => <div id="userLoginError" class="alert alert-danger" role="alert">Username and Password invalid</div>
class AdminLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };
  }

  componentDidMount() {
    localStorage.clear();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateAdmin = () => {
    let userName = '';
    axios.get('http://35.212.88.235/admins/')
      .then(response => {
        userName = response.data.filter(obj => {
          return obj.user_name === this.state.username && obj.password === this.state.password;
        });
        if (userName.length !== 0) {
          localStorage.setItem('isAdminLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(response.data[0]));
          this.props.history.push('/adminhomepage');
        } else {
          this.setState({
            error: true,
          });
        }
      })
      .catch(error => {
        this.setState({
          error: true,
        });
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateAdmin();
  }

  render() {
    return (
      <div class="centerLogin">
        <img src={logo} class="img-fluid" alt="JobSage Logo" />
        <h1 id="applicationTitle" class="display-3">JobSage</h1>
        {this.state.error === true && (
          <Error />
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input className="form-control" onChange={this.handleChange} type="text" name="username" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" onChange={this.handleChange} type="password" name="password" id="password" />
          </div>
          <div className="text-right">
            <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLogin;
