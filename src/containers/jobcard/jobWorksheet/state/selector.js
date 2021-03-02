export const selectJobWorksheetReducer = state => state.jobWorksheet;
export const selectJobWorksheet = state => (
  selectJobWorksheetReducer(state)
    ? selectJobWorksheetReducer(state).get('jobWorksheet')
    : {}
);
