import React, { Component } from 'react';
import logo from '../logo.png';
import Search from './Search';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">PPMM - Employer & Job Seeker Matchmaking Platform
                    <img src={logo} className="logo" alt="logo" />
                    <Search />
                </header>
                <body>
                    
                </body>
            </div>
        );
    }
}

export default Home;