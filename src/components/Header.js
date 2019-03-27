import React, { Component } from 'react';
import Logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <div class="container-fluid" >
        <div class="row justify-content-between" >
          <div class="col-4">
            <h1> PPMM </h1>
          </div>
          <div class="col-4 text-right">
            <h1><img src={Logo} className="logo" alt="logo" /></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;