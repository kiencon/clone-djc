export const REMOVE_JOB_REQUEST = 'REMOVE_JOB_REQUEST';
export const REMOVE_JOB_SUCCESS = 'REMOVE_JOB_SUCCESS';
export const REMOVE_JOB_ERROR = 'REMOVE_JOB_ERROR';
export const CLEAR_JOB_STATE = 'CLEAR_JOB_STATE';

export const EDIT_JOB_REQUEST = 'EDIT_JOB_REQUEST';

export const removeJobRequest = payload => ({
  type: REMOVE_JOB_REQUEST,
  payload,
});

export const removeJobSuccess = response => ({
  type: REMOVE_JOB_SUCCESS,
  response,
});

export const removeJobError = response => ({
  type: REMOVE_JOB_ERROR,
  response,
});

export const editJobRequest = payload => ({
  type: EDIT_JOB_REQUEST,
  payload,
});

export const clearJobState = () => ({
  type: CLEAR_JOB_STATE,
});
