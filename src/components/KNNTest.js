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

//var user_details = JSON.parse(localStorage.getItem('user'));



 //[user_details.skills[0].skill1, user_details.skills[0].skill2, user_details.skills[0].skill3,
// var jsontest = {
//   "geo": "1",
//   "skills":[{
//     "skill1": "test1",
//     "rating1": "1",
//     "skill2": "PHP",
//     "skill3": "Java"
//   }]
// };
//
// var x = jsontest.skills[0].skill1;
//var job_skill_set
// var neighbour = require('nearestneighbour')({
//     objects : test,
//     number : 2
//   })
//   console.log( neighbour.nearest([1,2,3,1,3]))

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
              localStorage.setItem('jobs_list', JSON.stringify(response.data));
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

  createUserSkillArray(user_skills) {
    var array = new Array(4);
    if (user_skills.hasOwnProperty('skill1'))
    {
      array[0] = user_skills.skill1;
    }
    if (user_skills.hasOwnProperty('skill2'))
    {
      array[1] = user_skills.skill2;
    }
    if (user_skills.hasOwnProperty('skill3'))
    {
      array[2] = user_skills.skill3;
    }
    if (user_skills.hasOwnProperty('skill4'))
    {
      array[3] = user_skills.skill4;
    }
    if (user_skills.hasOwnProperty('skill5'))
    {
      array[4] = user_skills.skill5;
    }
    return array;
  }

  createUserSkillRatingArray(user_skills) {
    var array = new Array(4);
    if (user_skills.hasOwnProperty('skill1'))
    {
      array[0] = user_skills.rating1;
    }
    if (user_skills.hasOwnProperty('skill2'))
    {
      array[1] = user_skills.rating2;
    }
    if (user_skills.hasOwnProperty('skill3'))
    {
      array[2] = user_skills.rating3;
    }
    if (user_skills.hasOwnProperty('skill4'))
    {
      array[3] = user_skills.rating4;
    }
    if (user_skills.hasOwnProperty('skill5'))
    {
      array[4] = user_skills.rating5;
    }
    return array;
  }

  createJobSkillRatingArray(user_skills, job_skills, job_data_set, job_set_id){
    // if (job_skills.hasOwnProperty(user.skills[0] || user.skills[1] || user.skills[]))v{
    //   array[0] = job_skills.rating1;
    // }
    // else {
    //   array[0] = 0;
    // }

    //get very first value as object id, use that to identify in jobs to create new object which is returned


    var array = new Array(4);
    var array2 = new Array(5);
    array2[0] = job_skills._id;
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill1) > -1) {
      array[0] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill1)+1];
      array2[1] = array[0];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[0] = 0;
      array2[1] = 0;
    }

    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill2) > -1) {
      array[1] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill2)+1];
      array2[2] = array[1];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[1] = 0;
      array2[2] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill3) > -1) {
      array[2] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill3)+1];
      array2[3] = array[2];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[2] = 0;
      array2[3] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill4) > -1) {
      array[3] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill4)+1];
      array2[4] = array[3];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[3] = 0;
      array2[4] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill5) > -1) {
      array[4] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill5)+1];
      array2[5] = array[4];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[4] = 0;
      array2[5] = 0;
    }
    console.log("array below");
    console.log(array2);
    job_data_set.push(array);
    job_set_id.push(array2);
    console.log(job_data_set);
  }

  customJobsList(knn_jobs, jobs, job_set_id, custom_list) {
  //  array of numbers
    var id;
    console.log("jobs list below")
    console.log(knn_jobs);
    console.log(job_set_id);
    for (var k = 0; k < job_set_id.length; k++) {
      for (var l = 0; l < knn_jobs.length; l++) {
        if (knn_jobs[l] == job_set_id[k][l+1]) {
          if (l < knn_jobs.length - 1) {
            continue;
          }
          else if (l = knn_jobs.length -1){
            console.log("SUCCESSSSSSS");
            id = job_set_id[k][0];
            console.log(id);
          }
          else {
            break;
          }
        }
      }
    }
    var desired_job = jobs.filter(obj => {
      return obj._id === id;
    })
    console.log("desired job below");
    console.log(desired_job[0]);
    custom_list.push(desired_job[0]);
    //custom_list[0] = desired_job;

    // for (var k = 0; k < jobs.length; k++) {
    //   for (var l = 0; l < knn_job_set_id.length; l++){
    //
    //   }
    // }
    //var custom_jobs = Object.values().filter()



    // return custom_jobs.map(function (currentJob, i) {
    //     return <Jobs job={currentJob} key={i} />;
    // });
  }


  returnCustomList(custom_list) {
    return custom_list.map(function (currentJob, i) {
         return <Jobs job={currentJob} key={i} />;
    });
  }



  render() {
    var user_details = JSON.parse(localStorage.getItem('user'));
    var user_skills = this.createUserSkillArray(user_details.skills[0]);
    var user_skill_ratings = this.createUserSkillRatingArray(user_details.skills[0]);
    var jobs_details = JSON.parse(localStorage.getItem('jobs_list'));
    var job_data_set = [];
    var job_set_with_id = [];
    var custom_list = [];
    //console.log(job_data_set);
    for (var i = 0; i < jobs_details.length; i++){
      this.createJobSkillRatingArray(user_details.skills[0], jobs_details[i], job_data_set, job_set_with_id);
    }

    console.log(jobs_details.length);
    console.log("job data set ");
    console.log(job_data_set);

    var neighbour = require('nearestneighbour')({
        objects : job_data_set,
        number : 1
      })
      console.log("knn");
      console.log(neighbour.nearest(user_skill_ratings));
    var knn_jobs = neighbour.nearest(user_skill_ratings);
    //var jobslist = this.state.jobs;
    console.log("job details below");
    console.log(jobs_details);
    console.log(user_details)
    //console.log("jobs list below")
    //console.log(Object.values(jobs_details)[0]['name']);

    for (var j = 0; j < knn_jobs.length; j++){
        this.customJobsList(knn_jobs[j], jobs_details, job_set_with_id, custom_list);
    }

    console.log(custom_list);
    console.log(this.state.jobs);


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
                      {this.returnCustomList(custom_list)}
                  </tbody>
              </table>
          </div>
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
