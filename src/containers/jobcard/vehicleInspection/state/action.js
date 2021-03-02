export const CREATE_VEHICLE_INSPECTION_REQUEST = 'CREATE_VEHICLE_INSPECTION_REQUEST';
export const CLEAR_VEHICLE_INPSECTION_STATE = 'CLEAR_VEHICLE_INPSECTION_STATE';

export const createVehicleInspection = payload => ({
  type: CREATE_VEHICLE_INSPECTION_REQUEST,
  payload,
});

export const clearVehicleInspectionState = () => ({
  type: CLEAR_VEHICLE_INPSECTION_STATE,
});
