export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const HANDLE_RELOAD_PAGE = 'HANDLE_RELOAD_PAGE';
export const LOG_OUT = 'LOG_OUT';

export const login = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const handleReloadPage = () => ({
  type: HANDLE_RELOAD_PAGE,
});

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  response,
});

export const loginError = response => ({
  type: LOGIN_ERROR,
  response,
});

export const logOutRequest = () => ({
  type: LOG_OUT,
});
