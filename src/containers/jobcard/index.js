import { Switch, Link }       from "react-router-dom";
import RouteWithSubRoutes     from '../../router/RouteWithSubRoutes';

const JobCardPage = ({ routes }) => {
  return (
    <div>
      <h2>Jobcard</h2>
      <ul>
        <li>
          <Link to="/add-new-job/vehicle-information">
            VehicleInformation
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/driver-and-owner-info">
            DriverAndOwnerInfo
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/vehicle-inspection">
            VehicleInspection
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/type-inspection">
            TypeInspection
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/job-workSheet">
            JobWorkSheet
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/service-recommendation">
            ServiceRecommendation
          </Link>
        </li>
        <li>
          <Link to="/add-new-job/review">
            review
          </Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default JobCardPage;
