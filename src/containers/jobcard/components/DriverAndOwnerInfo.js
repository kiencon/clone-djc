import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';

const DriverAndOwnerInfo = () => {
  const onFinish = values => {
    console.log(values);
  };
  const onFinishFailed = () => console.log('onFinishFailed');
  return (
    <>
      <div className="driverAndOwnerInfo">
        <h1>Driver and owner information</h1>
        <div className="information">

          <div className="form">
            <Form
              name="customer-information"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="wrapper-information">
                <div className="customerInformation">
                  <h3>Owner Information</h3>
                  <Form.Item
                    name="companyName"
                    rules={[
                      {
                        required: true,
                        message: 'Company Name is required',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Company Name"
                      suffix={
                        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name="addressStreet"
                  >
                    <Input
                      placeholder="Address Street"
                    />
                  </Form.Item>

                  <Form.Item
                    name="city"
                  >
                    <Input
                      placeholder="City"
                    />
                  </Form.Item>

                  <Form.Item
                    name="pincode"
                  >
                    <Input
                      placeholder="Pincode"
                    />
                  </Form.Item>

                  <Form.Item
                    name="numberOfVehiclesInFleet"
                  >
                    <Input
                      placeholder="Number Of Vehicles In Fleet"
                    />
                  </Form.Item>

                  <Form.Item
                    name="ownersName"
                  >
                    <Input
                      placeholder="Owner's Name"
                    />
                  </Form.Item>

                  <Form.Item
                    name="ownerContactNumber"
                  >
                    <Input
                      placeholder="Owner Contact Number"
                    />
                  </Form.Item>

                  <Form.Item
                    name="ownerEmailAddress"
                  >
                    <Input
                      placeholder="Owner Email Address"
                    />
                  </Form.Item>

                </div>

                <div className="driverInformation">
                  <h3>Driver Information</h3>
                  <Form.Item
                    name="driverName"
                    rules={[
                      {
                        required: true,
                        message: 'Driver Name is required',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Name"
                      suffix={
                        <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name="driverContactNumber"
                    rules={[
                      {
                        required: true,
                        message: 'Driver Contact Number is required',
                      },
                    ]}
                  >
                    <Input
                      placeholder="Contact Number"
                    />
                  </Form.Item>

                  <Form.Item
                    name="fleetManagerEmailAddress"
                  >
                    <Input
                      placeholder="Fleet Manager Email Address"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="formSubmit">
                <Form.Item>
                  <Button className="btn" htmlType="submit">
                    Continue
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverAndOwnerInfo;
