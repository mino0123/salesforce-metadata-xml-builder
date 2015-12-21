module.exports = (value) => {
  if (!value) { return ''; }
  if (["group","role","user","opportunityTeam","accountTeam","roleSubordinates","owner","creator","partnerUser","accountOwner","customerPortalUser","portalRole","portalRoleSubordinates","contactLookup","userLookup","roleSubordinatesInternal","email","caseTeam","campaignMemberDerivedOwner"].indexOf(value) < 0) {
    throw new Error('Invalid ActionEmailRecipientTypes value: ' + value);
  }
  return value;
};