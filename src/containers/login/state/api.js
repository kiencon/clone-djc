import db from '../../../database';
import { login } from '../../../database/auth';

export const loginAPI = async (username, password) => {
  try {
    return login(username, password).then(async res => {
      await db.startSyncFirstTime(false);
      return res;
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
