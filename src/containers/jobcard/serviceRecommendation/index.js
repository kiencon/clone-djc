import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import DriverAndOwnerInfoFormTemplate from './formTemplate/index';
import { createDriverAndOwnerInfo } from './state/action';

const DriverAndOwnerInfo = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createDriverAndOwnerInfo({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="driverAndOwnerInfo">
        <h1>Vehicle Inspection</h1>
        <div className="information">

          <div className="form">
            <DriverAndOwnerInfoFormTemplate
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
