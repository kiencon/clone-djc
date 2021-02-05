import {
  Col, Form, Radio, Row, Select,
} from 'antd';
import React from 'react';

const InspectionComponent = ({ serviceName, comments }) => (
  <Row>
    <Col span={4}>
      <div><span>{serviceName}</span></div>
    </Col>
    <Col span={4}>
      <Form.Item
        name={`${serviceName}-radio-btn`}
        rules={[
          {
            required: true,
            message: `${serviceName} check box is required`,
          },
        ]}
      >
        <Radio.Group>
          <Radio value={0} />
          <Radio value={1} />
        </Radio.Group>
      </Form.Item>
    </Col>
    <Col span={16}>
      <Form.Item
        noStyle
        shouldUpdate={(
          prevValues, currentValues,
        ) => prevValues[`${serviceName}-radio-btn`] !== currentValues[`${serviceName}-radio-btn`]}
      >
        {({ getFieldValue }) => (
          <Form.Item
            name={`${serviceName}-dropdown`}
            rules={[
              {
                required: getFieldValue(`${serviceName}-radio-btn`) !== 0,
                message: '',
              },
            ]}
          >
            <Select
              allowClear
              disabled={getFieldValue(`${serviceName}-radio-btn`) === 0}
            >
              {
                comments.map(cmt => (
                  <Select.Option value={cmt} key={cmt}>{cmt}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        )}
      </Form.Item>
    </Col>
  </Row>
);

export default InspectionComponent;
