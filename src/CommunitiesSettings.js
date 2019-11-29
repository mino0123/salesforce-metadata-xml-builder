
module.exports = (object, asChild) => {
  var rootTagStart = '<CommunitiesSettings>';
  var rootTagEnd = '</CommunitiesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canModerateAllFeedPosts == null ? '' : '<canModerateAllFeedPosts>' + object.canModerateAllFeedPosts + '</canModerateAllFeedPosts>'}
	${object.canModerateInternalFeedPosts == null ? '' : '<canModerateInternalFeedPosts>' + object.canModerateInternalFeedPosts + '</canModerateInternalFeedPosts>'}
	${object.embeddedVisualforcePages == null ? '' : '<embeddedVisualforcePages>' + object.embeddedVisualforcePages + '</embeddedVisualforcePages>'}
	${object.enableCommunityWorkspaces == null ? '' : '<enableCommunityWorkspaces>' + object.enableCommunityWorkspaces + '</enableCommunityWorkspaces>'}
	${object.enableCspContactVisibilityPref == null ? '' : '<enableCspContactVisibilityPref>' + object.enableCspContactVisibilityPref + '</enableCspContactVisibilityPref>'}
	${object.enableCspNotesOnAccConPref == null ? '' : '<enableCspNotesOnAccConPref>' + object.enableCspNotesOnAccConPref + '</enableCspNotesOnAccConPref>'}
	${object.enableEnablePRM == null ? '' : '<enableEnablePRM>' + object.enableEnablePRM + '</enableEnablePRM>'}
	${object.enableExternalAccHierPref == null ? '' : '<enableExternalAccHierPref>' + object.enableExternalAccHierPref + '</enableExternalAccHierPref>'}
	${object.enableGuestRecordReassignOrgPref == null ? '' : '<enableGuestRecordReassignOrgPref>' + object.enableGuestRecordReassignOrgPref + '</enableGuestRecordReassignOrgPref>'}
	${object.enableInviteChatterGuestEnabled == null ? '' : '<enableInviteChatterGuestEnabled>' + object.enableInviteChatterGuestEnabled + '</enableInviteChatterGuestEnabled>'}
	${object.enableNetPortalUserReportOpts == null ? '' : '<enableNetPortalUserReportOpts>' + object.enableNetPortalUserReportOpts + '</enableNetPortalUserReportOpts>'}
	${object.enableNetworksEnabled == null ? '' : '<enableNetworksEnabled>' + object.enableNetworksEnabled + '</enableNetworksEnabled>'}
	${object.enableOotbProfExtUserOpsEnable == null ? '' : '<enableOotbProfExtUserOpsEnable>' + object.enableOotbProfExtUserOpsEnable + '</enableOotbProfExtUserOpsEnable>'}
	${object.enablePRMAccRelPref == null ? '' : '<enablePRMAccRelPref>' + object.enablePRMAccRelPref + '</enablePRMAccRelPref>'}
	${object.enablePowerCustomerCaseStatus == null ? '' : '<enablePowerCustomerCaseStatus>' + object.enablePowerCustomerCaseStatus + '</enablePowerCustomerCaseStatus>'}
	${object.enableRelaxPartnerAccountFieldPref == null ? '' : '<enableRelaxPartnerAccountFieldPref>' + object.enableRelaxPartnerAccountFieldPref + '</enableRelaxPartnerAccountFieldPref>'}
	${object.enableUsernameUniqForOrgPref == null ? '' : '<enableUsernameUniqForOrgPref>' + object.enableUsernameUniqForOrgPref + '</enableUsernameUniqForOrgPref>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}