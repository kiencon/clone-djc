export const CREATE_SERVICE_RECOMMENDATION_REQUEST = 'CREATE_SERVICE_RECOMMENDATION_REQUEST';
export const CLEAR_SERVICE_RECOMMENDATION_STATE = 'CLEAR_SERVICE_RECOMMENDATION_STATE';

export const createServiceRecommendation = payload => ({
  type: CREATE_SERVICE_RECOMMENDATION_REQUEST,
  payload,
});

export const clearServiceRecommendationState = () => ({
  type: CLEAR_SERVICE_RECOMMENDATION_STATE,
});
