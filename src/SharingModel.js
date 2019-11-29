module.exports = (value) => {
  if (!value) { return ''; }
  if (["Private","Read","ReadSelect","ReadWrite","ReadWriteTransfer","FullAccess","ControlledByParent","ControlledByLeadOrContact","ControlledByCampaign"].indexOf(value) < 0) {
    throw new Error('Invalid SharingModel value: ' + value);
  }
  return value;
};