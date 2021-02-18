export const selectLoggedInformationReducer = state => state.loggedInformation;
export const selectLoggedInformation = state => (
  selectLoggedInformationReducer(state)
    ? selectLoggedInformationReducer(state).get('loggedInformation')
    : {}
);
