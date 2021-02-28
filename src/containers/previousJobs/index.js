import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openNotification } from '../utils';
import apiDB from '../../database';
import {
  selectPutJobsheetInformation,
  selectPutJobsheetInformationReducer,
} from './state/selector';
import {
  removeJobRequest,
} from './state/action';

const Pagination = () => (
  <div className="pagination">
    <Link to="/" className="btn">Previous</Link>
    <Link to="/" className="btn">Next</Link>
  </div>
);

const PreviousJobsPage = () => {
  const dispatch = useDispatch();

  const {
    putJobsheetInformation,
    isEffect,
  } = useSelector(
    state => ({
      putJobsheetInformation: selectPutJobsheetInformation(state),
      isEffect: selectPutJobsheetInformationReducer(state).get('effect'),
    }),
  );

  const [data, setData] = useState([]);

  const getListJob = () => {
    apiDB.listJob()
      .then(res => {
        const docs = res.rows.map(({ doc, id }) => ({
          key: id,
          id,
          companyName: doc.driverAndOwnerInfo.companyName,
          vehicleRegistrationNumber: doc.vehicleInformation.vehicleRegistrationNumber,
          driver: doc.driverAndOwnerInfo.driverName,
          createdAt: doc.createdAt,
          _id: id,
          // eslint-disable-next-line no-underscore-dangle
          _rev: doc._rev,
        }));
        setData(docs);
        console.log(docs.length);
      })
      .catch(err => console.log(err));
  };

  const deleteJob = id => {
    const doc = data.find(e => e.id === id);
    dispatch(removeJobRequest({ values: doc }));
  };

  useEffect(() => {
    if (putJobsheetInformation.isSuccessPut) {
      openNotification('Remove job successfully');
      getListJob();
    }
  }, [putJobsheetInformation.isSuccessPut, isEffect]);

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
      render: ({ id }) => (
        <Space>
          <Link to={`/add-new-job/review/${id}`}>
            <i className="icon-view" />
          </Link>
          <Link to={`/add-new-job/vehicleInformation/${id}`}>
            <i className="icon-edit" />
          </Link>
          <button className="clear-btn-default" type="submit" onClick={() => deleteJob(id)}>
            <i className="icon-remove" />
          </button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getListJob();
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

export default PreviousJobsPage;
