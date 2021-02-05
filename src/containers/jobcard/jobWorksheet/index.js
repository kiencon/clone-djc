import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import JobWorksheetTemplate from './formTemplate/index';
import { createJobWorksheet } from './state/action';

const JobWorksheet = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createJobWorksheet({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

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
