import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';

export default class AdminRemoveUsers extends React.Component {

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
      })
      .catch(function (error) {
        window.location.reload();
      })
  }

  delete(currUser) {
    axios.get('http://35.212.88.235/users/delete/' + currUser._id)
      .then(alert("User deleted"))
      .catch(err => console.log(err))
    window.location.reload();
  }

  makeUserTable = (currUser) => (
    <tr>
      <td>{currUser.user_name}</td>
      <td>{currUser.user_email}</td>
      <td>{currUser.user_type}</td>
      <td><button onClick={() => this.delete(currUser)} className="btn btn-danger">Delete</button></td>
    </tr>
  )

  usersList = () => {
    return (
      this.state.users.map(user => this.makeUserTable(user))
    )
  }

  render() {
    return (
      <div>
        <Header />
        <h3 id="jobsage">Users List</h3>
        <div className="card">
          <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead className="thead-dark">
              <tr>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Type</th>
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
