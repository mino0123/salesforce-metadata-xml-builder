
module.exports = (object, asChild) => {
  var rootTagStart = '<ContentSettings>';
  var rootTagEnd = '</ContentSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableChatterFileLink == null ? '' : '<enableChatterFileLink>' + object.enableChatterFileLink + '</enableChatterFileLink>'}
	${object.enableContent == null ? '' : '<enableContent>' + object.enableContent + '</enableContent>'}
	${object.enableContentAutoAssign == null ? '' : '<enableContentAutoAssign>' + object.enableContentAutoAssign + '</enableContentAutoAssign>'}
	${object.enableContentDistForPortalUsers == null ? '' : '<enableContentDistForPortalUsers>' + object.enableContentDistForPortalUsers + '</enableContentDistForPortalUsers>'}
	${object.enableContentDistPwOptionsBit1 == null ? '' : '<enableContentDistPwOptionsBit1>' + object.enableContentDistPwOptionsBit1 + '</enableContentDistPwOptionsBit1>'}
	${object.enableContentDistPwOptionsBit2 == null ? '' : '<enableContentDistPwOptionsBit2>' + object.enableContentDistPwOptionsBit2 + '</enableContentDistPwOptionsBit2>'}
	${object.enableContentDistribution == null ? '' : '<enableContentDistribution>' + object.enableContentDistribution + '</enableContentDistribution>'}
	${object.enableContentSupportMultiLanguage == null ? '' : '<enableContentSupportMultiLanguage>' + object.enableContentSupportMultiLanguage + '</enableContentSupportMultiLanguage>'}
	${object.enableContentWorkspaceAccess == null ? '' : '<enableContentWorkspaceAccess>' + object.enableContentWorkspaceAccess + '</enableContentWorkspaceAccess>'}
	${object.enableFileShareSetByRecord == null ? '' : '<enableFileShareSetByRecord>' + object.enableFileShareSetByRecord + '</enableFileShareSetByRecord>'}
	${object.enableFilesUsrShareNetRestricted == null ? '' : '<enableFilesUsrShareNetRestricted>' + object.enableFilesUsrShareNetRestricted + '</enableFilesUsrShareNetRestricted>'}
	${object.enableJPGPreviews == null ? '' : '<enableJPGPreviews>' + object.enableJPGPreviews + '</enableJPGPreviews>'}
	${object.enableLibraryManagedFiles == null ? '' : '<enableLibraryManagedFiles>' + object.enableLibraryManagedFiles + '</enableLibraryManagedFiles>'}
	${object.enableSiteGuestUserToUploadFiles == null ? '' : '<enableSiteGuestUserToUploadFiles>' + object.enableSiteGuestUserToUploadFiles + '</enableSiteGuestUserToUploadFiles>'}
	${object.enableUploadFilesOnAttachments == null ? '' : '<enableUploadFilesOnAttachments>' + object.enableUploadFilesOnAttachments + '</enableUploadFilesOnAttachments>'}
	${object.skipContentAssetTriggers == null ? '' : '<skipContentAssetTriggers>' + object.skipContentAssetTriggers + '</skipContentAssetTriggers>'}
	${object.skipContentAssetTriggersOnDeploy == null ? '' : '<skipContentAssetTriggersOnDeploy>' + object.skipContentAssetTriggersOnDeploy + '</skipContentAssetTriggersOnDeploy>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}