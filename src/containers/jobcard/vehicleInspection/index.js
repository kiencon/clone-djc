import { Form } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import DriverAndOwnerInfoFormTemplate from './formTemplate/index';
import { createVehicleInspection } from './state/action';
import { selectVehicleInspection } from './state/selector';

const DriverAndOwnerInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createVehicleInspection({
      values,
    }));
    history.push('/add-new-job/tyre-inspection');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  const {
    formInformation,
    vehicleInspection,
  } = useSelector(state => ({
    formInformation: selectJobcard(state),
    vehicleInspection: selectVehicleInspection(state),
  }));

  console.log(vehicleInspection, formInformation);

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onAdd,
      };
      form.setFieldsValue(vehicleInspection);
    }
  }, [form, formInformation.formType, onAdd, vehicleInspection]);

  return (
    <div className="vihicle-inspection">
      <h1>Vehicle Inspection</h1>
      <div className="form">
        <DriverAndOwnerInfoFormTemplate
          form={form}
          onSubmit={formRef.current.onSubmit}
        />
      </div>
    </div>
  );
};

export default DriverAndOwnerInfo;
