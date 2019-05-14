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
                <input class="form-control" type="text" name="name" id="name"/>
              </div>
              <div class="form-group">
                <label htmlFor="Education">Education:</label> 
                <input class="form-control" type="text" name="education" id="education"/>
              </div>

              <div className="form-group">
                <label>Skill 1: </label>
                <div className = "form-group entry input-group col-xs-3">
                <input className = "form-control" type="text" name = "skill2" id="skill2"/>
                <select className = "form-control" name="Proficiency">
                    <option disable selected value>--select an option--</option>
                    <option value = "0">Beginner</option>
                    <option value = "1">Intermediate</option>
                    <option value = "2">Expert</option>
                  </select>
                </div>
              </div>

              <div className = "form-group">
                <label>Skill 2: </label>
                <div className = "form-group entry input-group col-xs-3">
                <input className = "form-control" type="text" name = "skill3" id="skill3"/>
                <select className = "form-control" name="Proficiency">
                    <option disable selected value>--select an option--</option>
                    <option value = "0">Beginner</option>
                    <option value = "1">Intermediate</option>
                    <option value = "2">Expert</option>
                  </select>
                </div>
              </div>

              <div className = "form-group">
                <label>Skill 3: </label>
                <div className = "form-group entry input-group col-xs-3">
                <input className = "form-control" type="text" name = "skill3" id="skill3"/>
                <select className = "form-control" name="Proficiency">
                    <option disable selected value>--select an option--</option>
                    <option value = "0">Beginner</option>
                    <option value = "1">Intermediate</option>
                    <option value = "2">Expert</option>
                  </select>
                </div>
              </div>

              <div className = "form-group">
                <label>Skill 4: </label>
                <div className = "form-group entry input-group col-xs-3">
                <input className = "form-control" type="text" name = "skill3" id="skill3"/>
                <select className = "form-control" name="Proficiency">
                    <option disable selected value>--select an option--</option>
                    <option value = "0">Beginner</option>
                    <option value = "1">Intermediate</option>
                    <option value = "2">Expert</option>
                  </select>
                </div>
              </div>

              <div className = "form-group">
                <label>Skill 5: </label>
                <div className = "form-group entry input-group col-xs-3">
                <input className = "form-control" type="text" name = "skill" id="skill"/>
                <select className = "form-control" name="Proficiency">
                    <option disable selected value>--select an option--</option>
                    <option value = "0">Beginner</option>
                    <option value = "1">Intermediate</option>
                    <option value = "2">Expert</option>
                  </select>
                </div>
              </div>
              <div class="text-right">
                <button className="btn btn-primary" type="button" float="right">Update</button>
              </div>
            </form>
          </div>
        );
    }

}

export default JobSeekerProfile;