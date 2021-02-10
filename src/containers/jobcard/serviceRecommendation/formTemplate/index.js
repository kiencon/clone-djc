import {
  Form, Select, Button,
} from 'antd';
import React from 'react';

const { Option } = Select;

const ServiceRecommendationTemplate = ({ form, onSubmit }) => (
  <Form
    name="service-recommendation"
    form={form}
    onFinish={onSubmit}
  >
    <ul>
      <li>
        <p>For rated load, keep air pressure of radial tyres to 130psi and nylon tyres to 120psi</p>
      </li>
      <li>
        <p>Check alignment after every 10000(km)</p>
      </li>
      <li>
        <p>Other Observations and Recommendations</p>
        <Form.Item
          name="otherRecommendation"
        >
          <Select
            allowClear
            className="custom-ant-select-dropdown"
          >
            <Option value="Mechanical fault observed in your vehicle. Please fix the issue and come back for alignment">
              Mechanical fault observed in your vehicle. Please fix the issue and come back for alignment
            </Option>
            <Option value="Problem observed but done alignment with permission of Driver and/or Owner">
              Problem observed but done alignment with permission of Driver and/or Owner
            </Option>
            <Option value="As alignment carried out in empty vehicle, please tighten U bolts while loading the vehicle">
              As alignment carried out in empty vehicle, please tighten U bolts while loading the vehicle
            </Option>
          </Select>
        </Form.Item>
      </li>
    </ul>
    <div className="wrapper-btn">
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </div>
  </Form>
);

export default ServiceRecommendationTemplate;
