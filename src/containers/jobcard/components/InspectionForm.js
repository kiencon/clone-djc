import React, { useState } from 'react';
import {
  Select, Radio,
} from 'antd';

const { Option } = Select;

const RADIO_VALUES = {
  OK: 1,
  NOT_OK: 0,
};

const InspectionForm = ({
  label,
  comments,
}) => {
  const [value, setValue] = useState({ radioValue: RADIO_VALUES.NOT_OK, comment: '' });
  const changeRadioBtn = e => setValue({ comment: '', radioValue: +e.target.value });
  const changeSelectionBox = opt => setValue({ ...value, comment: opt });
  const InspectionFormTemplate = () => (
    <div className="ant-row inspectionForm">
      <div className="ant-col ant-col-8 label">
        <span>{label}</span>
      </div>
      <div className="ant-col ant-col-4 radio">
        <Radio.Group onChange={changeRadioBtn} value={value.radioValue}>
          <Radio value={RADIO_VALUES.OK} />
          <Radio value={RADIO_VALUES.NOT_OK} />
        </Radio.Group>
      </div>
      <div className="ant-col ant-col-12 selection">
        <Select
          placeholder="Vehicle Type"
          onChange={changeSelectionBox}
          allowClear
          value={value.comment}
          disabled={value.radioValue}
        >
          {
            comments.map(cmt => (
              <Option value={cmt} key={cmt}>{cmt}</Option>
            ))
          }
        </Select>
      </div>
    </div>
  );
  return [InspectionFormTemplate, value];
};

export default InspectionForm;
