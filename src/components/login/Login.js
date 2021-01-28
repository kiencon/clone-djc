import { Button, Form, Input } from 'antd';
import React from 'react';

const Login = ({
  onFinish,
  onFinishFailed,
}) => (
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

export default Login;
