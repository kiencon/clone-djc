import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import VehicleInformationFormTemplate from './formTemplate/index';
import { FORM_TYPE } from '../../../config/const';
import {
  createVehicleInformation,
} from './state/action';

const VehicleInformation = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onAdd = useCallback(values => {
    dispatch(createVehicleInformation({
      values,
    }));
  }, [dispatch]);

  const formRef = useRef({
    formType: FORM_TYPE.ADD,
    onSubmit: onAdd,
  });

  return (
    <VehicleInformationFormTemplate
      form={form}
      onSubmit={formRef.current.onSubmit}
    />
  );
};

export default VehicleInformation;
