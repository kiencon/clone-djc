export const selectServiceRecommendationReducer = state => state.serviceRecommendation;
export const selectServiceRecommendation = state => (
  selectServiceRecommendationReducer(state)
    ? selectServiceRecommendationReducer(state).get('serviceRecommendation')
    : {}
);
