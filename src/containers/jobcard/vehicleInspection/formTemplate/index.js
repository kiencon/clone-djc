import {
  Button, Col, Form, Row,
} from 'antd';
import React from 'react';
import InspectionComponent from '../../components/InspectionComponent';

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
