export const CREATE_JOBCARD_REQUEST = 'CREATE_JOBCARD_REQUEST';

export const createJobcard = payload => ({
  type: CREATE_JOBCARD_REQUEST,
  payload,
});
