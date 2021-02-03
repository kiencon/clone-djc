/* eslint-disable no-unused-vars */
import {
  Button, Col, Form, Radio, Row, Select,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';

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

const InputJobWorkSheet = type => {
  const htmlElRef = useRef();
  const [value, setValue] = useState('');
  const onChange = event => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value) {
      htmlElRef.current.focus();
    }
  }, [htmlElRef, value]);
  const Template = () => (
    <div className="inputJobWorkSheet">
      <div className="type">
        <span>{type}</span>
      </div>
      <div className="input">
        <input value={value} ref={htmlElRef} onChange={onChange} />
      </div>
      <div className="type">
        <span>Tyres</span>
      </div>
    </div>
  );
  return [Template, value];
};

const Test = ({ serviceName, comments, defaultValue }) => {
  const { service, comment } = defaultValue;
  return (
    <Row>
      <Col span={8}>
        <div><span>{serviceName}</span></div>
      </Col>
      <Col span={8}>
        <Form.Item
          name={`${serviceName}-radio-btn`}
        >
          <Radio.Group
            value={service}
          >
            <Radio value={0} />
            <Radio value={1} />
          </Radio.Group>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name={`${serviceName}-dropdown`}
          key={serviceName}
        >
          <Select
            allowClear
            value={comment}
            disabled={service}
          >
            {
              comments.map(cmt => (
                <Select.Option value={cmt} key={cmt}>{cmt}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

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
          {
            SERVICE_PROVIDE.map(service => (
              <Test key={service} serviceName={service} />
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
