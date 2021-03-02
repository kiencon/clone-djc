import { Col, Form, Row } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import apiDB from '../../../database';
import { openNotification } from '../../utils';
import {
  resetJobcardForm,
} from '../state/action';
import { selectJobcard } from '../state/selector';
import { removeJobcardFromStore } from '../utils';
import {
  toTyreInspectionArray, toVehicleInspectionArray,
} from '../utils/inspectionHelper';
import ReviewInfoFormTemplate from './formTemplate/index';
import InspectionReview from './formTemplate/vehiclePartsInspection';
import {
  selectDriverAndOwnerInfo,
  selectJobWorksheet,
  selectServiceRecommendation,
  selectTyreInspection,
  selectVehicleInformation,
  selectVehicleInspection,
} from './state/selector';

const ReviewInfo = () => {
  const {
    vehicleInformation,
    driverAndOwnerInfo,
    vehicleInspection,
    tyreInspection,
    jobWorksheet,
    serviceRecommendation,
    formInformation,
  } = useSelector(
    state => ({
      vehicleInformation: selectVehicleInformation(state),
      driverAndOwnerInfo: selectDriverAndOwnerInfo(state),
      vehicleInspection: selectVehicleInspection(state),
      tyreInspection: selectTyreInspection(state),
      jobWorksheet: selectJobWorksheet(state),
      serviceRecommendation: selectServiceRecommendation(state),
      formInformation: selectJobcard(state),
    }),
  );

  const dispatch = useDispatch();

  const history = useHistory();
  const [form] = Form.useForm();

  const onAdd = () => {
    const doc = {
      vehicleInformation,
      driverAndOwnerInfo,
      tyreInspection,
      vehicleInspection,
      jobWorksheet,
      serviceRecommendation,
    };
    apiDB.saveJob(doc).then(() => {
      openNotification('Save job successfully');
      dispatch(resetJobcardForm());
      removeJobcardFromStore(dispatch);
      history.push('/');
    }).catch(() => {
      openNotification('Save job fail');
    });
  };

  const onEdit = useCallback(() => {
    const doc = {
      vehicleInformation,
      driverAndOwnerInfo,
      tyreInspection,
      vehicleInspection,
      jobWorksheet,
      serviceRecommendation,
      ...formInformation.identifiedJob,
    };
    apiDB.update(doc).then(() => {
      openNotification('Edit job successfully');
      dispatch(resetJobcardForm());
      removeJobcardFromStore(dispatch);
      history.push('/');
    }).catch(() => {
      openNotification('Edit job fail');
    });
  }, [
    dispatch,
    driverAndOwnerInfo,
    formInformation.identifiedJob,
    history,
    jobWorksheet,
    serviceRecommendation,
    tyreInspection,
    vehicleInformation,
    vehicleInspection,
  ]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.REVIEW) {
      formRef.current = {
        formType: FORM_TYPE.REVIEW,
        onSubmit: undefined,
      };
    }
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onEdit,
      };
    }
  }, [form, formInformation.formType, onEdit]);

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
              <li><p>{driverAndOwnerInfo.driverContactNumber}</p></li>
              <li><p>{driverAndOwnerInfo.fleetManagerEmailAddress}</p></li>
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
            isReview={formRef.current.formType === FORM_TYPE.REVIEW}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewInfo;
