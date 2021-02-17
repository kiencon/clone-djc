import React from 'react';
import { Row, Col, Radio } from 'antd';

const RowInspectionReview = ({ label, radioBtnValue, comment }) => (
  <>
    <Col span={7}>
      <p>{label}</p>
    </Col>
    <Col span={4}>
      <Radio.Group className="flex" disabled value={radioBtnValue}>
        <Radio value={0} />
        <Radio value={1} />
      </Radio.Group>
    </Col>
    <Col span={8} offset={3}>
      <p>{comment}</p>
    </Col>
  </>
);

const InspectionReview = ({
  inspectionArray,
}) => (
  <>
    <Row>
      <Col span={24}>
        <Row>
          <Col span={7}>
            <h3>Vehicle parts inspection</h3>
          </Col>
          <Col span={4}>
            <div />
          </Col>
          <Col span={8} offset={3}>
            <h3>Comments</h3>
          </Col>
          <Col span={7}>
            <div />
          </Col>
          <Col span={4} className="flex">
            <h3>NO</h3>
            <h3>YES</h3>
          </Col>
          <Col span={8} offset={3}>
            <div />
          </Col>
        </Row>
      </Col>
      <Row>
        {
          inspectionArray.map(({ label, radioBtnValue, comment }) => (
            <RowInspectionReview
              key={label}
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

export default InspectionReview;
