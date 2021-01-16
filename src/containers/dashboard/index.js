import Dashboard from '../../components/dashboard/Dashboard';
import history from 'history';

const DashboardPage = () => {
  const viewPreviousJobs = () => history.push('/previous-jobs');

  const addNewJob= () => history.push('/add-new-job');

  return (
    <Dashboard
      addNewJob={addNewJob}
      viewPreviousJobs={viewPreviousJobs}
    />
  );
};

export default DashboardPage;
