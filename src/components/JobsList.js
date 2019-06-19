import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = { jobs: [] };
    }

    componentDidMount() {
        axios.get('http://35.212.88.235/jobs/')
            .then(response => {
                this.setState({ jobs: response.data });
                console.log(this.state.jobs);
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }

    delete(job) {
        console.log(job);
        axios.get('http://35.212.88.235/jobs/delete/' + job._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
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
            <td> <a href={job.url} target="https://google.com">Apply</a></td>

            <td>
                <Link to={"/edit/" + job._id}>Edit</Link>
            </td>
            <td>
                <button onClick={() => this.delete(job)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )

    jobsList() {
        return this.state.jobs.map(job => this.makeJobRow(job));
    }

    render() {
        return (
            <div>
                {/* {console.log(this.state.jobs)} */}
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
                                    <th>Edit</th>
                                    <th>Delete</th>
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
