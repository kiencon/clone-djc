import { Form, Button } from 'antd';

const Dashboard = () => {
  const viewPreviousJobs= () => alert('viewPreviousJobs');
  const addNewJob= () => alert('addNewJob');
  return (
    <div className="dashboard container">
      <h1 className="main-title">
        Dashboard
      </h1>
      <Form
        name="basic"
      >
        <Form.Item
          name="add a new job"
        >
          <Button onClick={addNewJob} className="btn-dashboard" htmlType="submit">
            Add a new Job
          </Button>
        </Form.Item>
        <Form.Item
          name="view previous jobs"
        >
          <Button onClick={viewPreviousJobs} className="btn-dashboard" htmlType="submit">
            View previous jobs
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Dashboard;
