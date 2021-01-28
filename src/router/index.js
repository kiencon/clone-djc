import React from 'react';
import { Switch } from 'react-router-dom';
import DashboardPage from '../containers/dashboard/index';
import DriverAndOwnerInfo from '../containers/jobcard/components/DriverAndOwnerInfo';
import JobWorkSheet from '../containers/jobcard/components/JobWorkSheet';
import Review from '../containers/jobcard/components/Review';
import ServiceRecommendation from '../containers/jobcard/components/ServiceRecommendation';
import TypeInspection from '../containers/jobcard/components/TypeInspection';
import VehicleInformation from '../containers/jobcard/vehicleInformation';
import VehicleInspection from '../containers/jobcard/components/VehicleInspection';
import JobCardPage from '../containers/jobcard/index';
import PreviousJobs from '../containers/previousJobs/index';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const routes = [
  {
    path: '/dashboard',
    component: DashboardPage,
  },
  {
    path: '/previous-jobs',
    component: PreviousJobs,
  },
  {
    path: '/add-new-job',
    component: JobCardPage,
    routes: [
      {
        path: '/add-new-job/vehicle-information',
        component: VehicleInformation,
      },
      {
        path: '/add-new-job/driver-and-owner-info',
        component: DriverAndOwnerInfo,
      },
      {
        path: '/add-new-job/vehicle-inspection',
        component: VehicleInspection,
      },
      {
        path: '/add-new-job/type-inspection',
        component: TypeInspection,
      },
      {
        path: '/add-new-job/job-workSheet',
        component: JobWorkSheet,
      },
      {
        path: '/add-new-job/service-recommendation',
        component: ServiceRecommendation,
      },
      {
        path: '/add-new-job/review',
        component: Review,
      },
    ],
  },
];

const AppRouter = () => (
  <Switch>
    {routes.map(route => (
      <RouteWithSubRoutes key={route.path} {...route} />
    ))}
  </Switch>
);

export default AppRouter;
