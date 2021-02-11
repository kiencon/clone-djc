/* eslint-disable no-unused-vars */
import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import ReviewInfoFormTemplate from './formTemplate/index';
import { createJobcard } from './state/action';
import {
  selectVehicleInformation,
  selectDriverAndOwnerInfo,
  selectVehicleInspection,
  selectTyreInspection,
  selectJobWorksheet,
  selectServiceRecommendation,
} from './state/selector';

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

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  // const onAdd = useCallback(values => {
  //   dispatch(createJobcard({
  //     values,
  //   }));
  // }, [dispatch]);
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
