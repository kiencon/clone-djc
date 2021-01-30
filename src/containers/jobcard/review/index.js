import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import ReviewInfoFormTemplate from './formTemplate/index';
import { createJobcard } from './state/action';
import {
  selectVehicleInformation,
  selectDriverAndOwnerInfo,
} from './state/selector';

const DriverAndOwnerInfo = () => {
  const {
    vehicleInformation,
    driverAndOwnerInfo,
  } = useSelector(
    state => ({
      vehicleInformation: selectVehicleInformation(state),
      driverAndOwnerInfo: selectDriverAndOwnerInfo(state),
    }),
  );

  console.log('vehicleInformation', vehicleInformation);
  console.log('driverAndOwnerInfo', driverAndOwnerInfo);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createJobcard({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="review">
        <h1>Review</h1>
        <div className="review">

          <div className="form">
            <ReviewInfoFormTemplate
              form={form}
              onSubmit={formRef.current.onSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverAndOwnerInfo;
