import { Form } from 'antd';
import React, {
  useRef, useEffect,
} from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FORM_TYPE } from '../../config/const';
import LoginFormTemplate from './formTemplate/index';
import {
  login, handleReloadPage,
} from './state/action';
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
      history.replace(from);
    }
  }, [from, history, loggedInformation.isLogged, loggedInformation.effect]);

  useEffect(() => {
    if (loggedInformation.isFailLogged) {
      // eslint-disable-next-line no-alert
      alert('username or password is incorect');
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
