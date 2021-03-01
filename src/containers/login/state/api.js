import { login } from '../../../database/auth';

export const loginAPI = async (username, password) => {
  try {
    return login(username, password);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
