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

export const selectVehicleInspectionReducer = state => state.vehicleInspection;
export const selectVehicleInspection = state => (
  selectVehicleInspectionReducer(state)
    ? selectVehicleInspectionReducer(state).get('vehicleInspection')
    : {}
);

export const selectTyreInspectionReducer = state => state.tyreInspection;
export const selectTyreInspection = state => (
  selectTyreInspectionReducer(state)
    ? selectTyreInspectionReducer(state).get('tyreInspection')
    : {}
);

export const selectJobWorksheetReducer = state => state.jobWorksheet;
export const selectJobWorksheet = state => (
  selectJobWorksheetReducer(state)
    ? selectJobWorksheetReducer(state).get('jobWorksheet')
    : {}
);

export const selectServiceRecommendationReducer = state => state.serviceRecommendation;
export const selectServiceRecommendation = state => (
  selectServiceRecommendationReducer(state)
    ? selectServiceRecommendationReducer(state).get('serviceRecommendation')
    : {}
);
