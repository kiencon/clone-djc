/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col, Radio } from 'antd';

const RowInspectionReview = ({ label, radioBtnValue, comment }) => (
  <>
    <Col span={8}>
      <p>{label}</p>
    </Col>
    <Col span={8}>
      <Radio.Group disabled>
        <Radio value={0} />
        <Radio value={1} />
      </Radio.Group>
    </Col>
    <Col span={8}>
      {comment}
    </Col>
  </>
);

const VehiclePartsInspectionReview = ({ vehicleInspectionArray = [] }) => (
  <>
    <h2>Vehicle parts inspection</h2>
    <Row>
      <Col span={24}>
        <Row>
          <Col span={8}>
            <h3>Vehicle parts inspection</h3>
          </Col>
          <Col span={8}>
            <div />
          </Col>
          <Col span={8}>
            <h3>Comments</h3>
          </Col>
          <Col span={8}>
            <div />
          </Col>
          <Col span={8} className="flex">
            <h3>OK</h3>
            <h3>Not OK</h3>
          </Col>
          <Col span={8}>
            <div />
          </Col>
        </Row>
      </Col>
      <Row>
        {
          vehicleInspectionArray.map(({ label, radioBtnValue, comment }) => (
            <RowInspectionReview
              label={label}
              radioBtnValue={radioBtnValue}
              comment={comment}
            />
          ))
        }
      </Row>
    </Row>
  </>
);

export default VehiclePartsInspectionReview;
