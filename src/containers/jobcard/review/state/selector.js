export const selectVehicleInformationReducer = state => state.vehicleInformation;
export const selectVehicleInformation = state => (
  selectVehicleInformationReducer(state)
    ? selectVehicleInformationReducer(state).get('vehicleInformation')
    : {}
);
export const selectDriverAndOwnerInfoReducer = state => state.driverAndOwnerInfo;
export const selectDriverAndOwnerInfo = state => (
  selectDriverAndOwnerInfoReducer(state)
    ? selectDriverAndOwnerInfoReducer(state).get('driverAndOwnerInfo')
    : {}
);
