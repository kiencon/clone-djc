import { combineReducers } from 'redux';
import vehicleInformationReducer from '../containers/jobcard/vehicleInformation/state/reducer';

const reducer = combineReducers({
  vehicleInformation: vehicleInformationReducer,
});

export default reducer;
