import {
  Form, Checkbox,
} from 'antd';
import React from 'react';

const CheckboxComponent = ({ serviceName }) => (
  <Form.Item>
    <Form.Item name={serviceName} valuePropName="checked" noStyle>
      <Checkbox>{serviceName}</Checkbox>
    </Form.Item>
  </Form.Item>
);

export default CheckboxComponent;
