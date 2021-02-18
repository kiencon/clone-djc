import apiDB from '../../../database';

export const loginAPI = (username, password) => {
  if (apiDB.login(username, password)) {
    return;
  }
  throw Error('User name or password is incorect');
};
