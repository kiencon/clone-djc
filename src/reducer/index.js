import { combineReducers } from 'redux';
import vehicleInformationReducer from '../containers/jobcard/vehicleInformation/state/reducer';
import driverAndOwnerInfoReducer from '../containers/jobcard/driverAndOwnerInfo/state/reducer';
import vehicleInspectionReducer from '../containers/jobcard/vehicleInspection/state/reducer';
import tyreInspectionReducer from '../containers/jobcard/tyreInspection/state/reducer';
import serviceRecommendationReducer from '../containers/jobcard/serviceRecommendation/state/reducer';
import jobWorksheetReducer from '../containers/jobcard/jobWorksheet/state/reducer';

const reducer = combineReducers({
  vehicleInformation: vehicleInformationReducer,
  driverAndOwnerInfo: driverAndOwnerInfoReducer,
  vehicleInspection: vehicleInspectionReducer,
  tyreInspection: tyreInspectionReducer,
  serviceRecommendation: serviceRecommendationReducer,
  jobWorksheet: jobWorksheetReducer,
});

export default reducer;
