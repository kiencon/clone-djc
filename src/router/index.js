import {
  Switch,
} from "react-router-dom";

import PreviousJobs           from '../containers/previousJobs/index';
import DashboardPage           from '../containers/dashboard/index';
import JobCardPage            from '../containers/jobcard/index';
import RouteWithSubRoutes     from './RouteWithSubRoutes';
import VehicleInformation     from '../components/jobcard/VehicleInformation';
import DriverAndOwnerInfo     from '../components/jobcard/DriverAndOwnerInfo';
import TypeInspection         from '../components/jobcard/TypeInspection';
import Review                 from '../components/jobcard/Review';
import ServiceRecommendation  from '../components/jobcard/ServiceRecommendation';
import VehicleInspection      from '../components/jobcard/VehicleInspection';
import JobWorkSheet           from '../components/jobcard/JobWorkSheet';

const routes = [
  {
    path: "/dashboard",
    component: DashboardPage
  },
  {
    path: "/previous-jobs",
    component: PreviousJobs
  },
  {
    path: "/add-new-job",
    component: JobCardPage,
    routes: [
      {
        path: "/add-new-job/vehicle-information",
        component: VehicleInformation
      },
      {
        path: "/add-new-job/driver-and-owner-info",
        component: DriverAndOwnerInfo
      },
      {
        path: "/add-new-job/vehicle-inspection",
        component: VehicleInspection
      },
      {
        path: "/add-new-job/type-inspection",
        component: TypeInspection
      },
      {
        path: "/add-new-job/job-workSheet",
        component: JobWorkSheet
      },
      {
        path: "/add-new-job/service-recommendation",
        component: ServiceRecommendation
      },
      {
        path: "/add-new-job/review",
        component: Review
      }
    ]
  }
];

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};

export default AppRouter;
