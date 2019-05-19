import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Users = props => (
    <tr>
        <td>{props.user.user_name}</td>
        <td>{props.user.user_email}</td>
        <td>{props.user.user_password}</td>
        <td>{props.user.user_type}</td>
        <td>
            <Link to={"/"}>Delete</Link>
        </td>
    </tr>
)

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jobs/')
        // axios.get('http://35.212.88.235/jobs/')
            .then(response => {
                this.setState({ jobs: response.data });
                console.log(this.state.jobs);
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }

    jobsList() {
    }

    render() {
        return (
            <div>
                <Header />
                <h3>Users List</h3>
                <div className="card">
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead className="thead-dark">
                            <tr>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Password</th>
                                <th>User Type</th> 
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
