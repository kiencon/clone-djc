import { Form } from 'antd';
import React, {
  useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import VehicleInformationFormTemplate from './formTemplate/index';
import {
  createVehicleInformation,
} from './state/action';
import { selectVehicleInformation } from './state/selector';

const VehicleInformation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const {
    formInformation,
    vehicleInformationState,
  } = useSelector(state => ({
    formInformation: selectJobcard(state),
    vehicleInformationState: selectVehicleInformation(state),
  }));

  const onAdd = useCallback(values => {
    dispatch(createVehicleInformation({
      values,
    }));
    history.push('/add-new-job/driver-and-owner-info');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onAdd,
      };
      form.setFieldsValue(vehicleInformationState);
    }
  }, [form, formInformation.formType, onAdd, vehicleInformationState]);

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
