import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiDB from '../../database';

const Pagination = () => (
  <div className="pagination">
    <Link to="/" className="btn">Previous</Link>
    <Link to="/" className="btn">Next</Link>
  </div>
);

const PreviousJobs = () => {
  const columns = [
    {
      title: 'JobId',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Date',
      key: 'createdAt',
      render: ({ createdAt }) => {
        const [yy, mm, dd] = createdAt.split('T')[0].split('-');
        return (
          <>
            {`${dd}-${mm}-${yy}`}
          </>
        );
      },
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
          <Link to="/" className="icon-view">
            view
          </Link>
        </Space>
      ),
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    apiDB.listJob()
      .then(res => {
        const docs = res.rows.map(({ doc, id }) => ({
          key: id,
          id,
          companyName: doc.driverAndOwnerInfo.companyName,
          vehicleRegistrationNumber: doc.vehicleInformation.vehicleRegistrationNumber,
          driver: doc.driverAndOwnerInfo.driverName,
          createdAt: doc.createdAt,
        }));
        setData(docs);
      })
      .catch(err => console.log(err));
  }, []);
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
