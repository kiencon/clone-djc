export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION = 'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const RESTORED_RESULT = 'RESTORED_RESULT';

export const increament = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const add = value => ({
  type: ADDITION,
  payload: value
});

export const sub = value => ({
  type: SUBTRACTION,
  payload: value
});

export const restore = results => ({
  type: RESTORED_RESULT,
  payload: results,
});
