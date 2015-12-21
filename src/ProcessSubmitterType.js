module.exports = (value) => {
  if (!value) { return ''; }
  if (["group","role","user","roleSubordinates","roleSubordinatesInternal","owner","creator","partnerUser","customerPortalUser","portalRole","portalRoleSubordinates","allInternalUsers"].indexOf(value) < 0) {
    throw new Error('Invalid ProcessSubmitterType value: ' + value);
  }
  return value;
};