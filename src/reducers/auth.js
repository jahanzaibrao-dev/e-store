import { AUTH_ACTIONS } from '../actions/auth'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : { loggedIn: false }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        loggedIn: false,
        user: action.user
      }
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        loggingIn: false
      }
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
        error: action.error
      }
    case AUTH_ACTIONS.SIGNUP_REQUEST:
      return {
        loggedIn: false,
        loggingIn: false,
        user: action.user
      }
    case AUTH_ACTIONS.SIGNUP_FAILURE:
      return {
        loggedIn: false,
        loggingIn: false,
        error: action.error
      }
    case AUTH_ACTIONS.LOGOUT:
      return {
        loggedIn: false
      }
    default:
      return state
  }
}
