export const CREATE_DRIVER_OWNER_INFORMATION_REQUEST = 'CREATE_DRIVER_OWNER_INFORMATION_REQUEST';
export const CLEAR_DRIVER_OWNER_INFORMATION = 'CLEAR_DRIVER_OWNER_INFORMATION';

export const createDriverAndOwnerInfo = payload => ({
  type: CREATE_DRIVER_OWNER_INFORMATION_REQUEST,
  payload,
});

export const clearDriverAndOwnerState = () => ({
  type: CLEAR_DRIVER_OWNER_INFORMATION,
});
