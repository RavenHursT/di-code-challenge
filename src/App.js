import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import UserProfile from './user-profile'
import { Jumbotron } from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Behance Navigator</h1>
            <Link to="/">Home</Link>
          </header>
        </Jumbotron>
        <main>
          <Route {...{
            exact: true,
            path: `/`,
            component: Home
          }}/>
          <Route {...{
            exact: true,
            path: `/:username`,
            component: UserProfile
          }} />
        </main>
      </div>
    );
  }
}

export default App;
