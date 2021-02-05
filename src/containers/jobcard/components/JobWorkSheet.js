import {
  Button, Col, Form, Row, Checkbox, Input,
} from 'antd';
import React from 'react';

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

const CheckboxComponent = ({ serviceName }) => (
  <Form.Item>
    <Form.Item name={serviceName} valuePropName="checked" noStyle>
      <Checkbox>{serviceName}</Checkbox>
    </Form.Item>
  </Form.Item>
);

const TyreInputComponent = ({ tyre }) => (
  <Form.Item labelCol={{ span: 6 }} name={tyre} label={tyre}>
    <Input />
    <span>Tyres</span>
  </Form.Item>
);

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
