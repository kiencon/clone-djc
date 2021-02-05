import {
  Button, Col, Form, Row,
} from 'antd';
import React from 'react';
import InspectionComponent from '../../components/InspectionComponent';

const TYRE_INSPECTION_DATA = [{
  label: 'Misalignment',
  comments: ['Uneven wear in tyres due to misalignment'],
}, {
  label: 'Pattern Mismatch',
  comments: [
    'Radial and Nylon tyres on same axle',
    'Steering pattern tyres at drive axle',
    'Drive pattern tyres at steering axle',
  ],
}, {
  label: 'Air Pressure Mismatch',
  comments: [
    'Mismatch of air pressure in dual tyres',
    'Uneven pressure in tyres',
  ],
}, {
  label: 'Disc Holes Mismatch',
  comments: [
    'Holes mismatch in outer & inner tyres',
    'Non accessibilty of inner tyre valves (Inner tyre valves bent and touches the rim)',
  ],
}, {
  label: 'Cuts & Damages In Tyres',
  comments: ['Cuts and damages observed in tyres'],
}, {
  label: 'Tyres Which Can Be Removed For Retread?',
  comments: ['Depth is less than 3mm. Tyres should be removed now for retreading'],
}];

const TyreInspectionTemplate = ({ form, onSubmit }) => (
  <Form
    form={form}
    name="tyre-inspection"
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
          <span style={{ paddingRight: '30px' }}>NO</span>
          <span>YES</span>
        </div>
      </Col>
      <Col span={12}>
        <div />
      </Col>
    </Row>
    {
      TYRE_INSPECTION_DATA.map(({ label, comments }) => (
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

export default TyreInspectionTemplate;
