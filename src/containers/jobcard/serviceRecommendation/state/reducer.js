import immutable from 'immutable';
import {
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

    default:
      return state;
  }
};

export default serviceRecommendationReducer;
