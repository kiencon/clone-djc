import { all } from 'redux-saga/effects';
import vehicleInformationSaga from '../containers/jobcard/vehicleInformation/state/saga';
import createLoginSaga from '../containers/login/state/saga';

export default function* rootSaga() {
  yield all([
    vehicleInformationSaga(),
    createLoginSaga(),
  ]);
}
