import React, { Component } from "react";
import './App.css';

class LoginPage extends Component {

  render() {
    return (
      <div class="form">

      <form>
<div class="form-group">
  <label for="emailLabel">Email address</label>
  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
  <label for="passwordLabel">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
      <a href="/signup">Don't have an account?</a>

</div>
    );
  }
}

export default LoginPage;
