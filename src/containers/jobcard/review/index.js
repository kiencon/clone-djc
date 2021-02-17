import { Form, Row, Col } from 'antd';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import ReviewInfoFormTemplate from './formTemplate/index';
import {
  selectVehicleInformation,
  selectDriverAndOwnerInfo,
  selectVehicleInspection,
  selectTyreInspection,
  selectJobWorksheet,
  selectServiceRecommendation,
} from './state/selector';

import InspectionReview from './formTemplate/vehiclePartsInspection';
import {
  toVehicleInspectionArray,
  toTyreInspectionArray,
} from '../utils/inspectionHelper';

const ReviewInfo = () => {
  const {
    vehicleInformation,
    driverAndOwnerInfo,
    vehicleInspection,
    tyreInspection,
    jobWorksheet,
    serviceRecommendation,
  } = useSelector(
    state => ({
      vehicleInformation: selectVehicleInformation(state),
      driverAndOwnerInfo: selectDriverAndOwnerInfo(state),
      vehicleInspection: selectVehicleInspection(state),
      tyreInspection: selectTyreInspection(state),
      jobWorksheet: selectJobWorksheet(state),
      serviceRecommendation: selectServiceRecommendation(state),
    }),
  );

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = () => {
    console.log('vehicleInformation', vehicleInformation);
    console.log('driverAndOwnerInfo', driverAndOwnerInfo);
    console.log('tyreInspection', tyreInspection);
    console.log('vehicleInspection', vehicleInspection);
    console.log('jobWorksheet', jobWorksheet);
    console.log('serviceRecommendation', serviceRecommendation);
  };

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="review">
        <h1>Review</h1>
        <Row>
          <Col span={24}>
            <h2>Customer information</h2>
            <ul>
              <li><p>{driverAndOwnerInfo.companyName}</p></li>
              <li><p>{driverAndOwnerInfo.addressStreet}</p></li>
              <li><p>{driverAndOwnerInfo.city}</p></li>
              <li><p>{driverAndOwnerInfo.pincode}</p></li>
              <li><p>{driverAndOwnerInfo.ownersName}</p></li>
              <li><p>{driverAndOwnerInfo.ownerContactNumber}</p></li>
              <li><p>{driverAndOwnerInfo.ownerEmailAddress}</p></li>
            </ul>
          </Col>
          <Col span={8}>
            <h2>Vehicle information</h2>
            <ul>
              <li><p>{vehicleInformation.vehicleRegistrationNumber}</p></li>
              <li><p>{vehicleInformation.vehicleType}</p></li>
              <li><p>{vehicleInformation.vehicleBrand}</p></li>
              <li><p>{vehicleInformation.vehicleModel}</p></li>
              <li><p>{vehicleInformation.vehicleConfiguration}</p></li>
              <li><p>{vehicleInformation.roadApplication}</p></li>
              <li><p>{vehicleInformation.loading}</p></li>
              <li><p>{vehicleInformation.tyreSize}</p></li>
              <li><p>{vehicleInformation.speedoMeterReading}</p></li>
              <li><p>{vehicleInformation.averageMonthlyRunning}</p></li>
            </ul>
          </Col>
          <Col span={16}>
            <h2>Driver information</h2>
            <ul>
              <li><p>{driverAndOwnerInfo.driverName}</p></li>
              <li><p>{vehicleInformation.driverContactNumber}</p></li>
              <li><p>{vehicleInformation.fleetManagerEmailAddress}</p></li>
            </ul>
          </Col>
          <Col span={24}>
            <h2>Vehicle inspection</h2>
            <InspectionReview
              inspectionArray={toVehicleInspectionArray(vehicleInspection)}
            />
          </Col>
          <Col span={24}>
            <h2>Tyre inspection</h2>
            <InspectionReview
              inspectionArray={toTyreInspectionArray(tyreInspection)}
            />
          </Col>
          <Col span={24}>
            <h2>Job Worksheet</h2>
            <Row>
              <Col span={12}>
                <h3>Services</h3>
                <ul>
                  {
                  Object.keys(jobWorksheet)
                    .filter(key => typeof jobWorksheet[key] === 'boolean')
                    .map(item => <li key={item}><p>{item}</p></li>)
                }
                </ul>
              </Col>
              <Col span={12}>
                <h3>Tyres Serviced</h3>
                <ul>
                  {
                  Object.keys(jobWorksheet)
                    .filter(key => typeof jobWorksheet[key] === 'string')
                    .map(item => (
                      <li key={item}>
                        <p>
                          {item}
                          :
                          {jobWorksheet[item]}
                          Tyres
                        </p>
                      </li>
                    ))
                }
                </ul>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="serviceRecommendation">
            <h2>Service recommendation</h2>
            <ul>
              <li>
                <p>For rated load, keep air pressure of radial tyres to 130psi and nylon tyres to 120psi</p>
              </li>
              <li>
                <p>Check alignment after every 10000(km)</p>
              </li>
              <li>
                <p>Other Observations and Recommendations: </p>
                <p className="mr-20">{serviceRecommendation.otherRecommendation}</p>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="form">
          <ReviewInfoFormTemplate
            form={form}
            onSubmit={formRef.current.onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
