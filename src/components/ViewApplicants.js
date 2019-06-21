import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';


export default class ViewApplicants extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://35.212.88.235/users/')
            .then(response => {
                this.setState({
                    users: response.data

                });
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error.response);
                window.location.reload();
            })
    }

    delete(currUser) {
        console.log(currUser._id)
        axios.get('http://35.212.88.235/users/delete/' + currUser._id)
             .then(console.log('Deleted'))
             .catch(err => console.log(err))
             alert("User deleted");
             window.location.reload();
    }

    makeUserTable = (currUser) =>
        <tr>
            <td>{currUser.user_name}</td>
            <td>{currUser.user_email}</td>
            <td><button onClick={() => this.delete(currUser)} className="btn btn-danger">Delete</button></td>
        </tr>


    usersList() {
        return this.state.users.map(user => this.makeUserTable(user));
    }

    render() {
        return (
            <div>
                <Header />

                <h3 id="jobsage">Applicants</h3>
                <div className="card">
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead className="thead-dark">
                            <tr>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.usersList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}