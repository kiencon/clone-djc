/* eslint-disable no-unused-vars */
import {
  Button, Col, Form, Row,
} from 'antd';
import React from 'react';
import InspectionComponent from './InspectionComponent';

const SERVICE_PROVIDE = [
  'Vehicle Inspection',
  'Tyre Inspection',
  'Alignment',
  'Chassis Greasing',
  'Air Pressure Correction',
  'Nitrogen Filling',
  'Retreading',
  'U-Bolt tightening',
  'Puncture',
];

const TYRES_TYPE = [
  'Tyre Fitment',
  'Tyre Rotation',
  'Swapping',
  'Tyre Repair',
  'Wheel Balancing',
  'Extension Valves',
];

const VEHICLE_INSPECTION_DATA = [{
  label: 'King Pin',
  comments: ['Shake in king pin'],
}, {
  label: 'Wheel Bearing',
  comments: ['Shake in wheel bearing. Can cause tyre wear'],
}, {
  label: 'Stearing Ball Joints',
  comments: ['Steering ball joints worn out'],
}, {
  label: 'Tie Rod',
  comments: ['Excessive play in tie rod', 'Bent tie rod'],
}, {
  label: 'Steering Wheel',
  comments: ['Streering wheel play'],
}, {
  label: 'Bushes In Leafs',
  comments: ['Bushes worn out in leafs'],
}, {
  label: 'Front Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs'],
}, {
  label: 'Rear Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs', 'Center bolt cut. Can lead to fast wear'],
}, {
  label: 'Rim Disc',
  comments: ['Disc damaged', 'Disc bent', 'Incorrect rim size. Will damage tyre bead'],
}];

const JobWorkSheet = () => {
  const onSubmit = value => {
    console.log(value);
  };
  const [form] = Form.useForm();
  return (
    <>
      <div className="jobWorkSheet">
        <h1>Job WorkSheet</h1>
        <Form
          form={form}
          name="test"
          onFinish={onSubmit}
        >
          <Row>
            <Col span={4}>
              <div><span>Vehicle parts inspection</span></div>
            </Col>
            <Col span={4}>
              <div />
            </Col>
            <Col span={16}>
              <div><span>Comments</span></div>
            </Col>
            <Col span={4}>
              <div />
            </Col>
            <Col span={4}>
              <div>
                <span>OK</span>
                <span>NOT OK</span>
              </div>
            </Col>
            <Col span={16}>
              <div />
            </Col>
          </Row>
          {
            VEHICLE_INSPECTION_DATA.map(({ label, comments }) => (
              <InspectionComponent key={label} serviceName={label} comments={comments} />
            ))
          }
          <Form.Item>
            <Button className="btn" htmlType="submit">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default JobWorkSheet;
