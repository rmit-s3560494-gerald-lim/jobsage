import React from 'react';
import './App.css';
// import Header from './Header';
import axios from 'axios';



const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Users: {props.totalUsers}</span>
        </header>
    );
}
      
const User = (props) => {
    return(
        <div className = "user">
            <span className = "user-name">
                <button className="remove-user" onClick={()=>props.removeUser(props.id)}>x</button>
                {props.name}
            </span>

            
        </div>
    );
}

class AdminRemoveUsers extends React.Component {
    state = {
        users: []
    };

    componentWillMount() {
        axios.get('http://35.212.88.235/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
    }

    handleRemoveUser = (id) => {
        this.setState(prevState => {
            return{
                users: prevState.users.filter(p => p.id !== id) 
            };
        });
    }

    render(){
        return(
            <div className="userlist">
                <Header 
                    title="User Accounts" 
                    totalUsers={this.state.users.length}
                />
                
                {this.state.users.map( user =>
                    <User
                    name={user.user_name}
                    // score={user.score}

                    // key={user.id.toString()}
                    removeUser = {this.handleRemoveUser}
                    />
                )}
                
            </div>
        );
    }
}

export default AdminRemoveUsers;
