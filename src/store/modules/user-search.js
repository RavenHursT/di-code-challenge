import usersService from '../../services/users.service'
const USER_SEARCH_UPDATE = `USER_SEARCH_UPDATE`
const USER_SEARCH_CLEAR = `USER_SEARCH_CLEAR`
const USER_SEARCH_REQ = `USER_SEARCH_REQ`

const initState = {
  users: [],
  isSearching: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case USER_SEARCH_REQ:
      return {
        ...state,
        isSearching: true
      }
    case USER_SEARCH_UPDATE:
      return {
        ...state,
        users: action.users,
        isSearching: false
      }
    case USER_SEARCH_CLEAR:
      return {
        ...initState
      }
    default:
      return state
  }
}

export const search = (q) => dispatch => {
  dispatch({
    type: USER_SEARCH_REQ
  })

  return usersService.find(q).then(
    respBody => dispatch({
      type: USER_SEARCH_UPDATE,
      users: respBody.users
    })
  )
}

export const clear = () => dispatch => {
  dispatch({
    type:USER_SEARCH_CLEAR
  })
}