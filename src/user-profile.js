import React from 'react'
import connect from 'react-redux/es/connect/connect'
import {bindActionCreators} from 'redux'
import {getUser, getUserProjects} from './store/modules/users'
import {
  Media,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import SocialButtons from './social-buttons'
import Projects from './projects'
import Stats from './stats'
import './user-profile.scss'

class UserProfile extends React.Component {
  componentWillMount () {
    const {
      match: {
        params
      },
      getUser,
      getUserProjects
    } = this.props
    getUser(params.username)
    getUserProjects(params.username)
  }

  render () {
    console.log(this.props)
    const {
      user,
      projects
    } = this.props

    return user ? <Container className="user-profile">
      <Row>
        <Media>
          <Col xs={3}>
            <Media left>
              <img src={user.largestImg} alt={`Profile`} />
            </Media>
            <Stats {...{stats: user.displayStats}}/>
          </Col>
          <Col xs={9}>
            <Media body>
              <Media heading>
                {user.fullName}
              </Media>
              <SocialButtons socialLinks={user.social_links}/>
              <p>{user.sections.About}</p>
              <Projects {...{projects}}/>
            </Media>
          </Col>
        </Media>
      </Row>
    </Container> : null
  }
}

export default connect(
  ({userStore}) => ({
    user: userStore.user,
    fetching: userStore.fetching,
    projects: userStore.projects
  }),
  (dispatch) => bindActionCreators({
    getUser,
    getUserProjects
  }, dispatch)
)(UserProfile)