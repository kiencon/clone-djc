export const CREATE_VEHICLE_INFORMATION_REQUEST = 'CREATE_VEHICLE_INFORMATION_REQUEST';
export const CREATE_VEHICLE_INFORMATION_SUCCESS = 'CREATE_VEHICLE_INFORMATION_SUCCESS';
export const CREATE_VEHICLE_INFORMATION_ERROR = 'CREATE_VEHICLE_INFORMATION_ERROR';
export const CLEAR_VEHICLE_INFORMATION_STATE = 'CLEAR_VEHICLE_INFORMATION_STATE';

export const createVehicleInformation = payload => ({
  type: CREATE_VEHICLE_INFORMATION_REQUEST,
  payload,
});

export const createVehicleInformationSuccess = response => ({
  type: CREATE_VEHICLE_INFORMATION_SUCCESS,
  response,
});

export const createVehicleInformationError = response => ({
  type: CREATE_VEHICLE_INFORMATION_ERROR,
  response,
});

export const clearVehicleInformationState = () => ({
  type: CLEAR_VEHICLE_INFORMATION_STATE,
});
