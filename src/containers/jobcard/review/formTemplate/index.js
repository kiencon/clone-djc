import React from 'react';
import { Button, Form } from 'antd';

const ReviewInfoFormTemplate = ({ form, onSubmit }) => (
  <Form
    name="review"
    form={form}
    onFinish={onSubmit}
  >
    <div className="formSubmit">
      <Form.Item>
        <Button className="btn" htmlType="submit">
          Save Job
        </Button>
      </Form.Item>
    </div>
  </Form>
);

export default ReviewInfoFormTemplate;
