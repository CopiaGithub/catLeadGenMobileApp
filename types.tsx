declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  DashboardDrawer: undefined;
  ForgotPassword: undefined;
  Leads: undefined;
  CustomerCreateOption: undefined;
  AddMachineDetails: undefined;
  Approvals: undefined;
  Campaigns: undefined;
  CreateCampaign: undefined;
  Gifts: undefined;
  Users: undefined;
  CreateUser: {
    operation: string;
  };
  Reports: undefined;
};
