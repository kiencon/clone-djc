export const CREATE_JOB_WORKSHEET_REQUEST = 'CREATE_JOB_WORKSHEET_REQUEST';

export const createJobWorksheet = payload => ({
  type: CREATE_JOB_WORKSHEET_REQUEST,
  payload,
});
