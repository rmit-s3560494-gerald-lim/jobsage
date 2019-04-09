import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Jobs = props => (
    <tr>
        <td>{props.job.id}</td>
        <td>{props.job.category}</td>
        <td>{props.job.city}</td>
        <td>{props.job.company_name}</td>
        <td>
            <Link to={"/edit/" + props.job._id}>Edit</Link>
        </td>
    </tr>
)

export default class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = { jobs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jobs/')
            .then(response => {
                this.setState({ jobs: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    jobsList() {
        return this.state.jobs.map(function (currentJob, i) {
            return <Jobs job={currentJob} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Jobs List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>category</th>
                            <th>city</th>
                            <th>company_name</th>
                            <th>geo</th>
                            <th>job_board</th>
                            <th>job_description</th>
                            <th>job_title</th>
                            <th>job_type</th>
                            <th>post_date</th>
                            <th>salary_offered</th>
                            <th>state</th>
                            <th>url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.jobsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}