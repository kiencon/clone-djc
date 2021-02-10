import {
  Form, Input,
} from 'antd';
import React from 'react';

const TyreInputComponent = ({ tyre }) => (
  <Form.Item className="tyre-ipt">
    <span className="w120">{tyre}</span>
    <Form.Item name={tyre}>
      <Input />
    </Form.Item>
    <span>Tyres</span>
  </Form.Item>
);

export default TyreInputComponent;
