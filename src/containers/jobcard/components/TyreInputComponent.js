import {
  Form, Input,
} from 'antd';
import React from 'react';

const TyreInputComponent = ({ tyre }) => (
  <Form.Item labelCol={{ span: 6 }} name={tyre} label={tyre}>
    <Input />
    <span>Tyres</span>
  </Form.Item>
);

export default TyreInputComponent;
