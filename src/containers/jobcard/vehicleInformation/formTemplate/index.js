import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, Select,
} from 'antd';
import React from 'react';
// import vehicleConfig from '../../utils/vehicleConfig';

const { Option } = Select;

const VehicleInformationFormTemplate = ({ form, onSubmit }) => {
  const onVehicleTypeChange = value => {
    // todo
    console.log(value);
  };

  return (
    <Form
      name="vehicle-information"
      form={form}
      onFinish={onSubmit}
    >
      <Form.Item
        name="vehicleRegistrationNumber"
        rules={[
          {
            required: true,
            message: 'Vehicle Registration Number is required',
          },
        ]}
      >
        <Input
          placeholder="Vehicle Registration Number"
          suffix={
            <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          }
        />
      </Form.Item>

      <Form.Item
        name="vehicleType"
        rules={[
          {
            required: true,
            message: 'Vehicle Type Number is required',
          },
        ]}
      >
        <Select
          placeholder="Vehicle Type"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button className="btn" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VehicleInformationFormTemplate;
