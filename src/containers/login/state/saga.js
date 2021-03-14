import { put, takeLeading } from 'redux-saga/effects';
import {
  loginError,
  loginSuccess,
  LOGIN_REQUEST,
} from './action';
import { loginAPI } from './api';

export function* loginSaga({ payload }) {
  const { username, password } = payload.values;
  try {
    const response = yield loginAPI(username, password);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* createLoginSaga() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
}
