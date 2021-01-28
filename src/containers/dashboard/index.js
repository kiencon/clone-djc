import React from 'react';
import { useHistory } from 'react-router-dom';
import Dashboard from '../../components/dashboard/Dashboard';

const DashboardPage = () => {
  const history = useHistory();
  const viewPreviousJobs = event => {
    event.preventDefault();
    history.push('/previous-jobs');
  };

  const addNewJob = event => {
    event.preventDefault();
    history.push('/add-new-job');
  };

  return (
    <Dashboard
      addNewJob={addNewJob}
      viewPreviousJobs={viewPreviousJobs}
    />
  );
};

export default DashboardPage;
