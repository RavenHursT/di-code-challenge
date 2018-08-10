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
  faLinkedin,
  faPinterest
} from '@fortawesome/fontawesome-free-brands'
import {
  faThumbsUp,
  faWalking,
  faComments,
  faEye
} from '@fortawesome/free-solid-svg-icons'
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
  faLinkedin,
  faPinterest,
  faThumbsUp,
  faWalking,
  faComments,
  faEye
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
          <Row className={`main-content`}>
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
