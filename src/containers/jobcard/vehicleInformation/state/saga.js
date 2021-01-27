import { put } from 'redux-saga/effects';
import {
  CREATE_VEHICLE_INFORMATION_ERROR,
  CREATE_VEHICLE_INFORMATION_SUCCESS,
} from './action';

export function* createVehicleInformationSage({payload}) {
  try {
    yield put(
      {
        type: CREATE_VEHICLE_INFORMATION_SUCCESS,
        payload
      },
    );
  } catch (error) {
    yield put({ type: CREATE_VEHICLE_INFORMATION_ERROR, error: error.toString() });
  }
};

// export default function* regulationsSaga() {
//   yield takeLeading(UPDATE_REGULATION_REQUEST, updateRegulationSaga);
// }