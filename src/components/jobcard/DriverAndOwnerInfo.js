import { Button, Form, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;

const DriverAndOwnerInfo = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = () => alert('onFinishFailed');
  const onGenderChange = (value) => console.log(value);
  return (
    <>
      <div className="driverAndOwnerInfo">
        <h1>Driver and owner information</h1>
        <div className="customerInformation">
          <div className="form">
          <Form
            name="vehicle-information"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="companyName"
              rules={[
                { 
                  required: true,
                  message: 'Company Name is required'
                }
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
            
            

            <Form.Item>
              <Button className="btn" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
        <div className="driverInformation">
          
        </div>
      </div>
    </>
  );
};

export default DriverAndOwnerInfo;