import React, { Component } from 'react';

class AdminLogin extends Component{
    
  render() {
        return (
          <div class="centerLogin">
            <header className="App-header">
            <h3>&nbsp; Admin Login</h3>
            </header>
            <form>
              <div class="form-group">
              <label htmlFor="username">Username:</label> 
              <input class="form-control" type="text" name="username" id="username"/>
              </div>
              <div class="form-group">
              <label htmlFor="password">Password:</label> 
              <input class="form-control" type="password" name="password" id="password"/>
              </div>
              <div class="text-right">
              <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
              </div>
            </form>
          </div>
        );
      }
}

export default AdminLogin;