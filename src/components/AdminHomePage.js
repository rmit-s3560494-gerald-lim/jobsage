import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class AdminHomePage extends Component {
    render() {
        return (
            <div className="content">
                <Header />
                <div className="row">
                    <div className="col-sm-6">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Users</h5>
                                <a href="/adminremoveusers" className="">View Users</a>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="col-sm-6">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Jobs</h5>
                                <a href="/jobs" className="">View Jobs List</a>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHomePage;