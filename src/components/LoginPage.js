import React, { Component } from "react";

class LoginPage extends Component {
/*  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }*/

  render() {
    return (
        // <Form onSubmit={this.handleSubmit}>
        //   <FormGroup controlId="email">
        //     <FormLabel>Email</FormLabel>
        //     <FormControl
        //       type="email"
        //       value=""
        //     //  onChange={this.handleChange}
        //     />
        //   </FormGroup>
        //   <FormGroup controlId="password">
        //     <FormLabel>Password</FormLabel>
        //     <FormControl
        //       value=""
        //     //  onChange={this.handleChange}
        //       type="password"
        //     />
        //   </FormGroup>
        //   <Button
        //     block
        //   //  bsSize="large"
        //   //  disabled={!this.validateForm()}
        //     type="submit"
        //   >
        //     Login
        //   </Button>
        //
        // </Form>
      <a href="/signup">Don't have an account?</a>

    );
  }
}

export default LoginPage;
