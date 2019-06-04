import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';

const Users = props => (
    <tr>
        <td>{props.user_name}</td>
        <td>{props.user_email}</td>
        <td>{props.user_type}</td>
    </tr>
)

export default class AdminRemoveUsers extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://35.212.88.235/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }
    
    usersList(){
        return this.state.users.map(function(currentUser, i) {
            return <Users user={currentUser} key={i} />;     
        });
    }
    
    render(){
        return(
            <div>   
                <Header />
                <h3 id="jobsage">Users List</h3>
                <div className="card">
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead className="thead-dark">
                            <tr>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>User Type</th>
                                <th>Skills</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.usersList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

//export default AdminRemoveUsers;
