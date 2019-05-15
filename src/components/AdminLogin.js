import React, { Component } from 'react';
import axios from 'axios';

class AdminLogin extends Component{
    
  render() {
        return (
          <div class="centerLogin">
            <header className="App-header">
            </header>
            <form>
              <div className="form-group">
              <label htmlFor="username">Username:</label> 
              <input className="form-control" type="text" name="username" id="username"/>
              </div>
              <div className="form-group">
              <label htmlFor="password">Password:</label> 
              <input className="form-control" type="password" name="password" id="password"/>
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