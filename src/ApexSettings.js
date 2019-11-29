
module.exports = (object, asChild) => {
  var rootTagStart = '<ApexSettings>';
  var rootTagEnd = '</ApexSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAggregateCodeCoverageOnly == null ? '' : '<enableAggregateCodeCoverageOnly>' + object.enableAggregateCodeCoverageOnly + '</enableAggregateCodeCoverageOnly>'}
	${object.enableApexAccessRightsPref == null ? '' : '<enableApexAccessRightsPref>' + object.enableApexAccessRightsPref + '</enableApexAccessRightsPref>'}
	${object.enableApexApprovalLockUnlock == null ? '' : '<enableApexApprovalLockUnlock>' + object.enableApexApprovalLockUnlock + '</enableApexApprovalLockUnlock>'}
	${object.enableApexCtrlImplicitWithSharingPref == null ? '' : '<enableApexCtrlImplicitWithSharingPref>' + object.enableApexCtrlImplicitWithSharingPref + '</enableApexCtrlImplicitWithSharingPref>'}
	${object.enableApexPropertyGetterPref == null ? '' : '<enableApexPropertyGetterPref>' + object.enableApexPropertyGetterPref + '</enableApexPropertyGetterPref>'}
	${object.enableAuraApexCtrlAuthUserAccessCheckPref == null ? '' : '<enableAuraApexCtrlAuthUserAccessCheckPref>' + object.enableAuraApexCtrlAuthUserAccessCheckPref + '</enableAuraApexCtrlAuthUserAccessCheckPref>'}
	${object.enableAuraApexCtrlGuestUserAccessCheckPref == null ? '' : '<enableAuraApexCtrlGuestUserAccessCheckPref>' + object.enableAuraApexCtrlGuestUserAccessCheckPref + '</enableAuraApexCtrlGuestUserAccessCheckPref>'}
	${object.enableCompileOnDeploy == null ? '' : '<enableCompileOnDeploy>' + object.enableCompileOnDeploy + '</enableCompileOnDeploy>'}
	${object.enableDisableParallelApexTesting == null ? '' : '<enableDisableParallelApexTesting>' + object.enableDisableParallelApexTesting + '</enableDisableParallelApexTesting>'}
	${object.enableDoNotEmailDebugLog == null ? '' : '<enableDoNotEmailDebugLog>' + object.enableDoNotEmailDebugLog + '</enableDoNotEmailDebugLog>'}
	${object.enableGaplessTestAutoNum == null ? '' : '<enableGaplessTestAutoNum>' + object.enableGaplessTestAutoNum + '</enableGaplessTestAutoNum>'}
	${object.enableMngdCtrlActionAccessPref == null ? '' : '<enableMngdCtrlActionAccessPref>' + object.enableMngdCtrlActionAccessPref + '</enableMngdCtrlActionAccessPref>'}
	${object.enableNonCertifiedApexMdCrud == null ? '' : '<enableNonCertifiedApexMdCrud>' + object.enableNonCertifiedApexMdCrud + '</enableNonCertifiedApexMdCrud>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}