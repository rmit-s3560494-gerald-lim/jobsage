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
              <div class="form-group">
                <label htmlFor="Skills">Skills:</label> 
                <input class="form-control" type="text" name="skills" id="skills"/>
              </div>
              <div class="form-group">
                <label htmlFor="Proficiency">Proficiency:</label> 
                <div class="slidecontainer">
                    <input  class="form-control" type="range" min="0" max="2" value="1" id="myRange"/>
                </div>
              </div>
              
            </form>
          </div>
        );
    }

}

export default JobSeekerProfile;