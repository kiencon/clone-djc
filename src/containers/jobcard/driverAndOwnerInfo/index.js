import { Form } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import DriverAndOwnerInfoFormTemplate from './formTemplate/index';
import { createDriverAndOwnerInfo } from './state/action';
import { selectDriverAndOwnerInfo } from './state/selector';

const DriverAndOwnerInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createDriverAndOwnerInfo({
      values,
    }));
    history.push('/add-new-job/vehicle-inspection');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  const {
    formInformation,
    driverAndOwnerInfo,
  } = useSelector(state => ({
    formInformation: selectJobcard(state),
    driverAndOwnerInfo: selectDriverAndOwnerInfo(state),
  }));

  console.log(driverAndOwnerInfo, formInformation);

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onAdd,
      };
      form.setFieldsValue(driverAndOwnerInfo);
    }
  }, [form, formInformation.formType, onAdd, driverAndOwnerInfo]);

  return (
    <>
      <div className="driverAndOwnerInfo">
        <h1>Driver and owner information</h1>
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
