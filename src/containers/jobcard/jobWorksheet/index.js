import { Form } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import JobWorksheetTemplate from './formTemplate/index';
import { createJobWorksheet } from './state/action';
import { selectJobWorksheet } from './state/selector';

const JobWorksheet = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createJobWorksheet({
      values,
    }));
    history.push('/add-new-job/service-recommendation');
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
    vehicleInspection: selectJobWorksheet(state),
  }));

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
    <>
      <div className="job-worksheet">
        <h1>Job Worksheet</h1>
        <JobWorksheetTemplate
          form={form}
          onSubmit={formRef.current.onSubmit}
        />
      </div>
    </>
  );
};

export default JobWorksheet;
