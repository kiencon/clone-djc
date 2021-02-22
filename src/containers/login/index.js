import { Form } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';
import { FORM_TYPE } from '../../config/const';
import { openNotification } from '../utils';
import LoginFormTemplate from './formTemplate/index';
import { handleReloadPage, login } from './state/action';
import { selectLoggedInformation } from './state/selector';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const {
    loggedInformation,
  } = useSelector(
    state => ({
      loggedInformation: selectLoggedInformation(state),
    }),
  );

  useEffect(() => {
    if (localStorage.getItem('isLoggedD2Tyres')) {
      dispatch(handleReloadPage());
    }
  }, [dispatch]);

  useEffect(() => {
    if (loggedInformation.isLogged) {
      openNotification('loggin successfully');
      history.replace(from);
    }
  }, [from, history, loggedInformation.isLogged, loggedInformation.effect]);

  useEffect(() => {
    if (loggedInformation.isFailLogged) {
      openNotification('username or password is incorect');
    }
  }, [loggedInformation.isFailLogged, loggedInformation.effect]);

  const [form] = Form.useForm();

  const onAdd = values => {
    dispatch(login({
      values,
    }));
  };

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="login container">
        <h1>Login</h1>
        <div className="form">
          <LoginFormTemplate
            form={form}
            onSubmit={formRef.current.onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
