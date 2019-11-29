
module.exports = (object, asChild) => {
  var rootTagStart = '<UserManagementSettings>';
  var rootTagEnd = '</UserManagementSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCanAnswerContainUsername == null ? '' : '<enableCanAnswerContainUsername>' + object.enableCanAnswerContainUsername + '</enableCanAnswerContainUsername>'}
	${object.enableCanSaveUserPerm == null ? '' : '<enableCanSaveUserPerm>' + object.enableCanSaveUserPerm + '</enableCanSaveUserPerm>'}
	${object.enableConcealPersonalInfo == null ? '' : '<enableConcealPersonalInfo>' + object.enableConcealPersonalInfo + '</enableConcealPersonalInfo>'}
	${object.enableContactlessExternalIdentityUsers == null ? '' : '<enableContactlessExternalIdentityUsers>' + object.enableContactlessExternalIdentityUsers + '</enableContactlessExternalIdentityUsers>'}
	${object.enableEnhancedPermsetMgmt == null ? '' : '<enableEnhancedPermsetMgmt>' + object.enableEnhancedPermsetMgmt + '</enableEnhancedPermsetMgmt>'}
	${object.enableEnhancedProfileMgmt == null ? '' : '<enableEnhancedProfileMgmt>' + object.enableEnhancedProfileMgmt + '</enableEnhancedProfileMgmt>'}
	${object.enableNewProfileUI == null ? '' : '<enableNewProfileUI>' + object.enableNewProfileUI + '</enableNewProfileUI>'}
	${object.enableScrambleUserData == null ? '' : '<enableScrambleUserData>' + object.enableScrambleUserData + '</enableScrambleUserData>'}
	${object.enableUserSelfDeactivate == null ? '' : '<enableUserSelfDeactivate>' + object.enableUserSelfDeactivate + '</enableUserSelfDeactivate>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}