/* eslint-disable no-unused-vars */
import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import apiDB from '../../database';

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
        console.log(docs);
        setData(docs);
      })
      .catch(err => console.log(err));
  }, []);

  // const data = [{
  //   key: '3',
  //   id: 'ABC123_1587579898',
  //   date: new Date().toString(),
  //   companyName: 'ALICE TRANSPORT COMPANY',
  //   vehicleRegistrationNumber: 'ABC123',
  //   driver: 'Driver 001',
  // }, {
  //   key: '4',
  //   id: 'ABC124_1587579898',
  //   date: new Date(),
  //   companyName: 'ALICE TRANSPORT COMPANY',
  //   vehicleRegistrationNumber: 'ABC123',
  //   driver: 'Driver 001',
  // }, {
  //   key: '5',
  //   id: 'ABC125_1587579898',
  //   date: new Date().toString(),
  //   companyName: 'ALICE TRANSPORT COMPANY',
  //   vehicleRegistrationNumber: 'ABC123',
  //   driver: 'Driver 001',
  // }, {
  //   key: '6',
  //   id: 'ABC126_1587579898',
  //   date: new Date().toString(),
  //   companyName: 'ALICE TRANSPORT COMPANY',
  //   vehicleRegistrationNumber: 'ABC123',
  //   driver: 'Driver 006',
  // }, {
  //   key: '7',
  //   id: 'ABC127_1587579898',
  //   date: new Date().toString(),
  //   companyName: 'ALICE TRANSPORT COMPANY',
  //   vehicleRegistrationNumber: 'ABC123',
  //   driver: 'Driver 007',
  // }];

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
