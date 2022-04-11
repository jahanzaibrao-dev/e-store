import { AUTH_ACTIONS } from "../actions/auth";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {};
    case AUTH_ACTIONS.LOGOUT:
      return {};
    default:
      return state;
  }
}
