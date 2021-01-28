import { put, takeLeading } from 'redux-saga/effects';
import {
  createVehicleInformationError,
  createVehicleInformationSuccess,
  CREATE_VEHICLE_INFORMATION_REQUEST,
} from './action';

export function* createVehicleInformationSaga({ payload }) {
  try {
    // eslint-disable-next-line no-console
    console.log('saga CREATE_VEHICLE_INFORMATION_REQUEST', payload);
    const response = { code: 200 };
    yield put(createVehicleInformationSuccess(response));
  } catch (error) {
    yield put(createVehicleInformationError(error.toString()));
  }
}

export default function* vehicleInformationSaga() {
  yield takeLeading(CREATE_VEHICLE_INFORMATION_REQUEST, createVehicleInformationSaga);
}
