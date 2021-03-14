import {
  Button, Form, Input,
} from 'antd';
import React from 'react';

const LoginFormTemplate = ({ form, onSubmit }) => (
  <Form
    name="login"
    form={form}
    onFinish={onSubmit}
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
      <Input placeholder="username" />
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
      <Input.Password placeholder="password" />
    </Form.Item>

    <div className="wrapper-btn">
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </div>
  </Form>
);

export default LoginFormTemplate;
