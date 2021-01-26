import { useRef } from 'react';
import { Form } from 'antd';
import VehicleInformationFormTemplate from './formTemplate/index';

const VehicleInformation = () => {
  const [form] = Form.useForm();

  const formRef = useRef({
    formType: 'ADD',
    onSubmit: () => false,
  });

  return (
    <VehicleInformationFormTemplate
      form={form}
      onSubmit={formRef.current.onSubmit}
    />
  );
};

export default VehicleInformation;
