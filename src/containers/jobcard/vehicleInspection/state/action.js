export const CREATE_VEHICLE_INSPECTION_REQUEST = 'CREATE_VEHICLE_INSPECTION_REQUEST';

export const createVehicleInspection = payload => ({
  type: CREATE_VEHICLE_INSPECTION_REQUEST,
  payload,
});