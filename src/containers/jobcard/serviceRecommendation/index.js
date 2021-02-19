/* eslint-disable no-unused-vars */
import { Form } from 'antd';
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FORM_TYPE } from '../../../config/const';
import ServiceRecommendationTemplate from './formTemplate/index';
import { createServiceRecommendation } from './state/action';
import { selectDriverAndOwnerInfo } from './state/selector';

const ServiceRecommendation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();

  const {
    driverAndOwnerInfo,
  } = useSelector(
    state => ({
      driverAndOwnerInfo: selectDriverAndOwnerInfo(state),
    }),
  );

  const onAdd = useCallback(values => {
    dispatch(createServiceRecommendation({
      values,
    }));
    history.push(`/add-new-job/review/${driverAndOwnerInfo.id}`);
    console.log(driverAndOwnerInfo);
  }, [dispatch, driverAndOwnerInfo, history]);

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
