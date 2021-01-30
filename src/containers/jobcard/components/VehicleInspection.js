import React from 'react';
import { Form } from 'antd';
import InspectionForm from './InspectionForm';

const VehicleInspection = () => {
  const [form] = Form.useForm();
  const changeRadioBtn = e => console.log(e.target.value);
  return (
    <Form
      form={form}
    >
      <div className="vehicleInspection">
        <h1>Vehicle Inspection</h1>
        <InspectionForm
          changeRadioBtn={changeRadioBtn}
          comments={['ABC', 'CFS', 'SDSAD']}
          radioValue={0}
        />
      </div>
    </Form>
  );
};

export default VehicleInspection;
