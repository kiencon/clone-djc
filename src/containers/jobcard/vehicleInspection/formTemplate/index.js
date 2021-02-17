import {
  Button, Col, Form, Row,
} from 'antd';
import React from 'react';
import InspectionComponent from '../../components/InspectionComponent';
import {
  VEHICLE_INSPECTION_DATA,
} from '../../utils/inspectionHelper';

const VehicleInspectionTemplate = ({ form, onSubmit }) => (
  <Form
    form={form}
    name="vehicle-inspection"
    onFinish={onSubmit}
  >
    <Row>
      <Col span={8}>
        <div><h3>Vehicle parts inspection</h3></div>
      </Col>
      <Col span={4}>
        <div />
      </Col>
      <Col span={12}>
        <div><h3>Comments</h3></div>
      </Col>
      <Col span={8}>
        <div />
      </Col>
      <Col span={4}>
        <div>
          <span style={{ paddingRight: '30px' }}>OK</span>
          <span>Not OK</span>
        </div>
      </Col>
      <Col span={12}>
        <div />
      </Col>
    </Row>
    {
      VEHICLE_INSPECTION_DATA.map(({ label, comments }) => (
        <InspectionComponent key={label} serviceName={label} comments={comments} />
      ))
    }
    <div className="wrapper-btn">
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </div>

  </Form>
);

export default VehicleInspectionTemplate;
