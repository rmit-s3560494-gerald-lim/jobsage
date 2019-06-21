import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class EditJobs extends Component {

    constructor(props) {
        super(props);

        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobType = this.onChangeJobType.bind(this);
        this.onChangeSalaryOffered = this.onChangeSalaryOffered.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
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
            // _id: '',
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

    componentDidMount() {
        axios.get('http://35.212.88.235/jobs/' + this.props.match.params.id)
            .then(response => {
                console.log(response.data.url);
                console.log(response.data.skills[0]);
                this.setState({
                    _id: this.state.id,
                    category: response.data.category,
                    city: response.data.city,
                    company_name: response.data.company_name,
                    job_description: response.data.job_description,
                    job_title: response.data.job_title,
                    job_type: response.data.job_type,
                    post_date: response.data.post_date,
                    salary_offered: response.data.salary_offered,
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
                    url: response.data.url
                })
                console.log(this.state.skills[0].skill1);
            })
            .catch(function (error) {
                console.log(error)
            })
        console.log(this.state.url);
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onChangeCompanyName(e) {
        this.setState({
            company_name: e.target.value
        });
    }
    onChangeJobDescription(e) {
        this.setState({
            job_description: e.target.value
        });
    }

    onChangeJobTitle(e) {
        this.setState({
            job_title: e.target.value
        });
    }
    onChangeJobType(e) {
        this.setState({
            job_type: e.target.value
        });
    }
    onChangeSalaryOffered(e) {
        this.setState({
            salary_offered: e.target.value
        });
    }
    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

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
        const newJob = {
            // _id: this.state.id,
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
            url: this.state.url
        };
        axios.post('http://35.212.88.235/jobs/edit/' + this.props.match.params.id, newJob)
            .then(res => console.log(res.data));
        alert("Job Saved");
        this.props.history.push('/jobs');
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
                                value={this.state.job_title}
                                onChange={this.onChangeJobTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Job Type: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.job_type}
                                onChange={this.onChangeJobType}
                            />
                        </div>
                        <div className="form-group">
                            <label>City: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company Name: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.company_name}
                                onChange={this.onChangeCompanyName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Job Description: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.job_description}
                                onChange={this.onChangeJobDescription}
                            />
                        </div>
                        <div className="form-group">
                            <label>Salary Offered: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.salary_offered}
                                onChange={this.onChangeSalaryOffered}
                            />
                        </div>
                        <div className="form-group">
                            <label>Skills: </label>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="e.g. ReactJS" defaultValue={this.state.skills[0].skill1} onChange={this.onChangeSkill1} />

                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating1}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Intermediate</option>
                                    <option value="3">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill2} onChange={this.onChangeSkill2} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating2}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Intermediate</option>
                                    <option value="3">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill3} onChange={this.onChangeSkill3} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating3}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Intermediate</option>
                                    <option value="3">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill4} onChange={this.onChangeSkill4} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating4}>
                                    <option disabled selected> -- Select option -- </option>
                                    <option value="1">Beginner</option>
                                    <option value="2">Intermediate</option>
                                    <option value="3">Expert</option>
                                </select>
                            </div>
                            <div className="form-group entry input-group col-xs-3">
                                <input className="form-control" name="skills" type="text" placeholder="" defaultValue={this.state.skills[0].skill5} onChange={this.onChangeSkill5} />
                                <select className="form-control " id="skillSelect" onChange={this.onChangeRating5}>
                                    <option disabled selected> -- Select option -- </option>
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
