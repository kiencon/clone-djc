/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Form, Radio, Select, Input, Button,
} from 'antd';
import InspectionForm from './InspectionForm';

const VEHICLE_INSPECTION_DATA = [{
  label: 'King Pin',
  comments: ['Shake in king pin'],
}, {
  label: 'Wheel Bearing',
  comments: ['Shake in wheel bearing. Can cause tyre wear'],
}, {
  label: 'Stearing Ball Joints',
  comments: ['Steering ball joints worn out'],
}, {
  label: 'Tie Rod',
  comments: ['Excessive play in tie rod', 'Bent tie rod'],
}, {
  label: 'Steering Wheel',
  comments: ['Streering wheel play'],
}, {
  label: 'Bushes In Leafs',
  comments: ['Bushes worn out in leafs'],
}, {
  label: 'Front Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs'],
}, {
  label: 'Rear Leaf Spring',
  comments: ['Misaligned leafs', 'Loose U clamps', 'Broken leafs', 'Center bolt cut. Can lead to fast wear'],
}, {
  label: 'Rim Disc',
  comments: ['Disc damaged', 'Disc bent', 'Incorrect rim size. Will damage tyre bead'],
}];

const VehicleInspection = () => {
  const formTemplates = VEHICLE_INSPECTION_DATA.map(
    item => [item.label, ...InspectionForm(item)],
  );
  // const [KingPingFormTemplate, kingPingState] = InspectionForm(
  //   { formName: 'king ping', comments },
  // );
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div className="vehicleInspection">
      <h1>Vehicle Inspection</h1>
      {
        formTemplates.map(([label, Template]) => <Template key={label} />)
      }
    </div>
  );
};

export default VehicleInspection;
