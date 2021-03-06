import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import './App.css';

const Jobs = props => (
  <tr>
    <td>{props.job.job_title}</td>
    <td>{props.job.job_type}</td>
    <td>{props.job.city}</td>
    <td>{props.job.company_name}</td>
    <td>{props.job.job_description}</td>
    <td>{props.job.skills[0].skill1 + ', ' + props.job.skills[0].skill2 + ', ' + props.job.skills[0].skill3 +
      ', ' + props.job.skills[0].skill4 + ', ' + props.job.skills[0].skill5}</td>
    <td>{props.job.salary_offered}</td>
    <td> <a href={props.job.url} onClick={() => addApplicant(props.job._id)} class="btn btn-primary" target="https://google.com">Apply</a></td>
  </tr>
)

const addApplicant = (id) => {
  var applicant = JSON.parse(localStorage.getItem('user'))._id;

  axios.post(`http://35.212.88.235/jobs/${id}/apply/${applicant}`)
    .then(response => {
      alert('Shown intered in job');
    })
    .catch(error => {
      console.log(error);
    })
}

class EmployeeHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      custom_list: [],
      isLoaded: false,
      displayNewUserMessage: false,
      custom_list_id: [],
    };
  }

  componentWillMount() {
    axios.get('http://35.212.88.235/jobs/')
      .then(response => {
        this.setState({ jobs: response.data })
        localStorage.setItem('jobs_list', JSON.stringify(response.data));
        var user_details = JSON.parse(localStorage.getItem('user'));
        var parsed_details = this.createUserSkillArray(user_details.skills[0]);
        var user_skills = parsed_details[0];
        var user_skill_ratings = parsed_details[1];
        var jobs_details = JSON.parse(localStorage.getItem('jobs_list'));
        var job_data_set = [];
        var job_set_with_id = [];

        for (var i = 0; i < jobs_details.length; i++) {
          this.createJobSkillRatingArray(user_skills, jobs_details[i], job_data_set, job_set_with_id);
        }


        var neighbour = require('nearestneighbour')({
          objects: job_data_set,
          number: 10
        })
        var knn_jobs = neighbour.nearest(user_skill_ratings);

        for (var j = 0; j < knn_jobs.length; j++) {
          this.customJobsList(knn_jobs[j], jobs_details, job_set_with_id, this.state.custom_list, this.state.custom_list_id);
        }

        axios.get(`http://35.212.88.235/users/id/${JSON.parse(localStorage.getItem('user'))._id}`)
          .then(response => {
            if (response.data[0].skills[0].rating1 === null) {
              this.setState({
                displayNewUserMessage: true,
                isLoaded: true,
              })
            } else {
              this.setState({
                displayNewUserMessage: false,
                isLoaded: true,
              })
            }
          })
      })
      .catch(error => {
        this.setState({
          displayNewUserMessage: true,
          isLoaded: true,
        })
        console.log(error.response);
      })
  }


  jobsList() {
    return this.state.jobs.map(function (currentJob, i) {
      return <Jobs job={currentJob} key={i} />;
    });
  }

  createUserSkillArray(user_skills) {
    var skills = new Array(4);
    var ratings = new Array(4);
    if (user_skills.hasOwnProperty('skill1')) {
      skills[0] = user_skills.skill1;
      ratings[0] = user_skills.rating1;
    }
    if (user_skills.hasOwnProperty('skill2')) {
      skills[1] = user_skills.skill2;
      ratings[1] = user_skills.rating2;
    }
    if (user_skills.hasOwnProperty('skill3')) {
      skills[2] = user_skills.skill3;
      ratings[2] = user_skills.rating3;
    }
    if (user_skills.hasOwnProperty('skill4')) {
      skills[3] = user_skills.skill4;
      ratings[3] = user_skills.rating4;
    }
    if (user_skills.hasOwnProperty('skill5')) {
      skills[4] = user_skills.skill5;
      ratings[4] = user_skills.rating5;
    }
    return [skills, ratings];
  }

  createJobSkillRatingArray(user_skills, job_skills, job_data_set, job_set_id) {

    //get very first value as object id, use that to identify in jobs to create new object which is returned
    var array = new Array(4);
    var array2 = new Array(5);
    array2[0] = job_skills._id;
    if (Object.values(job_skills.skills[0]).indexOf(user_skills[0]) > -1) {
      array[0] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills[0]) + 1];
      array2[1] = array[0];

    }
    else {
      array[0] = 0;
      array2[1] = 0;
    }

    if (Object.values(job_skills.skills[0]).indexOf(user_skills[1]) > -1) {
      array[1] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills[1]) + 1];
      array2[2] = array[1];
    }
    else {
      array[1] = 0;
      array2[2] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills[2]) > -1) {
      array[2] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills[2]) + 1];
      array2[3] = array[2];
    }
    else {
      array[2] = 0;
      array2[3] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills[3]) > -1) {
      array[3] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills[3]) + 1];
      array2[4] = array[3];
    }
    else {
      array[3] = 0;
      array2[4] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills[4]) > -1) {
      array[4] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills[4]) + 1];
      array2[5] = array[4];
    }
    else {
      array[4] = 0;
      array2[5] = 0;
    }
    job_data_set.push(array);
    job_set_id.push(array2);
  }

  customJobsList(knn_jobs_skill, jobs, job_set_id, custom_list, custom_id) {
    //  array of numbers
    var id;
    // length is 6
    for (var k = 0; k < job_set_id.length; k++) {
      // length is 5
      if ((knn_jobs_skill[0] === job_set_id[k][1]) &&
        (knn_jobs_skill[1] === job_set_id[k][2]) &&
        (knn_jobs_skill[2] === job_set_id[k][3]) &&
        (knn_jobs_skill[3] === job_set_id[k][4]) &&
        (knn_jobs_skill[4] === job_set_id[k][5]) && !custom_id.includes(job_set_id[k][0])) {
        id = job_set_id[k][0];
        break;
      }
    }

    var desired_job = jobs.filter(obj => {
      return obj._id === id;
    });

    if (custom_list.includes(desired_job[0])) {
      console.log('job exits');
    } else {
      custom_list.push(desired_job[0])
      custom_id.push(id)
    }
  }


  returnCustomList(custom_list) {
    return custom_list.map(function (currentJob, i) {
      return <Jobs job={currentJob} key={i} />;
    });
  }

  simulateClick = (e) => {
    e.click()
  }

  render() {
    if (this.state.isLoaded !== true) {
      return (
        <div />
      )
    } else {
      return (
        <div className="content">
          <Header />
          <div className="card">

            {this.state.displayNewUserMessage === false && (
              <React.Fragment>
                <h3 id="jobsage">Here are your recommended jobs:</h3>
                <div class="table-responsive">
                  <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead className="thead-dark">
                      <tr>
                        <th>Job Title</th>
                        <th>Job Type</th>
                        <th>City</th>
                        <th>Company Name</th>
                        <th>Job Description</th>
                        <th>Skills</th>
                        <th>Salary</th>
                        <th>Apply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.returnCustomList(this.state.custom_list)}
                    </tbody>
                  </table>
                </div>
              </React.Fragment>
            )}
            {this.state.displayNewUserMessage === true && (
              <div>
                <div ref={this.simulateClick} data-toggle="modal" data-target="#exampleModal"></div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">No skills found</h5>
                      </div>
                      <div class="modal-body">
                        Please add skills to your profile in the top right under "My Profile"
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default EmployeeHome;
