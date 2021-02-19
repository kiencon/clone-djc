export const selectDriverAndOwnerInfoReducer = state => state.driverAndOwnerInfo;
export const selectDriverAndOwnerInfo = state => (
  selectDriverAndOwnerInfoReducer(state)
    ? selectDriverAndOwnerInfoReducer(state).get('driverAndOwnerInfo')
    : {}
);
