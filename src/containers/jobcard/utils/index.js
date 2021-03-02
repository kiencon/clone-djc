import { clearDriverAndOwnerState } from '../driverAndOwnerInfo/state/action';
import { clearJobWorksheetState } from '../jobWorksheet/state/action';
import { clearServiceRecommendationState } from '../serviceRecommendation/state/action';
import { clearTyreInspectionState } from '../tyreInspection/state/action';
import { clearVehicleInformationState } from '../vehicleInformation/state/action';
import { clearVehicleInspectionState } from '../vehicleInspection/state/action';

export const removeJobcardFromStore = dispatch => {
  dispatch(clearVehicleInformationState());
  dispatch(clearDriverAndOwnerState());
  dispatch(clearVehicleInspectionState());
  dispatch(clearTyreInspectionState());
  dispatch(clearJobWorksheetState());
  dispatch(clearServiceRecommendationState());
};
