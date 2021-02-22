import apiDB from '../../../database';

export const loginAPI = (username, password) => apiDB.login(username, password);
