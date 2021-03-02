import { Form } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import TyreInspectionTemplate from './formTemplate/index';
import { createTyreInspection } from './state/action';
import { selectTyreInspection } from './state/selector';

const DriverAndOwnerInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createTyreInspection({
      values,
    }));
    history.push('/add-new-job/job-workSheet');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  const {
    formInformation,
    tyreInspection,
  } = useSelector(state => ({
    formInformation: selectJobcard(state),
    tyreInspection: selectTyreInspection(state),
  }));

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onAdd,
      };
      form.setFieldsValue(tyreInspection);
    }
  }, [form, formInformation.formType, onAdd, tyreInspection]);

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
