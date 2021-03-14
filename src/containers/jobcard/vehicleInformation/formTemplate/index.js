import {
  AutoComplete, Button, Form, Input, Select,
} from 'antd';
import React, { useState } from 'react';
import apiDB from '../../../../database';

const { Option } = Select;

const VehicleInformationFormTemplate = ({ form, onSubmit }) => {
  const [options, setOptions] = useState([]);

  const onSelect = data => {
    const { doc } = options.find(opt => opt.key === data);
    console.log('onSelect', doc);
    form.setFieldsValue(doc);
  };

  const onSearch = async searchText => {
    const keys = await apiDB.searchVehicleNumber(searchText)
      .then(({ rows }) => rows.map(e => ({
        key: e.id,
        value: e.key,
        doc: e.doc,
      })));
    setOptions(
      searchText ? keys : [],
    );
  };

  return (
    <Form
      name="vehicle-information"
      form={form}
      onFinish={onSubmit}
    >
      <Form.Item
        name="_rev"
        hidden
      >
        <Input
          placeholder="hidden"
        />
      </Form.Item>

      <Form.Item
        name="vehicleRegistrationNumber"
        rules={[
          {
            required: true,
            message: 'Vehicle Registration Number is required',
          },
        ]}
      >
        <AutoComplete
          options={options}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Vehicle Registration Number"
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
          allowClear
        >
          <Option value="Truck">Truck</Option>
          <Option value="Bus and Coach">Bus and Coach</Option>
          <Option value="ICV">ICV</Option>
          <Option value="LCV">LCV</Option>
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
          allowClear
        >
          <Option value="Ashok Leyland">Ashok Leyland</Option>
          <Option value="Bharat Benz">Bharat Benz</Option>
          <Option value="Eicher">Eicher</Option>
          <Option value="Tata">Tata</Option>
          <Option value="Mahindra">Mahindra</Option>
          <Option value="Others">Others</Option>
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
          allowClear
        >
          <Option value="3531">3531</Option>
          <Option value="Pro 5025">Pro 5025</Option>
          <Option value="Pro 6031">Pro 6031</Option>
          <Option value="Pro 6037">Pro 6037</Option>
          <Option value="Others">Others</Option>
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
          allowClear
        >
          <Option value="4x2 (6 Wheeler)">4x2 (6 Wheeler)</Option>
          <Option value="6x2 (10 Wheeler)">6x2 (10 Wheeler)</Option>
          <Option value="6x4 (10 Wheeler)">6x4 (10 Wheeler)</Option>
          <Option value="8x2x4 (Twin steer 12 W)">8x2x4 (Twin steer 12 W)</Option>
          <Option value="8x4 (12 Wheeler)">8x4 (12 Wheeler)</Option>
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
          allowClear
        >
          <Option value="Moderate Load">Moderate Load</Option>
          <Option value="Rated Load">Rated Load</Option>
          <Option value="Long Distance / National">Long Distance / National</Option>
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
          allowClear
        >
          <Option value="Heavy Load">Heavy Load</Option>
          <Option value="Moderate Load">Moderate Load</Option>
          <Option value="Rated Load">Rated Load</Option>
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
          allowClear
        >
          <Option value="10.00 R 20">10.00 R 20</Option>
          <Option value="11 R 22.5">11 R 22.5</Option>
          <Option value="11.00 R 20">11.00 R 20</Option>
          <Option value="12.00-20">12.00-20</Option>
          <Option value="12.00-24">12.00-24</Option>
          <Option value="215/75 R 17.5">215/75 R 17.5</Option>
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

      <div className="wrapper-btn">
        <Form.Item>
          <Button className="btn" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default VehicleInformationFormTemplate;
