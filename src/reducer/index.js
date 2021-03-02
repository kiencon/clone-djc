import { combineReducers } from 'redux';
import driverAndOwnerInfoReducer from '../containers/jobcard/driverAndOwnerInfo/state/reducer';
import jobWorksheetReducer from '../containers/jobcard/jobWorksheet/state/reducer';
import serviceRecommendationReducer from '../containers/jobcard/serviceRecommendation/state/reducer';
import jobCardFormInformationReducer from '../containers/jobcard/state/reducer';
import tyreInspectionReducer from '../containers/jobcard/tyreInspection/state/reducer';
import vehicleInformationReducer from '../containers/jobcard/vehicleInformation/state/reducer';
import vehicleInspectionReducer from '../containers/jobcard/vehicleInspection/state/reducer';
import loggedInformationReducer from '../containers/login/state/reducer';
import removeJobsheetInformationReducer from '../containers/previousJobs/state/reducer';

const reducer = combineReducers({
  vehicleInformation: vehicleInformationReducer,
  driverAndOwnerInfo: driverAndOwnerInfoReducer,
  vehicleInspection: vehicleInspectionReducer,
  tyreInspection: tyreInspectionReducer,
  serviceRecommendation: serviceRecommendationReducer,
  jobWorksheet: jobWorksheetReducer,
  loggedInformation: loggedInformationReducer,
  removeJobsheetInformation: removeJobsheetInformationReducer,
  jobCardInformation: jobCardFormInformationReducer,
});

export default reducer;
