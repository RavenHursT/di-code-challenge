import React from 'react'
import connect from 'react-redux/es/connect/connect'
import { Route } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {
  getUser,
  getUserProjects,
  getUserWorkExp,
  getUserFollowers,
  getUserFollowing
} from './store/modules/users'
import {
  Media,
  Container,
  Row,
  Col
} from 'reactstrap'
import {Link} from 'react-router-dom'
import SocialButtons from './social-buttons'
import Projects from './projects'
import Stats from './stats'
import WorkExp from './work-exp'
import UserList from './users-list'
import './user-profile.scss'

class UserProfile extends React.Component {
  componentWillMount () {
    const {
      match: {
        params
      },
      getUser,
      getUserProjects,
      getUserWorkExp,
      getUserFollowers,
      getUserFollowing
    } = this.props
    getUser(params.username)
    getUserProjects(params.username)
    getUserWorkExp(params.username)
    getUserFollowers(params.username)
    getUserFollowing(params.username)
  }

  render () {
    const {
      user,
      projects,
      workExp,
      match,
      followers,
      following
    } = this.props
    return user ? <Container className="user-profile">
      <Row>
        <Media className={`col-12`}>
          <Col xs={3}>
            <Media left>
              <Link to={match.url}>
                <img src={user.largestImg} alt={`Profile`} />
              </Link>
            </Media>
            <Stats {...{
              stats: user.displayStats,
              match
            }} />
            <WorkExp {...{workExp}} />
          </Col>
          <Col xs={9}>
            <Media body>
              <Route {...{
                exact: true,
                path: `${match.path}/`,
                component: () => <div>
                  <Media heading>
                    {user.fullName}
                  </Media>
                  <SocialButtons socialLinks={user.social_links}/>
                  <p>{user.sections.About}</p>
                  <Projects {...{projects}}/>
                </div>
              }} />
              <Route {...{
                exact: true,
                path: `${match.path}/followers`,
                component: () => <div>
                  <Media heading>
                    Followers
                  </Media>
                  <UserList {...{users: followers}} />
                </div>
              }}/>
              <Route {...{
                exact: true,
                path: `${match.path}/following`,
                component: () => <div>
                  <Media heading>
                    Following
                  </Media>
                  <UserList {...{users: following}} />
                </div>
              }}/>
            </Media>
          </Col>
        </Media>
      </Row>
    </Container> : null
  }
}

export default connect(
  ({userStore: {user, fetching, projects, workExp, followers, following}}) => ({
    user,
    fetching,
    projects,
    workExp,
    followers,
    following
  }),
  (dispatch) => bindActionCreators({
    getUser,
    getUserProjects,
    getUserWorkExp,
    getUserFollowers,
    getUserFollowing
  }, dispatch)
)(UserProfile)