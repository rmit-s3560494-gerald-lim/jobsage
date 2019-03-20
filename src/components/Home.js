import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class Home extends Component {
    render() {
        return (
            <header className="App-header">PPMM - Employer & Job Seeker Matchmaking Platform
            <img src={logo} className="logo" alt="logo" />
            </header>
        )
    }
}

export default Home;