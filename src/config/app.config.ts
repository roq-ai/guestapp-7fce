interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Owner'],
  customerRoles: [],
  tenantRoles: ['Site Owner'],
  tenantName: 'Organization',
  applicationName: 'guestapp',
  addOns: [],
};
