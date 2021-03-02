import { put, takeLeading } from 'redux-saga/effects';
import {
  removeJobError, removeJobSuccess, REMOVE_JOB_REQUEST,
} from './action';
import {
  removeJobAPI,
} from './api';

function* removeJobsheetSaga({ payload }) {
  try {
    const response = yield removeJobAPI(payload.values);
    yield put(removeJobSuccess(response));
  } catch (error) {
    yield put(removeJobError(error));
  }
}

export default function* createRemoveJobsheetSaga() {
  yield takeLeading(REMOVE_JOB_REQUEST, removeJobsheetSaga);
}
