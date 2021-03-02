export const selectVehicleInspectionReducer = state => state.vehicleInspection;
export const selectVehicleInspection = state => (
  selectVehicleInspectionReducer(state)
    ? selectVehicleInspectionReducer(state).get('vehicleInspection')
    : {}
);
