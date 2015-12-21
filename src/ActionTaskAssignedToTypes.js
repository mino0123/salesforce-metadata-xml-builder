module.exports = (value) => {
  if (!value) { return ''; }
  if (["user","role","opportunityTeam","accountTeam","owner","accountOwner","creator","accountCreator","partnerUser","portalRole"].indexOf(value) < 0) {
    throw new Error('Invalid ActionTaskAssignedToTypes value: ' + value);
  }
  return value;
};