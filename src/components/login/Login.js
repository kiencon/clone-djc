import { useState } from 'react';
import { Form, Input, Button } from 'antd';

import Dashboard from '../dashboard/Dashboard';

const Login = () => {
  // todo using reduxt store state logged user
  const [user, setUser] = useState('');

  if (user) {
    return (
      <Dashboard />
    )
  }

  const onFinish = ({ username }) => {
    localStorage.setItem('user', username);
    setUser(username);
  };

  const onFinishFailed = (errorInfo) => {
    // todo toast notify
    alert('Failed:', JSON.stringify(errorInfo, null, 2));
  };

  return (
    <>
      <div className="login container">
        <h1>Login</h1>
        <p>Please provide your username and password</p>
        <div className="form-login">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button className="btn-login" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
