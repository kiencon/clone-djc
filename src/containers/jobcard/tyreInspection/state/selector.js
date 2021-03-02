export const selectTyreInspectionReducer = state => state.tyreInspection;
export const selectTyreInspection = state => (
  selectTyreInspectionReducer(state)
    ? selectTyreInspectionReducer(state).get('tyreInspection')
    : {}
);
