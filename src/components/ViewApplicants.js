import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';


export default class ViewApplicants extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      job: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://35.212.88.235/jobs/${id}/applicants`)
      .then(response => {
        var applicants = response.data;

        applicants.forEach(applicant => {
          axios.get(`http://35.212.88.235/users/${applicant}`)
            .then(response => {
              this.setState({
                users: [...this.state.users, response.data]
              })
            })
            .catch(error => {
              console.log(error.response);
            })
        });
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  makeUserTable = (currUser) => (
    <tr>
      <td>{currUser.user_name}</td>
      <td>{currUser.user_email}</td>
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
        <h3 id="jobsage">Applicants</h3>
        <div className="card">
          <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead className="thead-dark">
              <tr>
                <th>User Name</th>
                <th>User Email</th>
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
