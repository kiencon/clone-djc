export const CREATE_SERVICE_RECOMMENDATION_REQUEST = 'CREATE_SERVICE_RECOMMENDATION_REQUEST';

export const createServiceRecommendation = payload => ({
  type: CREATE_SERVICE_RECOMMENDATION_REQUEST,
  payload,
});
