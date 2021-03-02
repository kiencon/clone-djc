import { Form } from 'antd';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import { selectJobcard } from '../state/selector';
import ServiceRecommendationTemplate from './formTemplate/index';
import { createServiceRecommendation } from './state/action';
import { selectServiceRecommendation } from './state/selector';

const ServiceRecommendation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createServiceRecommendation({
      values,
    }));
    history.push('/add-new-job/review');
  }, [dispatch, history]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  const {
    formInformation,
    serviceRecommendation,
  } = useSelector(state => ({
    formInformation: selectJobcard(state),
    serviceRecommendation: selectServiceRecommendation(state),
  }));

  useEffect(() => {
    if (formInformation.formType === FORM_TYPE.EDIT) {
      formRef.current = {
        formType: FORM_TYPE.EDIT,
        onSubmit: onAdd,
      };
      form.setFieldsValue(serviceRecommendation);
    }
  }, [form, formInformation.formType, onAdd, serviceRecommendation]);

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
