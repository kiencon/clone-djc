import { notification } from 'antd';

export const openNotification = msg => {
  const args = {
    description: msg,
    duration: 2,
  };
  notification.open(args);
};
