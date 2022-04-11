import { authService } from "../services/auth.service";

export const userActions = {
  login,
  logout,
  getAll,
};

export const AUTH_ACTIONS = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGOUT: "USERS_LOGOUT",

  GETALL_REQUEST: "USERS_GETALL_REQUEST",
  GETALL_SUCCESS: "USERS_GETALL_SUCCESS",
  GETALL_FAILURE: "USERS_GETALL_FAILURE",
};

function login(username, password) {
  console.log("here in login");

  return (dispatch) => {
    dispatch(request({ username }));

    authService.login(username, password).then(
      (user) => {
        dispatch(success(user));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(user) {
    return { type: AUTH_ACTIONS.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: AUTH_ACTIONS.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.LOGIN_FAILURE, error };
  }
}

function logout() {
  authService.logout();
  return { type: AUTH_ACTIONS.LOGOUT };
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    authService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: AUTH_ACTIONS.GETALL_REQUEST };
  }
  function success(users) {
    return { type: AUTH_ACTIONS.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.GETALL_FAILURE, error };
  }
}
