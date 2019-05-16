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
                                <a href="/adminRemoveUsers" className="">View Users</a>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Inbox</h5>
                                <a href="/" className="">View Messages</a>
                                <br/>
                                <a href="/" className="">Send Message</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Jobs</h5>
                                <a href="/JobsList" className="">View Jobs List</a>
                            </div>
                        </div>
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Infographics</h5>
                                <p>Number of active users</p>
                                <br/>
                                <p>Number of job postings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHomePage;