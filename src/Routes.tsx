import {
  ActiveFlow,
  Asset,
  DataMonitor,
  Factor,
  Calculator,
  CarbonCal,
  Prediction,
  AssetDetail,
  Offset,
  User,
  Admin,
  Api,
  Flow,
  ChangePassword,
  UpdateInfo,
  UserApi,
  Organization,
  ManageUsers,
  ManageOrg,
  ManageTeam,
  Billing,
  RoleApi,
  UserCalls,
  BillingAccount,
  Payment,
  AssetScopeOneDetails,
  CloudCarbon,
  Dashboard,
} from './Pages'
const routes = [
  {
    route: '/dashboard',
    component: <Dashboard />,
  },
  {
    route: '/ingestion/activeflow',
    component: <ActiveFlow />,
  },
  {
    route: '/ingestion/flow',
    component: <Flow />,
  },
  {
    route: '/measure/asset',
    component: <Asset />,
  },
  {
    route: '/asset',
    component: <AssetDetail />,
  },
  {
    route: '/asset/one',
    component: <AssetScopeOneDetails />,
  },
  {
    route: '/measure/scope',
    component: <DataMonitor />,
  },
  {
    route: '/measure/cloud',
    component: <CloudCarbon />,
  },

  {
    route: '/emission/factors',
    component: <Factor />,
  },
  {
    route: '/emission/calculator',
    component: <Calculator />,
  },
  {
    route: '/reduction/cal',
    component: <CarbonCal />,
  },
  {
    route: '/models/prediction_model',
    component: <Prediction />,
  },
  {
    route: '/offset',
    component: <Offset />,
  },
  {
    route: '/user',
    component: <User />,
  },
  {
    route: '/admin',
    component: <Admin />,
  },
  {
    route: '/api',
    component: <Api />,
  },
  {
    route: '/user/password',
    component: <ChangePassword />,
  },
  {
    route: '/user/update',
    component: <UpdateInfo />,
  },
  {
    route: '/user/api',
    component: <UserApi />,
  },
  {
    route: '/user/org',
    component: <Organization />,
  },
  {
    route: '/admin/users',
    component: <ManageUsers />,
  },
  {
    route: '/admin/org',
    component: <ManageOrg />,
  },
  {
    route: '/admin/team',
    component: <ManageTeam />,
  },
  {
    route: '/admin/billing',
    component: <Billing />,
  },
  {
    route: '/admin/api',
    component: <RoleApi />,
  },
  {
    route: '/admin/calls',
    component: <UserCalls />,
  },
  {
    route: '/admin/billing/account',
    component: <BillingAccount />,
  },
  {
    route: '/admin/billing/payment',
    component: <Payment />,
  },
]
export default routes
