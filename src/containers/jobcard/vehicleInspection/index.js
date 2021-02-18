import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import DriverAndOwnerInfoFormTemplate from './formTemplate/index';
import { createVehicleInspection } from './state/action';

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
