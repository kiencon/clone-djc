import immutable from 'immutable';
import {
  CLEAR_SERVICE_RECOMMENDATION_STATE,
  CREATE_SERVICE_RECOMMENDATION_REQUEST,
} from './action';

const initialState = {
  serviceRecommendation: {},
};

const init = () => {
  const initValue = immutable.fromJS({
    serviceRecommendation: undefined,
  });

  return initValue
    .set('serviceRecommendation', {
      ...initialState,
    });
};

const serviceRecommendationReducer = (state = init(), action) => {
  switch (action.type) {
    case CREATE_SERVICE_RECOMMENDATION_REQUEST: {
      const { values } = action.payload;
      return state.set('serviceRecommendation', {
        ...values,
      });
    }

    case CLEAR_SERVICE_RECOMMENDATION_STATE: {
      return state.set('serviceRecommendation', {
        ...initialState,
      });
    }

    default:
      return state;
  }
};

export default serviceRecommendationReducer;
