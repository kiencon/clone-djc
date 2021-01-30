import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, Select,
} from 'antd';
import React from 'react';

const { Option } = Select;

const VehicleInformationFormTemplate = ({ form, onSubmit }) => {
  const onVehicleTypeChange = () => {
    // todo
    // console.log(value);
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
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
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

      <Form.Item
        name="vehicleBrand"
        rules={[
          {
            required: true,
            message: 'Vehicle Brand is required',
          },
        ]}
      >
        <Select
          placeholder="Vehicle Brand"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="vehicleModel"
        rules={[
          {
            required: true,
            message: 'Vehicle Model is required',
          },
        ]}
      >
        <Select
          placeholder="Vehicle Model"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="vehicleConfiguration"
        rules={[
          {
            required: true,
            message: 'Vehicle Configuration is required',
          },
        ]}
      >
        <Select
          placeholder="Vehicle Configuration"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="roadApplication"
        rules={[
          {
            required: true,
            message: 'Road Application is required',
          },
        ]}
      >
        <Select
          placeholder="Road Application"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="loading"
        rules={[
          {
            required: true,
            message: 'Loading is required',
          },
        ]}
      >
        <Select
          placeholder="Loading"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="tyreSize"
        rules={[
          {
            required: true,
            message: 'Tyre Size is required',
          },
        ]}
      >
        <Select
          placeholder="Tyre Size"
          onChange={onVehicleTypeChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="speedoMeterReading"
        rules={[
          {
            required: true,
            message: 'Speedo Meter Reading (in km) is required',
          },
        ]}
      >
        <Input
          placeholder="Speedo Meter Reading (in km)"
        />
      </Form.Item>

      <Form.Item
        name="averageMonthlyRunning"
        rules={[
          {
            required: true,
            message: 'Average Monthly Running (in km) is required',
          },
        ]}
      >
        <Input
          placeholder="Average Monthly Running (in km)"
        />
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
