import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default class JobsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

  }

  componentWillMount() {
    if (localStorage.getItem('isEmployerLoggedIn') !== 'true') {
      axios.get('http://35.212.88.235/jobs/')
        .then(response => {
          this.setState({ jobs: response.data });
        })
        .catch(function (error) {
          console.log(error.response);
          window.location.reload();
        })
    }
    else {
      if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        var user_details = JSON.parse(localStorage.getItem('user'));
      }
      axios.get('http://35.212.88.235/jobs/view/' + user_details._id)
        .then(response => {
          this.setState({ jobs: response.data });
        })
        .catch(function (error) {
          console.log(error.response);
        })
    }



  }
  componentWillUpdate() {
    if (localStorage.getItem('isEmployerLoggedIn') !== 'true') {
      axios.get('http://35.212.88.235/jobs/')
        .then(response => {
          this.setState({ jobs: response.data });
        })
        .catch(function (error) {
          console.log(error.response);
          window.location.reload();
        })
    }
    else {
      if (localStorage.getItem('isAdminLoggedIn') !== 'true') {
        var user_details = JSON.parse(localStorage.getItem('user'));
      }
      axios.get('http://35.212.88.235/jobs/view/' + user_details._id)
        .then(response => {
          this.setState({ jobs: response.data });
        })
        .catch(function (error) {
          console.log(error.response);
          window.location.reload();
        })
    }

  }

  delete(job) {
    axios.get('http://35.212.88.235/jobs/delete/' + job._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    alert("Job Deleted");
    window.location.reload();
  }

  makeJobRow = (job) => (
    <tr>
      <td>{job.job_title}</td>
      <td>{job.job_type}</td>
      <td>{job.city}</td>
      <td>{job.company_name}</td>
      <td>{job.job_description}</td>
      <td>{job.skills[0].skill1 + ', '
        + job.skills[0].skill2 + ', '
        + job.skills[0].skill3 + ', '
        + job.skills[0].skill4 + ', '
        + job.skills[0].skill5}
      </td>
      <td>{job.salary_offered}</td>
      <td> <a href={job.url} onClick={() => this.addApplicant(job._id)} target="https://google.com">Apply</a></td>

      {localStorage.getItem('isEmployerLoggedIn') === 'true' && (<td>
        <Link to={"/edit/" + job._id}>Edit</Link>
      </td>)}
      {localStorage.getItem('isEmployerLoggedIn') === 'true' && (<td>
        <button onClick={() => this.delete(job)} className="btn btn-danger">Delete</button>
      </td>)}
      {localStorage.getItem('isEmployerLoggedIn') === 'true' && (<td>
        <Link to={"/view/" + job._id}>View Applicants</Link>
      </td>)}
    </tr>
  )

  addApplicant = (id) => {
    var applicant = JSON.parse(localStorage.getItem('user'))._id;

    axios.post(`http://35.212.88.235/jobs/${id}/apply/${applicant}`)
      .then(response => {
        alert('Shown intered in job');
      })
      .catch(error => {
        console.log(error);
      })

  }

  jobsList() {
    return this.state.jobs.map(job => this.makeJobRow(job));
  }

  render() {
    return (
      <div>
        <Header />
        <h3 id="jobsage">Jobs List</h3>
        <div class="card">
          <div class="table-responsive">
            <table class="table table-striped" style={{ marginTop: 20 }} >
              <thead class="thead-dark">
                <tr>
                  <th>Job Title</th>
                  <th>Job Type</th>
                  <th>City</th>
                  <th>Company Name</th>
                  <th>Job Description</th>
                  <th>Skills</th>
                  <th>Salary</th>
                  <th>Apply</th>
                  {localStorage.getItem('isEmployerLoggedIn') === 'true' && (
                    <th>Edit</th>)}
                  {localStorage.getItem('isEmployerLoggedIn') === 'true' && (
                    <th>Delete</th>)}
                  {localStorage.getItem('isEmployerLoggedIn') === 'true' && (
                    <th>Applicants</th>)}
                </tr>
              </thead>
              <tbody>
                {this.jobsList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
