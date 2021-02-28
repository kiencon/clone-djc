export const selectPutJobsheetInformationReducer = state => state.putJobsheetInformation;
export const selectPutJobsheetInformation = state => (
  selectPutJobsheetInformationReducer(state)
    ? selectPutJobsheetInformationReducer(state).get('putJobsheetInformation')
    : {}
);
