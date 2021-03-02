export const selectRemoveJobsheetInformationReducer = state => state.removeJobsheetInformation;
export const selectRemoveJobsheetInformation = state => (
  selectRemoveJobsheetInformationReducer(state)
    ? selectRemoveJobsheetInformationReducer(state).get('removeJobsheetInformation')
    : {}
);
