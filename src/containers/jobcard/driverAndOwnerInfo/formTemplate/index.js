import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  Button, Form, Input, AutoComplete,
} from 'antd';
import apiDB from '../../../../database';

const DriverAndOwnerInfoFormTemplate = ({ form, onSubmit }) => {
  const [options, setOptions] = useState([]);

  const onSelect = data => {
    const { doc } = options.find(opt => opt.key === data);
    form.setFieldsValue(doc);
  };

  const onSearch = async searchText => {
    const keys = await apiDB.searchCompanyInfo(searchText)
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
      name="customer-information"
      form={form}
      onFinish={onSubmit}
    >
      <div className="wrapper-information">
        <div className="customerInformation">
          <h3>Owner Information</h3>
          <Form.Item
            name="_rev"
            hidden
          >
            <Input
              placeholder="hidden"
            />
          </Form.Item>

          <Form.Item
            name="companyName"
            rules={[
              {
                required: true,
                message: 'Company Name is required',
              },
            ]}
          >
            <AutoComplete
              options={options}
              onSelect={onSelect}
              onSearch={onSearch}
              placeholder="Company Name"
            />
          </Form.Item>

          <Form.Item
            name="addressStreet"
          >
            <Input
              placeholder="Address Street"
            />
          </Form.Item>

          <Form.Item
            name="city"
          >
            <Input
              placeholder="City"
            />
          </Form.Item>

          <Form.Item
            name="pincode"
          >
            <Input
              placeholder="Pincode"
            />
          </Form.Item>

          <Form.Item
            name="numberOfVehiclesInFleet"
          >
            <Input
              placeholder="Number Of Vehicles In Fleet"
            />
          </Form.Item>

          <Form.Item
            name="ownersName"
          >
            <Input
              placeholder="Owner's Name"
            />
          </Form.Item>

          <Form.Item
            name="ownerContactNumber"
          >
            <Input
              placeholder="Owner Contact Number"
            />
          </Form.Item>

          <Form.Item
            name="ownerEmailAddress"
          >
            <Input
              placeholder="Owner Email Address"
            />
          </Form.Item>

        </div>

        <div className="driverInformation">
          <h3>Driver Information</h3>
          <Form.Item
            name="driverName"
            rules={[
              {
                required: true,
                message: 'Driver Name is required',
              },
            ]}
          >
            <Input
              placeholder="Name"
              suffix={
                <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        }
            />
          </Form.Item>

          <Form.Item
            name="driverContactNumber"
            rules={[
              {
                required: true,
                message: 'Driver Contact Number is required',
              },
            ]}
          >
            <Input
              placeholder="Contact Number"
            />
          </Form.Item>

          <Form.Item
            name="fleetManagerEmailAddress"
          >
            <Input
              placeholder="Fleet Manager Email Address"
            />
          </Form.Item>
        </div>
      </div>
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

export default DriverAndOwnerInfoFormTemplate;
