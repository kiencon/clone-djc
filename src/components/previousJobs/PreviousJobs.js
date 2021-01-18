import { Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const PreviousJobs = () => {
  const columns = [
    {
      title: 'JobId',
      dataIndex: 'jobId',
      key: 'jobId',
    },
    {
      title: 'Date',
      key: 'date',
      render: ({ date }) => {
        const [yy, mm, dd] = new Date(date).toISOString().split('T')[0].split('-');
        return (
          <>
            {`${dd}-${mm}-${yy}`}
          </>
        );
      }
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'Vehicle Registration Number',
      dataIndex: 'vehicleRegistrationNumber',
      key: 'vehicleRegistrationNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Link to="/" className="icon-edit">
            edit
          </Link>
        </Space>
      ),
    },
  ];

  const data = [{
    key: "3",
    jobId: "ABC123_1587579898",
    date: new Date().toString(),
    companyName: "ALICE TRANSPORT COMPANY",
    vehicleRegistrationNumber: "ABC123",
    driver: "Driver 001"
  }, {
    key: "4",
    jobId: "ABC124_1587579898",
    date: new Date().toString(),
    companyName: "ALICE TRANSPORT COMPANY",
    vehicleRegistrationNumber: "ABC123",
    driver: "Driver 001"
  }, {
    key: "5",
    jobId: "ABC125_1587579898",
    date: new Date().toString(),
    companyName: "ALICE TRANSPORT COMPANY",
    vehicleRegistrationNumber: "ABC123",
    driver: "Driver 001"
  }, {
    key: "6",
    jobId: "ABC126_1587579898",
    date: new Date().toString(),
    companyName: "ALICE TRANSPORT COMPANY",
    vehicleRegistrationNumber: "ABC123",
    driver: "Driver 006"
  }, {
    key: "7",
    jobId: "ABC127_1587579898",
    date: new Date().toString(),
    companyName: "ALICE TRANSPORT COMPANY",
    vehicleRegistrationNumber: "ABC123",
    driver: "Driver 007"
  }];

  return (
    <>
      <div className="previousJobs">
        <h1>
          View Previous Jobs
        </h1>
        <Table columns={columns} dataSource={data} />
        <Pagination />
      </div>
    </>
  );
};

export default PreviousJobs;
