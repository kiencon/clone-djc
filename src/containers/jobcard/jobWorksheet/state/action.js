export const CREATE_JOB_WORKSHEET_REQUEST = 'CREATE_JOB_WORKSHEET_REQUEST';
export const CLEAR_JOB_WORKSHEET_STATE = 'CLEAR_JOB_WORKSHEET_STATE';

export const createJobWorksheet = payload => ({
  type: CREATE_JOB_WORKSHEET_REQUEST,
  payload,
});

export const clearJobWorksheetState = () => ({
  type: CLEAR_JOB_WORKSHEET_STATE,
});
