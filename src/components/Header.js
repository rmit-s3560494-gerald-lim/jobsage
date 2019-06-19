import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../logo.png';

const homeLink = () => {
  if (localStorage.getItem('isAdminLoggedIn') === 'true') {
    return '/adminhomepage';
  }
  if (localStorage.getItem('isEmployerLoggedIn') === 'true') {
    return '/employerhome';
  }
  if (localStorage.getItem('isEmployeeLoggedIn') === 'true') {
    return '/employeehome';
  }
}
class Header extends Component {

  getName() {
    var user_details = JSON.parse(localStorage.getItem('user'));
    var name = user_details.user_name;
    return name;
  }

  getUserId() {
    var user_details = JSON.parse(localStorage.getItem('user'));
    var id = user_details._id;
    var url = "/users/" + id;
    console.log(id);
    return url;
  }

  handleSignOut = (e) => {
    e.preventDefault();
    if (localStorage.getItem('isAdminLoggedIn') === 'true') {
      localStorage.setItem('isAdminLoggedIn', 'false');
      this.props.history.push('/adminlogin');
    }
    if (localStorage.getItem('isEmployerLoggedIn') === 'true') {
      localStorage.setItem('isEmployerLoggedIn', 'false');
      this.props.history.push('/login');
    }
    if (localStorage.getItem('isEmployeeLoggedIn') === 'true') {
      localStorage.setItem('isEmployeeLoggedIn', 'false');
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img id="headerLogo" src={logo} alt="application logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href={homeLink()}>Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Job</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/jobs">Jobs List</a>
                {localStorage.getItem('isEmployerLoggedIn') === 'true' && (
                  <a className="dropdown-item" href="/add">Add Jobs</a>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome, {this.getName()}</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href={this.getUserId()}>My Profile</a>
                  <a className="dropdown-item" href="#" onClick={this.handleSignOut}>Sign out</a>
                </div>
              </li>
                </ul>
         {/*<button className="btn btn-primary my-2 my-sm-0" onClick={this.handleSignOut}>Sign Out</button>*/}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
