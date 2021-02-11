import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { FORM_TYPE } from '../../../config/const';
import ServiceRecommendationTemplate from './formTemplate/index';
import { createServiceRecommendation } from './state/action';

const ServiceRecommendation = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createServiceRecommendation({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <>
      <div className="serviceRecommendation">
        <h1>Service recommendation</h1>
        <div className="form">
          <ServiceRecommendationTemplate
            form={form}
            onSubmit={formRef.current.onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceRecommendation;