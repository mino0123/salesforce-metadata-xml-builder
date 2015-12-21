module.exports = (value) => {
  if (!value) { return ''; }
  if (["Group","Role","RoleAndSubordinates","RoleAndSubordinatesInternal","Manager","ManagerAndSubordinatesInternal","Organization","Territory","TerritoryAndSubordinates","AllPrmUsers","User","PartnerUser","AllCspUsers","CustomerPortalUser","PortalRole","PortalRoleAndSubordinates"].indexOf(value) < 0) {
    throw new Error('Invalid FolderSharedToType value: ' + value);
  }
  return value;
};