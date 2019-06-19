import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds
var newTime = year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec + 'Z';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_name: '',
            user_email: '',
            company_name: '',
            password: '',
            new_password: '',
            confirm_password: '',
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
        }

    }

    componentDidMount() {
        axios.get('http://35.212.88.235/users/' + this.props.match.params.id)
            .then(response => {
                console.log(this.props.match.params.id);
                this.setState({
                    _id: this.state.id,
                    user_name: response.data.user_name,
                    user_email: response.data.user_email,
                    password: response.data.password,
                    skills: [{
                        skill1: response.data.skills[0].skill1,
                        rating1: response.data.skills[0].rating1,
                        skill2: response.data.skills[0].skill2,
                        rating2: response.data.skills[0].rating2,
                        skill3: response.data.skills[0].skill3,
                        rating3: response.data.skills[0].rating3,
                        skill4: response.data.skills[0].skill4,
                        rating4: response.data.skills[0].rating4,
                        skill5: response.data.skills[0].skill5,
                        rating5: response.data.skills[0].rating5,
                    }],
                    // state: response.data.state,
                    // url: response.data.url
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: [e.target.value],
      });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.skill1);
        console.log(this.state.rating1);
        console.log(this.state.skill2);
        console.log(this.state.rating2);
        console.log(this.state.skill3);
        console.log(this.state.rating3);
        console.log(this.state.skill4);
        console.log(this.state.rating4);
        console.log(this.state.skill5);
        console.log(this.state.rating5);
        const newUser = {
            // _id: this.state.id,
            user_name: this.state.user_name,
            user_email: this.state.user_email,
            password: this.state.password,
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
            }],
            // state: this.state.state,
            // url: this.state.url
        };
        axios.post('http://35.212.88.235/edit/' + this.props.match.params.id, newUser)
            .then(res => console.log(res.data));
        alert("Profile Updated!");
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <Header />
                <div className="edituser">
                    <h3>Profile Page</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text"
                                className="form-control"
                                name="user_name"
                                value={this.state.user_name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                                className="form-control"
                                name="user_email"
                                value={this.state.user_email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Skills: </label>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="e.g. ReactJS" defaultValue={this.state.skills[0].skill1} onChange={this.onChangeSkill1} />

                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating1}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="0">Beginner</option>
                                    <option value="1">Intermediate</option>
                                    <option value="2">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill2} onChange={this.onChangeSkill2} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating2}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="0">Beginner</option>
                                    <option value="1">Intermediate</option>
                                    <option value="2">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill3} onChange={this.onChangeSkill3} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating3}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="0">Beginner</option>
                                    <option value="1">Intermediate</option>
                                    <option value="2">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill4} onChange={this.onChangeSkill4} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating4}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="0">Beginner</option>
                                    <option value="1">Intermediate</option>
                                    <option value="2">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill5} onChange={this.onChangeSkill5} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating5}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="0">Beginner</option>
                                    <option value="1">Intermediate</option>
                                    <option value="2">Expert</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Save Job" className="btn btn-primary" />
                            <a href="/users" id="cancel" name="cancel" class="btn btn-default">Cancel</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
