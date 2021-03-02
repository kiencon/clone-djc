export const selectVehicleInformationReducer = state => state.vehicleInformation;
export const selectVehicleInformation = state => (
  selectVehicleInformationReducer(state)
    ? selectVehicleInformationReducer(state).get('vehicleInformation')
    : {}
);
