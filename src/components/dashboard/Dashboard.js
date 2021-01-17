import {
  Link,
} from "react-router-dom";

const Dashboard = ({
  addNewJob,
  viewPreviousJobs
}) => {
  return (
    <div className="dashboard container">
      <h1 className="main-title">
        Dashboard
      </h1>
      <div className="dashboard-nav">
        <Link to="/add-new-job">
          Add a new Job
        </Link>
        <Link to="/previous-jobs">
          View previous jobs
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
