export const selectJobcardReducer = state => state.jobCardInformation;
export const selectJobcard = state => (
  selectJobcardReducer(state)
    ? selectJobcardReducer(state).get('jobCardInformation')
    : {}
);
