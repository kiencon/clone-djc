export const CREATE_TYRE_INSPECTION_REQUEST = 'CREATE_TYRE_INSPECTION_REQUEST';
export const CLEAR_TYRE_INPSECTION_STATE = 'CLEAR_TYRE_INPSECTION_STATE';

export const createTyreInspection = payload => ({
  type: CREATE_TYRE_INSPECTION_REQUEST,
  payload,
});

export const clearTyreInspectionState = () => ({
  type: CLEAR_TYRE_INPSECTION_STATE,
});
