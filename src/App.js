import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm'

//https://api.github.com/users/sun5hine

class App extends Component {
  state = {
    repos: 
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({repos: repos});
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Github Profile Finder </h1>
        </header>
        <UserForm getUser={this.getUser}/>
        {this.state.repos ? <p> Number of Repos: {this.state.repos} </p> :
        <p> please enter a username </p>}
      </div>
    );
  }
}

export default App;
