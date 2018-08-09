import React from 'react'
import connect from 'react-redux/es/connect/connect'
import {bindActionCreators} from 'redux'
import {getUser} from './store/modules/users'

class UserProfile extends React.Component {
  componentWillMount () {
    const {
      match: {
        params
      },
      getUser
    } = this.props
    getUser(params.username)
  }

  render () {
    console.log(this.props.user)
    return <div>Profile</div>
  }
}

export default connect(
  ({userStore}) => ({
    user: userStore.user,
    fetching: userStore.fetching,
  }),
  (dispatch) => bindActionCreators({
    getUser
  }, dispatch)
)(UserProfile)