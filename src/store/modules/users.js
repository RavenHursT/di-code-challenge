import usersService from '../../services/users.service'
import {
  populateUserMetaFields
} from '../../util/users.util'
export const USERS_SEARCH_UPDATE = `USER_SEARCH_UPDATE`
export const USERS_SEARCH_CLEAR = `USER_SEARCH_CLEAR`
export const USERS_FETCH_REQ = `USER_FETCH_REQ`
export const USERS_GET_USER = `USERS_GET_USER`
export const USERS_GET_PROJECTS = `USERS_GET_PROJECTS`
export const USERS_GET_FOLLOWERS = `USERS_GET_FOLLOWERS`
export const USERS_GET_FOLLOWING = `USERS_GET_FOLLOWING`
export const USERS_GET_WORK_EXP = `USERS_GET_WORK_EXP`

const initState = {
  users: [],
  projects: [],
  workExp: [],
  followers: [],
  following: [],
  user: null,
  fetching: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case USERS_FETCH_REQ:
      return {
        ...state,
        fetching: true
      }
    case USERS_SEARCH_UPDATE:
      return {
        ...state,
        users: action.users,
        fetching: false
      }
    case USERS_SEARCH_CLEAR:
      return {
        ...initState
      }
    case USERS_GET_USER:
      return {
        ...state,
        user: action.user
      }
    case USERS_GET_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        fetching: false
      }
    case USERS_GET_WORK_EXP:
      return {
        ...state,
        workExp: action.workExp,
        fetching: false
      }
    case USERS_GET_FOLLOWERS:
      return {
        ...state,
        followers: action.followers,
        fetching: false
      }
    case USERS_GET_FOLLOWING:
      return {
        ...state,
        following: action.following,
        fetching: false
      }
    default:
      return state
  }
}

export const search = (q) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.find(q).then(
    respBody => dispatch({
      type: USERS_SEARCH_UPDATE,
      users: respBody.users
    })
  )
}

export const getUser = (username) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.getByUsername(username).then(
    ({user}) => {
      return dispatch({
        type: USERS_GET_USER,
        user : populateUserMetaFields(user)
      })
    }
  )
}

export const getUserProjects = (username) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.getUsersProjects(username).then(
    ({projects}) => dispatch({
      type: USERS_GET_PROJECTS,
      projects
    })
  )
}

export const getUserFollowers = (username) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.getUsersFollowers(username).then(
    ({followers}) => dispatch({
      type: USERS_GET_FOLLOWERS,
      followers: followers.map(populateUserMetaFields)
    })
  )
}

export const getUserFollowing = (username) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.getUsersFollowing(username).then(
    ({following}) => dispatch({
      type: USERS_GET_FOLLOWING,
      following: following.map(populateUserMetaFields)
    })
  )
}

export const getUserWorkExp = (username) => dispatch => {
  dispatch({
    type: USERS_FETCH_REQ
  })

  return usersService.getUserWorkExperience(username).then(
    ({work_experience: workExp}) => dispatch({
      type: USERS_GET_WORK_EXP,
      workExp
    })
  )
}

export const clear = () => dispatch => {
  dispatch({
    type:USERS_SEARCH_CLEAR
  })
}