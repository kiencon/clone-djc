import { put, takeLeading } from 'redux-saga/effects';
import {
  createVehicleInformationError,
  createVehicleInformationSuccess,
  CREATE_VEHICLE_INFORMATION_REQUEST,
} from './action';

export function* createVehicleInformationSaga() {
  try {
    const response = { code: 200 };
    yield put(createVehicleInformationSuccess(response));
  } catch (error) {
    yield put(createVehicleInformationError(error.toString()));
  }
}

export default function* vehicleInformationSaga() {
  yield takeLeading(CREATE_VEHICLE_INFORMATION_REQUEST, createVehicleInformationSaga);
}
