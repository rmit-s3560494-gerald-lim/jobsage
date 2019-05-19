import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Jobs = props => (
    <tr>
        {/* <td>{props.job._id}</td> */}
        <td>{props.job.job_title}</td>
        <td>{props.job.job_type}</td>
        <td>{props.job.category}</td>
        <td>{props.job.city}</td>
        <td>{props.job.company_name}</td>
        {/* <td>{props.job.geo}</td>
        <td>{props.job.job_board}</td> */}
        {/* <td>{props.job.job_description}</td> */}
        <td>{props.job.post_date}</td>
        <td>{props.job.salary_offered}</td>
        <td>{props.job.state}</td>
        {/* <td>{props.job.url}</td> */}
        <td>
            <Link to={"/edit/" + props.job._id}>Edit</Link>
        </td>
    </tr>
)

var testuser = JSON.parse(localStorage.getItem('user'));
var jsontest = {
  "geo": "1",
  "skills":[{
    "skill1": "test1",
    "rating1": "1",
    "skill2": "PHP",
    "skill3": "Java"
  }]
};

var x = jsontest.skills[0].skill1;

var test = [[1,0,3,0,0], [0,0,0], [1,3,2]]
var neighbour = require('nearestneighbour')({
    objects : test,
    number : 2
  })
  console.log( neighbour.nearest([1,2,3,1,3]))

class KNNTest extends Component {

  constructor(props) {
      super(props);
      this.state = { jobs: [] };
  }

  componentDidMount() {
      axios.get('http://localhost:4000/jobs/')
      //axios.get('http://35.212.88.235/jobs/')
          .then(response => {
              this.setState({ jobs: response.data });
              console.log(this.state.jobs);
          })
          .catch(function (error) {
              console.log(error.response);
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
          {console.log(this.state.jobs)}
          <Header />
          <h3 id="jobsage">Jobs List</h3>
          <div className="card">
              <table className="table table-striped" style={{ marginTop: 20 }} >
                  <thead className="thead-dark">
                      <tr>
                          {/* <th>id</th> */}
                          <th>Job Title</th>
                          <th>Job Type</th>
                          <th>Category</th>
                          <th>City</th>
                          <th>Company Name</th>
                          {/* <th>geo</th>
                      <th>job_board</th> */}
                          {/* <th>job_description</th> */}

                          <th>Post Date</th>
                          <th>Salary</th>
                          <th>State</th>
                          {/* <th>url</th> */}
                          <th>Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.jobsList()}
                  </tbody>
              </table>
          </div>
          <div>{JSON.stringify(jsontest)}</div>
          <div>{JSON.stringify(x)}</div>
          <div>{JSON.stringify(testuser)}</div>
      </div>
      // <div>
      //   <Header />
      // <div class="kNN">
      //   <div>{JSON.stringify(neighbour.nearest([1,2,3]))}</div>
      //
      //   </div>
      // </div>
    );
  }
}

export default KNNTest;
