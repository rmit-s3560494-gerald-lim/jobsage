  import React, { Component } from "react";
import './App.css';

class SignUpPage extends Component {

  render() {
    return(

      <div class="form">

      <form>
<div class="form-group">
  <label for="emailLabel">Email address</label>
  <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
</div>
<div class="form-group">
  <label for="passwordLabel">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>
<div class="form-group">
  <label for="passwordLabel">Re-type Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
</div>
<button type="submit" class="btn btn-primary">Sign Up</button>
</form>


</div>
    );
  }
}

export default SignUpPage;
