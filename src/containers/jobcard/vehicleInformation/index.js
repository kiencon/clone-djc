import { Form } from 'antd';
import React, {
  useCallback, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import VehicleInformationFormTemplate from './formTemplate/index';
import {
  createVehicleInformation,
} from './state/action';

const VehicleInformation = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createVehicleInformation({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="vehicle-information">
        <h1>Vehicle information</h1>
        <div className="form">
          <VehicleInformationFormTemplate
            form={form}
            onSubmit={formRef.current.onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default VehicleInformation;
