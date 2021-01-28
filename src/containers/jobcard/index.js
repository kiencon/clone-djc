import React from 'react';
import { Link, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/RouteWithSubRoutes';
import VehicleInformation from './vehicleInformation/index';

const JobCardPage = ({ routes }) => {
  const jobcardRoutes = [{
    name: 'Vehicle Information',
    path: '/add-new-job/vehicle-information',
  }, {
    name: 'Driver And Owner Info',
    path: '/add-new-job/driver-and-owner-info',
  }, {
    name: 'Vehicle Inspection',
    path: '/add-new-job/vehicle-inspection',
  }, {
    name: 'Type Inspection',
    path: '/add-new-job/tyre-inspection',
  }, {
    name: 'Job WorkSheet',
    path: '/add-new-job/job-workSheet',
  }, {
    name: 'Service Recommendation',
    path: '/add-new-job/service-recommendation',
  }, {
    name: 'review',
    path: '/add-new-job/review',
  }];
  return (
    <div className="jobcard">
      <h1>sdsadsad</h1>
      <VehicleInformation />
      <div className="jobcard-nav">
        <ul>
          {
            jobcardRoutes.map(({ name, path }) => (
              <li key={path}>
                <Link to={path}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="jobcard-item">
        <Switch>
          {routes.map(route => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default JobCardPage;
