import React from 'react';
import { Switch } from 'react-router-dom';
import DashboardPage from '../containers/dashboard/index';
import JobWorkSheet from '../containers/jobcard/components/JobWorkSheet';
import DriverAndOwnerInfo from '../containers/jobcard/driverAndOwnerInfo';
import JobCardPage from '../containers/jobcard/index';
import Review from '../containers/jobcard/review';
import ServiceRecommendation from '../containers/jobcard/serviceRecommendation';
import TyreInspection from '../containers/jobcard/tyreInspection';
import VehicleInformation from '../containers/jobcard/vehicleInformation';
import VehicleInspection from '../containers/jobcard/vehicleInspection';
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
        path: '/add-new-job/tyre-inspection',
        component: TyreInspection,
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
