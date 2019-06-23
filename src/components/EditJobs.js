import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class EditJobs extends Component {

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
      url: ''
    }
  }

  // Switching rating int to string for user to view on frontend
  skillRatingMapperToText = (skill) => {
    switch (skill) {
      case 1:
        return 'Beginner'
      case 2:
        return 'Intermediate'
      case 3:
        return 'Expert'
      default:
        return ''
    };
  }

  // Switching rating back from string to int to store in the backend
  skillRatingMapperToInt = (skill) => {
    switch (skill) {
      case 'Beginner':
        return '1'
      case 'Intermediate':
        return '2'
      case 'Expert':
        return '3'
      default:
        return skill
    };
  }

  componentDidMount() {
    // Find jobs with the selected id
    axios.get('http://35.212.88.235/jobs/' + this.props.match.params.id)
      .then(response => {
        // Set current state to what is found in the backend, if the field is undefined, it will return a blank string instead
        this.setState({
          category: response.data.category ? response.data.category : '',
          city: response.data.city ? response.data.city : '',
          company_name: response.data.company_name ? response.data.company_name : '',
          job_description: response.data.job_description ? response.data.job_description : '',
          job_title: response.data.job_title ? response.data.job_title : '',
          job_type: response.data.job_type ? response.data.job_type : '',
          post_date: response.data.post_date ? response.data.post_date : '',
          salary_offered: response.data.salary_offered ? response.data.salary_offered : '',
          skills: [{
            skill1: response.data.skills[0].skill1 ? response.data.skills[0].skill1 : '',
            rating1: this.skillRatingMapperToText(response.data.skills[0].rating1),
            skill2: response.data.skills[0].skill2 ? response.data.skills[0].skill2 : '',
            rating2: this.skillRatingMapperToText(response.data.skills[0].rating2),
            skill3: response.data.skills[0].skill3 ? response.data.skills[0].skill3 : '',
            rating3: this.skillRatingMapperToText(response.data.skills[0].rating3),
            skill4: response.data.skills[0].skill4 ? response.data.skills[0].skill4 : '',
            rating4: this.skillRatingMapperToText(response.data.skills[0].rating4),
            skill5: response.data.skills[0].skill5 ? response.data.skills[0].skill5 : '',
            rating5: this.skillRatingMapperToText(response.data.skills[0].rating5),
          }],
          url: response.data.url ? response.data.url : '',
        })
      })
      .catch(function (error) {
        console.log(error)
      })
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
    const newJob = {
      category: this.state.category,
      city: this.state.city,
      company_name: this.state.company_name,
      job_board: this.state.job_board,
      job_description: this.state.job_description,
      job_title: this.state.job_title,
      job_type: this.state.job_type,
      post_date: this.state.post_date,
      salary_offered: this.state.salary_offered,
      skills: [{
        skill1: this.state.skills[0].skill1,
        rating1: this.skillRatingMapperToInt(this.state.skills[0].rating1),
        skill2: this.state.skills[0].skill2,
        rating2: this.skillRatingMapperToInt(this.state.skills[0].rating2),
        skill3: this.state.skills[0].skill3,
        rating3: this.skillRatingMapperToInt(this.state.skills[0].rating3),
        skill4: this.state.skills[0].skill4,
        rating4: this.skillRatingMapperToInt(this.state.skills[0].rating4),
        skill5: this.state.skills[0].skill5,
        rating5: this.skillRatingMapperToInt(this.state.skills[0].rating5),
      }],
      url: this.state.url
    };
    
    // Post job to backend via /edit route with job id and the job object sent from the frontend
    axios.post('http://35.212.88.235/jobs/edit/' + this.props.match.params.id, newJob)
      .then(res => {
        console.log(res.data)
        
        // Alert user that job is saved
        alert("Job Saved");
        this.props.history.push('/jobs');
      });
  }

  // Check if there is already a value in the selection for rating select; return -- Select Option -- if it is blank
  existingValueCheck = (value) => {
    if (value === '') {
      return ' -- Select option -- '
    } else {
      return value;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="editjobs">
          <h3>Update Job</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Job Title: </label>
              <input type="text"
                className="form-control"
                name="job_title"
                value={this.state.job_title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Job Type: </label>
              <input type="text"
                className="form-control"
                name="job_type"
                value={this.state.job_type}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>City: </label>
              <input type="text"
                className="form-control"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Company Name: </label>
              <input type="text"
                className="form-control"
                name="company_name"
                value={this.state.company_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Job Description: </label>
              <input type="text"
                className="form-control"
                name="job_description"
                value={this.state.job_description}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Salary Offered: </label>
              <input type="text"
                className="form-control"
                name="salary_offered"
                value={this.state.salary_offered}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Skills: </label>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill1" type="text" placeholder="e.g. ReactJS" defaultValue={this.state.skills[0].skill1} onChange={this.handleChange} />
                <select className="form-control" name="rating1" id="skillSelect" onChange={this.handleChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating1)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill2" type="text" placeholder="" defaultValue={this.state.skills[0].skill2} onChange={this.handleChange} />
                <select className="form-control" name="rating2" id="skillSelect" onChange={this.handleChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating2)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill3" type="text" placeholder="" defaultValue={this.state.skills[0].skill3} onChange={this.handleChange} />
                <select className="form-control" name="rating3" id="skillSelect" onChange={this.handleChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating3)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill4" type="text" placeholder="" defaultValue={this.state.skills[0].skill4} onChange={this.handleChange} />
                <select className="form-control" name="rating4" id="skillSelect" onChange={this.handleChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating4)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
              <div className="form-group entry input-group col-xs-3">
                <input className="form-control" name="skill5" type="text" placeholder="" defaultValue={this.state.skills[0].skill5} onChange={this.handleChange} />
                <select className="form-control" name="rating5" id="skillSelect" onChange={this.handleChange}>
                  <option disabled selected>{this.existingValueCheck(this.state.skills[0].rating5)}</option>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>URL: </label>
              <input type="text"
                className="form-control"
                value={this.state.url}
                onChange={this.onChangeUrl}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Save Job" className="btn btn-primary" />
              <a href="/jobs" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
