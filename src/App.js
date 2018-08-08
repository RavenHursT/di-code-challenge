import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/">Home</Link>
        </header>
        <main>
          <Route {...{
            exact: true,
            path: `/`,
            component: Home
          }}/>
        </main>
      </div>
    );
  }
}

export default App;
