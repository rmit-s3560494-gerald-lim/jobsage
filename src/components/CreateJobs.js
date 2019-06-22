import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class CreateJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      company_name: '',
      job_description: '',
      job_title: '',
      job_type: '',
      salary_offered: '',
      skills: [{
        skill1: '',
        rating1: '',
        skill2: '',
        rating2: '',
        skill3: '',
        rating3: '',
        skill4: '',
        rating4: '',
        skill5: '',
        rating5: '',
      }],
      url: '',
      employer_id: '',
    }

  }

  handleChange = (e) => {
    var name = e.target.name;
    const { skills } = this.state;
    if (name.includes('skill')) {
      skills[0][name] = e.target.value;
      this.setState({
        skills
      })
    } else if (name.includes('rating')) {
      skills[0][name] = e.target.value;
      this.setState({
        skills
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    var employer_details = JSON.parse(localStorage.getItem('user'));
    var eid = employer_details._id;

    console.log(this.state);
    const { skills } = this.state;

    const newJob = {
      city: this.state.city,
      company_name: this.state.company_name,
      job_description: this.state.job_description,
      job_title: this.state.job_title,
      job_type: this.state.job_type,
      salary_offered: this.state.salary_offered,
      skills: [{
        skill1: skills[0]['skill1'],
        rating1: skills[0]['rating1'],
        skill2: skills[0]['skill2'],
        rating2: skills[0]['rating2'],
        skill3: skills[0]['skill3'],
        rating3: skills[0]['rating3'],
        skill4: skills[0]['skill4'],
        rating4: skills[0]['rating4'],
        skill5: skills[0]['skill5'],
        rating5: skills[0]['rating5'],
      }],
      url: this.state.url,
      employer_id: eid,
    }

    axios.post('http://35.212.88.235/jobs/add', newJob)
      .then(res => console.log(res.data));
    alert("New Job added");

    this.props.history.push('/jobs');
  }

  render() {
    return (
      <div>
        <Header />

        <div style={{ marginTop: 20 }}>
          <div className="createjobs">
            <h3>Create New Job Posting</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Job Title: </label>
                <input type="text"
                  name="job_title"
                  className="form-control"
                  value={this.state.job_title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Job Type: </label>
                <input type="text"
                  name="job_type"
                  className="form-control"
                  value={this.state.job_type}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>City: </label>
                <input type="text"
                  name="city"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Company Name: </label>
                <input type="text"
                  name="company_name"
                  className="form-control"
                  value={this.state.company_name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Job Description: </label>
                <input type="text"
                  name="job_description"
                  className="form-control"
                  value={this.state.job_description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Salary Offered: </label>
                <input type="text"
                  name="salary_offered"
                  className="form-control"
                  value={this.state.salary_offered}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Skills: </label>
                <div className="form-group entry input-group col-xs-3">
                  <input className="form-control" name="skill1" type="text" placeholder="e.g. ReactJS" onChange={this.handleChange} />
                  <select className="form-control" name="rating1" id="skillSelect" onChange={this.handleChange}>
                    <option disabled selected value> -- Select option -- </option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                  </select>
                </div>
                <div className="form-group entry input-group col-xs-3">
                  <input className="form-control" name="skill2" type="text" placeholder="" onChange={this.handleChange} />
                  <select className="form-control " name="rating2" id="skillSelect" onChange={this.handleChange}>
                    <option disabled selected value> -- Select option -- </option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                  </select>
                </div>
                <div className="form-group entry input-group col-xs-3">
                  <input className="form-control" name="skill3" type="text" placeholder="" onChange={this.handleChange} />
                  <select className="form-control " name="rating3" id="skillSelect" onChange={this.handleChange}>
                    <option disabled selected value> -- Select option -- </option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                  </select>
                </div>
                <div className="form-group entry input-group col-xs-3">
                  <input className="form-control" name="skill4" type="text" placeholder="" onChange={this.handleChange} />
                  <select className="form-control " name="rating4" id="skillSelect" onChange={this.handleChange}>
                    <option disabled selected value> -- Select option -- </option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                  </select>
                </div>
                <div className="form-group entry input-group col-xs-3">
                  <input className="form-control" name="skill5" type="text" placeholder="" onChange={this.handleChange} />
                  <select className="form-control " name="rating5" id="skillSelect" onChange={this.handleChange}>
                    <option disabled selected value> -- Select option -- </option>
                    <option value="0">Beginner</option>
                    <option value="1">Intermediate</option>
                    <option value="2">Expert</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>URL: </label>
                <input type="text"
                  name="url"
                  className="form-control"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Create Job" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
