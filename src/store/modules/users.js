import usersService from '../../services/users.service'
export const USERS_SEARCH_UPDATE = `USER_SEARCH_UPDATE`
export const USERS_SEARCH_CLEAR = `USER_SEARCH_CLEAR`
export const USERS_FETCH_REQ = `USER_FETCH_REQ`
export const USERS_GET_USER = `USERS_GET_USER`

const initState = {
  users: [],
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
    resBody => dispatch({
      type: USERS_GET_USER,
      user: resBody.user
    })
  )
}

export const clear = () => dispatch => {
  dispatch({
    type:USERS_SEARCH_CLEAR
  })
}