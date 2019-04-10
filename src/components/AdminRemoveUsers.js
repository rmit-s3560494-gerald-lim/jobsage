import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-lin
const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Users: {props.totalPlayers}</span>
        </header>
    );
}
      
const Player = (props) => {
    return(
        <div className = "player">
            <span className = "player-name">
                <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>

            
        </div>
    );
}

class AdminRemoveUsers extends React.Component {
    state = {
        players: [
            {
                name: "Richard",
                id: 1
            },
            {
                name: "Alex",
                id: 2
            },
            {
                name: "Pearce",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return{
                players: prevState.players.filter(p => p.id !== id) 
            };
        });
    }

    render(){
        return(
            <div className="userlist">
                <Header 
                    title="User Accounts" 
                    totalPlayers={this.state.players.length}
                />
                
                {this.state.players.map( player =>
                    <Player
                    name={player.name}
                    id = {player.id}
                    score={player.score}
                    key={player.id.toString()}
                    removePlayer = {this.handleRemovePlayer}
                    />
                )}
                
            </div>
        );
    }
}

export default AdminRemoveUsers;

//ReactDOM.render(
    //<App />,
    //document.getElementById('root')
//);