import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import TyreInspectionTemplate from './formTemplate/index';
import { createVehicleInspection } from './state/action';

const DriverAndOwnerInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createVehicleInspection({
      values,
    }));
    history.push('/add-new-job/job-workSheet');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <div className="vihicle-inspection">
      <h1>Tyre Inspection</h1>
      <div className="form">
        <TyreInspectionTemplate
          form={form}
          onSubmit={formRef.current.onSubmit}
        />
      </div>
    </div>
  );
};

export default DriverAndOwnerInfo;
