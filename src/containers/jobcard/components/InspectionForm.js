import React from 'react';
import { Form, Select, Radio } from 'antd';

const { Option } = Select;

const CONST = {
  OK: 1,
  NOT_OK: 0,
};

/**
 *
 * @param {*} defaultValue.radioValue
 * @param {*} defaultValue.comment
 */

const InspectionForm = ({
  inspectionName, comments, radioValue,
  changeSelectionBox, changeRadioBtn,
}) => (
  <div className="inspectionForm">
    <Form.Item
      label={inspectionName}
      rules={[
        {
          required: true,
          message: 'Vehicle Type Number is required',
        },
      ]}
    >
      <Radio.Group onChange={changeRadioBtn} value={radioValue}>
        <Radio value={CONST.OK} />
        <Radio value={CONST.NOT_OK} />
      </Radio.Group>
      <Select
        placeholder="Vehicle Type"
        onChange={changeSelectionBox}
        allowClear
      >
        {
            comments.map(comment => (
              <Option value={comment} key={comment}>{comment}</Option>
            ))
          }
      </Select>
    </Form.Item>
  </div>
);

export default InspectionForm;
