import {
  Button, Form, Row, Col,
} from 'antd';
import React from 'react';
import CheckboxComponent from '../../components/CheckboxComponent';
import TyreInputComponent from '../../components/TyreInputComponent';

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

const JobWorksheetTemplate = ({ form, onSubmit }) => (
  <Form
    form={form}
    name="test"
    onFinish={onSubmit}
  >
    <Row>
      <Col span={12}>
        <div><h3>Tick if provided</h3></div>
      </Col>
      <Col span={12}>
        <div><h3>Input number of tyres</h3></div>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        {
          SERVICE_PROVIDE.map(serviceName => <CheckboxComponent key={serviceName} serviceName={serviceName} />)
        }
      </Col>
      <Col span={16}>
        {
          TYRES_TYPE.map(tyre => <TyreInputComponent key={tyre} tyre={tyre} />)
        }
      </Col>
    </Row>
    <div className="wrapper-btn">
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Continue
        </Button>
      </Form.Item>
    </div>
  </Form>
);

export default JobWorksheetTemplate;
