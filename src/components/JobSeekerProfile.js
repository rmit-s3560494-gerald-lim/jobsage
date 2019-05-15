import React, { Component } from 'react';

class JobSeekerProfile extends Component{
  
  render() {
        return (
          <div class="centerLogin">
            <header className="App-header">
            </header>
            <form>
              <div class="form-group">
                <label htmlFor="name">Name:</label> 
                <input class="form-control" onChange={this.handleNameChange} type="text" name="name" id="name"/>
              </div>
              <div class="form-group">
                <label htmlFor="Experience">Experience:</label> 
                <input class="form-control" onChange={this.handleExperienceChange} type="text" name="experience" id="experience"/>
              </div>
              <div class="form-group">
                <label htmlFor="Education">Education:</label> 
                <input class="form-control" onChange={this.handleEducationChange} type="text" name="education" id="education"/>
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
              <div class="text-right">
                <button className="btn btn-primary" type="button">Update</button>
              </div>
            </form>
          </div>
        );
    }

}

export default JobSeekerProfile;