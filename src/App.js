import React, { Component } from 'react';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import UserPage from './UserPage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: null
    }
  }

  componentDidMount() {
    this.setState({ isLoggedIn: true });
  }

  login = (username, password) => {
    if (username === 'jzanderson09' &&
    password === 'password123') {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    if (this.state.isLoggedIn === null ||
    this.state.isLoggedIn === false) {
      return (
        <div className="App-container">
          <Navigation />
          <LandingPage 
            login={this.login}
          />
        </div>
      );
    }
    else {
      return (
        <div className='App-container'>
          <Navigation />
          <UserPage />
        </div>
      );
    }
  }
}

export default App;
