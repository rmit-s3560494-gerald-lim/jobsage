import React, { Component } from 'react';
import axios from 'axios';

class JobSeekerProfile extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    // this.handleEducationChange = this.handleEducationChange.bind(this);
    // this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSkill1 = this.onChangeSkill1.bind(this);
    this.onChangeRating1 = this.onChangeRating1.bind(this);
    this.onChangeSkill2 = this.onChangeSkill2.bind(this);
    this.onChangeRating2 = this.onChangeRating2.bind(this);
    this.onChangeSkill3 = this.onChangeSkill3.bind(this);
    this.onChangeRating3 = this.onChangeRating3.bind(this);
    this.onChangeSkill4 = this.onChangeSkill4.bind(this);
    this.onChangeRating4 = this.onChangeRating4.bind(this);
    this.onChangeSkill5 = this.onChangeSkill5.bind(this);
    this.onChangeRating5 = this.onChangeRating5.bind(this);

    this.state = {
      user_name: '',
      password: '',
      full_name: '',
      user_type: 'jobseeker',
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
      }]
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(`Form submitted`);
    // console.log(`user_name: ${this.state.user_name}`);
    // console.log(`password: ${this.state.password}`);
    // console.log(`skills: ${JSON.stringify(this.state.skills)}`);

    const newProfile = {
      user_name: this.state.user_name,
      password: this.state.password,
      full_name: this.state.full_name,
      user_type: 'jobseeker',
      skills: [{
        skill1: this.state.skill1,
        rating1: this.state.rating1,
        skill2: this.state.skill2,
        rating2: this.state.rating2,
        skill3: this.state.skill3,
        rating3: this.state.rating3,
        skill4: this.state.skill4,
        rating4: this.state.rating4,
        skill5: this.state.skill5,
        rating5: this.state.rating5,
      }]
    }
    // console.log(newProfile);
    axios.post('http://localhost:4000/users/add/', newProfile);
      // .then(res => console.log(res.data));
    alert("Job Profile Updated");
  }

  handleNameChange(e) {
    this.setState({
      user_name: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleFullNameChange(e) {
    this.setState({
      full_name: e.target.value
    });
  }

  // handleExperienceChange(e) {
  //   this.setState({
  //     user_name: e.target.value
  //   });
  // }

  // handleEducationChange(e) {
  //   this.setState({
  //     user_name: e.target.value
  //   });
  // }

  onChangeSkill1(e) {
    this.setState({
      skill1: e.target.value
    });
  }

  onChangeRating1(e) {
    this.setState({
      rating1: e.target.value
    })
  }

  onChangeSkill2(e) {
    this.setState({
      skill2: e.target.value
    });
  }

  onChangeRating2(e) {
    this.setState({
      rating2: e.target.value
    })
  }
  onChangeSkill3(e) {
    this.setState({
      skill3: e.target.value
    });
  }

  onChangeRating3(e) {
    this.setState({
      rating3: e.target.value
    })
  }
  onChangeSkill4(e) {
    this.setState({
      skill4: e.target.value
    });
  }

  onChangeRating4(e) {
    this.setState({
      rating4: e.target.value
    })
  }
  onChangeSkill5(e) {
    this.setState({
      skill5: e.target.value
    });
  }

  onChangeRating5(e) {
    this.setState({
      rating5: e.target.value
    })
  }

  render() {
    return (
      <div class="centerLogin">
        <header className="App-header">
        </header>
        <form onSubmit={this.onSubmit}>

          <div class="form-group">
            <label htmlFor="name">Username:</label>
            <input class="form-control" onChange={this.handleNameChange} type="text" name="name" id="name" />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input class="form-control" onChange={this.handlePasswordChange} type="password" name="password" id="password" />
          </div>
          <div class="form-group">
            <label>Full Name:</label>
            <input class="form-control" onChange={this.handleFullNameChange} type="text" name="full name" id="fullname" />
          </div>
          <div className="form-group">
            <label>Skills: </label>
            <div className="form-group entry input-group col-xs-3">
              <input className="form-control" name="skills" type="text" placeholder="e.g. ReactJS" onChange={this.onChangeSkill1} />
              <select className="form-control " id="skillSelect" onChange={this.onChangeRating1}>
                <option disabled selected value> -- Select option -- </option>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
            </div>
            <div className="form-group entry input-group col-xs-3">
              <input className="form-control" name="skills" type="text" placeholder="" onChange={this.onChangeSkill2} />
              <select className="form-control " id="skillSelect" onChange={this.onChangeRating2}>
                <option disabled selected value> -- Select option -- </option>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
            </div>
            <div className="form-group entry input-group col-xs-3">
              <input className="form-control" name="skills" type="text" placeholder="" onChange={this.onChangeSkill3} />
              <select className="form-control " id="skillSelect" onChange={this.onChangeRating3}>
                <option disabled selected value> -- Select option -- </option>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
            </div>
            <div className="form-group entry input-group col-xs-3">
              <input className="form-control" name="skills" type="text" placeholder="" onChange={this.onChangeSkill4} />
              <select className="form-control " id="skillSelect" onChange={this.onChangeRating4}>
                <option disabled selected value> -- Select option -- </option>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
            </div>
            <div className="form-group entry input-group col-xs-3">
              <input className="form-control" name="skills" type="text" placeholder="" onChange={this.onChangeSkill5} />
              <select className="form-control " id="skillSelect" onChange={this.onChangeRating5}>
                <option disabled selected value> -- Select option -- </option>
                <option value="0">Beginner</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Job Seeker Profile" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }

}

export default JobSeekerProfile;
