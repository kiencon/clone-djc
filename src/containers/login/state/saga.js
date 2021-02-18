import { put, takeLeading } from 'redux-saga/effects';
import {
  loginError,
  loginSuccess,
  LOGIN_REQUEST,
} from './action';
import { loginAPI } from './api';

export function* loginSaga({ payload }) {
  try {
    // eslint-disable-next-line no-console
    console.log('saga LOGIN_REQUEST', payload);
    const response = yield loginAPI(payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* createLoginSaga() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
}
