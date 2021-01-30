import { combineReducers } from 'redux';
import vehicleInformationReducer from '../containers/jobcard/vehicleInformation/state/reducer';
import driverAndOwnerInfoReducer from '../containers/jobcard/driverAndOwnerInfo/state/reducer';

const reducer = combineReducers({
  vehicleInformation: vehicleInformationReducer,
  driverAndOwnerInfo: driverAndOwnerInfoReducer,
});

export default reducer;
