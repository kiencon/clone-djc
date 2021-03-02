export const EDIT_JOB_REQUEST = 'EDIT_JOB_REQUEST';
export const editJobRequest = payload => ({
  type: EDIT_JOB_REQUEST,
  payload,
});

export const RESET_JOBCARD_FORM = 'RESET_JOBCARD_FORM';
export const resetJobcardForm = () => ({
  type: RESET_JOBCARD_FORM,
});

export const REVIEW_JOB_REQUEST = 'REVIEW_JOB_REQUEST';
export const reviewJobRequest = () => ({
  type: REVIEW_JOB_REQUEST,
});
