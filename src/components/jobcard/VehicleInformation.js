import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
const { Option } = Select;


const VehicleInformation = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = () => alert('onFinishFailed');
  const onGenderChange = (value) => console.log(value);

  return (
    <>
      <div className="vehicle-information">
        <h1>Vehicle information</h1>
        <div className="form">
          <Form
            name="vehicle-information"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="vehicleRegistrationNumber"
              rules={[
                { 
                  required: true,
                  message: 'Vehicle Registration Number is required'
                }
              ]}
            >
              <Input
                placeholder="Vehicle Registration Number"
                suffix={
                  <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                }
              />
            </Form.Item>

            <Form.Item
              name="vehicleType"
              rules={[
                {
                  required: true,
                  message: 'Vehicle Type Number is required'
                },
              ]}
            >
              <Select
                placeholder="Vehicle Type"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="vehicleBrand"
              rules={[
                {
                  required: true,
                  message: 'Vehicle Brand is required'
                },
              ]}
            >
              <Select
                placeholder="Vehicle Brand"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="vehicleModel"
              rules={[
                {
                  required: true,
                  message: 'Vehicle Model is required'
                },
              ]}
            >
              <Select
                placeholder="Vehicle Model"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="vehicleConfiguration"
              rules={[
                {
                  required: true,
                  message: 'Vehicle Configuration is required'
                },
              ]}
            >
              <Select
                placeholder="Vehicle Configuration"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="roadApplication"
              rules={[
                {
                  required: true,
                  message: 'Road Application is required'
                },
              ]}
            >
              <Select
                placeholder="Road Application"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="loading"
              rules={[
                {
                  required: true,
                  message: 'Loading is required'
                },
              ]}
            >
              <Select
                placeholder="Loading"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="tyreSize"
              rules={[
                {
                  required: true,
                  message: 'Tyre Size is required'
                },
              ]}
            >
              <Select
                placeholder="Tyre Size"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="speedoMeterReading"
              rules={[
                { 
                  required: true,
                  message: 'Speedo Meter Reading (in km) is required'
                }
              ]}
            >
              <Input
                placeholder="Speedo Meter Reading (in km)"
              />
            </Form.Item>

            <Form.Item
              name="averageMonthlyRunning"
              rules={[
                { 
                  required: true,
                  message: 'Average Monthly Running (in km) is required'
                }
              ]}
            >
              <Input
                placeholder="Average Monthly Running (in km)"
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
    </>
  );
};

export default VehicleInformation;
