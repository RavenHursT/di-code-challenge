import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import Home from './home'
import UserProfile from './user-profile'
import fontawesome from '@fortawesome/fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/fontawesome-free-brands'
import Nav from './nav'
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap'
import './App.scss'

fontawesome.library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin
)

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <Nav />
          <Jumbotron>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Behance Navigator</h1>
            </header>
          </Jumbotron>
          <Row>
            <Col>
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
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default App;
