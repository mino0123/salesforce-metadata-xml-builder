
module.exports = (object, asChild) => {
  var rootTagStart = '<SharingSettings>';
  var rootTagEnd = '</SharingSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAccountRoleOptimization == null ? '' : '<enableAccountRoleOptimization>' + object.enableAccountRoleOptimization + '</enableAccountRoleOptimization>'}
	${object.enableAssetSharing == null ? '' : '<enableAssetSharing>' + object.enableAssetSharing + '</enableAssetSharing>'}
	${object.enableCommunityUserVisibility == null ? '' : '<enableCommunityUserVisibility>' + object.enableCommunityUserVisibility + '</enableCommunityUserVisibility>'}
	${object.enableExternalSharingModel == null ? '' : '<enableExternalSharingModel>' + object.enableExternalSharingModel + '</enableExternalSharingModel>'}
	${object.enableManagerGroups == null ? '' : '<enableManagerGroups>' + object.enableManagerGroups + '</enableManagerGroups>'}
	${object.enableManualUserRecordSharing == null ? '' : '<enableManualUserRecordSharing>' + object.enableManualUserRecordSharing + '</enableManualUserRecordSharing>'}
	${object.enablePartnerSuperUserAccess == null ? '' : '<enablePartnerSuperUserAccess>' + object.enablePartnerSuperUserAccess + '</enablePartnerSuperUserAccess>'}
	${object.enablePortalUserCaseSharing == null ? '' : '<enablePortalUserCaseSharing>' + object.enablePortalUserCaseSharing + '</enablePortalUserCaseSharing>'}
	${object.enablePortalUserVisibility == null ? '' : '<enablePortalUserVisibility>' + object.enablePortalUserVisibility + '</enablePortalUserVisibility>'}
	${object.enableRemoveTMGroupMembership == null ? '' : '<enableRemoveTMGroupMembership>' + object.enableRemoveTMGroupMembership + '</enableRemoveTMGroupMembership>'}
	${object.enableSecureGuestAccess == null ? '' : '<enableSecureGuestAccess>' + object.enableSecureGuestAccess + '</enableSecureGuestAccess>'}
	${object.enableStandardReportVisibility == null ? '' : '<enableStandardReportVisibility>' + object.enableStandardReportVisibility + '</enableStandardReportVisibility>'}
	${object.enableTerritoryForecastManager == null ? '' : '<enableTerritoryForecastManager>' + object.enableTerritoryForecastManager + '</enableTerritoryForecastManager>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}