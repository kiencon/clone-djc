import apiDB from '../../../database';

export const loginAPI = (username, password) => apiDB.login(username, password);
export const removeJobAPI = doc => apiDB.remove(doc);
