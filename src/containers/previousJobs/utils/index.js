import { createDriverAndOwnerInfo } from '../../jobcard/driverAndOwnerInfo/state/action';
import { createJobWorksheet } from '../../jobcard/jobWorksheet/state/action';
import { createServiceRecommendation } from '../../jobcard/serviceRecommendation/state/action';
import { createTyreInspection } from '../../jobcard/tyreInspection/state/action';
import { createVehicleInformation } from '../../jobcard/vehicleInformation/state/action';
import { createVehicleInspection } from '../../jobcard/vehicleInspection/state/action';

export const pushJobcardToState = (dispatch, doc) => {
  dispatch(createVehicleInformation({ values: doc.vehicleInformation }));
  dispatch(createDriverAndOwnerInfo({ values: doc.driverAndOwnerInfo }));
  dispatch(createVehicleInspection({ values: doc.vehicleInspection }));
  dispatch(createTyreInspection({ values: doc.tyreInspection }));
  dispatch(createServiceRecommendation({ values: doc.serviceRecommendation }));
  dispatch(createJobWorksheet({ values: doc.jobWorksheet }));
};
