import { put, takeLeading } from 'redux-saga/effects';
import {
  loginError,
  loginSuccess,
  LOGIN_REQUEST,
} from './action';
import { loginAPI } from './api';

export function* loginSaga({ payload }) {
  const { username, password } = payload.values;
  const response = yield loginAPI(username, password);
  if (response) {
    yield put(loginSuccess(response));
  } else {
    yield put(loginError(response));
  }
}

export default function* createLoginSaga() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
}
