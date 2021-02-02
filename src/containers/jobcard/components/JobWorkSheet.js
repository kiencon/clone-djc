/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import {
  Form, Input, Checkbox, Col, Row, Button,
} from 'antd';

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

const JobWorkSheet = () => {
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [checkboxForm] = Form.useForm();
  const formTemplates = TYRES_TYPE.map(
    type => [type, ...InputJobWorkSheet(type)],
  );
  const onSubmit = () => {
    console.log(formTemplates.map(e => ({
      [e[0]]: e[2],
    })));
  };
  return (
    <>
      <div className="jobWorkSheet">
        <h1>Job WorkSheet</h1>
        <Row>
          <Col span={12}>
            <h3>Tick if provided</h3>
          </Col>
          <Col span={12}>
            <h3>Input number of tyres</h3>
          </Col>
          <Col span={12}>
            <Form
              form={checkboxForm}
              name="checkboxForm"
            >
              <Checkbox.Group onChange={onChange}>
                {
                  SERVICE_PROVIDE.map(service => (
                    <Col span={24} key={service} className="checkBoxJobWorkSheet">
                      <Checkbox value={service}>
                        {service}
                      </Checkbox>
                    </Col>
                  ))
                }
              </Checkbox.Group>
            </Form>
          </Col>

          <Col span={12}>
            {
              formTemplates.map(([type, Template]) => <Template key={type} />)
            }
          </Col>

          <Col span={24}>
            <Button onClick={onSubmit} className="btn" htmlType="submit">
              Continue
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default JobWorkSheet;
