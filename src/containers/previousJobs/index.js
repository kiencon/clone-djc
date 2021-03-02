import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  DELETE_STATUS,
} from '../../config/const';
import apiDB from '../../database';
import { editJobRequest, reviewJobRequest } from '../jobcard/state/action';
import { openNotification } from '../utils';
import {
  clearJobState, removeJobRequest,
} from './state/action';
import {
  selectRemoveJobsheetInformation,
} from './state/selector';
import { pushJobcardToState } from './utils';

const Pagination = () => (
  <div className="pagination">
    <Link to="/" className="btn">Previous</Link>
    <Link to="/" className="btn">Next</Link>
  </div>
);

const PreviousJobsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    putJobsheetInformation,
  } = useSelector(
    state => ({
      putJobsheetInformation: selectRemoveJobsheetInformation(state),
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
          _id: id,
          // eslint-disable-next-line no-underscore-dangle
          _rev: doc._rev,
          ...doc,
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

  const editJob = id => {
    const doc = data.find(e => e.id === id);
    console.log(doc);
    // eslint-disable-next-line no-underscore-dangle
    dispatch(editJobRequest({ values: { _id: doc._id, _rev: doc._rev } }));
    pushJobcardToState(dispatch, doc);
    history.push('/add-new-job/vehicle-info');
  };

  const reviewJob = id => {
    const doc = data.find(e => e.id === id);
    dispatch(reviewJobRequest());
    pushJobcardToState(dispatch, doc);
    history.push('/add-new-job/review');
  };

  useEffect(() => {
    if (putJobsheetInformation.status === DELETE_STATUS.SUCCESS) {
      openNotification('Remove job successfully');
      dispatch(clearJobState());
      getListJob();
    }
  }, [dispatch, putJobsheetInformation.status]);

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
        const [yy, mm, dd] = createdAt && createdAt.split('T')[0].split('-');
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
          <button
            className="clear-btn-default"
            type="submit"
            onClick={() => reviewJob(id)}
          >
            <i className="icon-view" />
          </button>
          <button
            className="clear-btn-default"
            type="submit"
            to={`/add-new-job/review/${id}`}
            onClick={() => editJob(id)}
          >
            <i className="icon-edit" />
          </button>
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
