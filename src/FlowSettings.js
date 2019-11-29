
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowSettings>';
  var rootTagEnd = '</FlowSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableFlowBREncodedFixEnabled == null ? '' : '<enableFlowBREncodedFixEnabled>' + object.enableFlowBREncodedFixEnabled + '</enableFlowBREncodedFixEnabled>'}
	${object.enableFlowDeployAsActiveEnabled == null ? '' : '<enableFlowDeployAsActiveEnabled>' + object.enableFlowDeployAsActiveEnabled + '</enableFlowDeployAsActiveEnabled>'}
	${object.enableFlowFieldFilterEnabled == null ? '' : '<enableFlowFieldFilterEnabled>' + object.enableFlowFieldFilterEnabled + '</enableFlowFieldFilterEnabled>'}
	${object.enableFlowFormulasFixEnabled == null ? '' : '<enableFlowFormulasFixEnabled>' + object.enableFlowFormulasFixEnabled + '</enableFlowFormulasFixEnabled>'}
	${object.enableFlowInterviewSharingEnabled == null ? '' : '<enableFlowInterviewSharingEnabled>' + object.enableFlowInterviewSharingEnabled + '</enableFlowInterviewSharingEnabled>'}
	${object.enableFlowNullPreviousValueFix == null ? '' : '<enableFlowNullPreviousValueFix>' + object.enableFlowNullPreviousValueFix + '</enableFlowNullPreviousValueFix>'}
	${object.enableFlowPauseEnabled == null ? '' : '<enableFlowPauseEnabled>' + object.enableFlowPauseEnabled + '</enableFlowPauseEnabled>'}
	${object.enableFlowUseApexExceptionEmail == null ? '' : '<enableFlowUseApexExceptionEmail>' + object.enableFlowUseApexExceptionEmail + '</enableFlowUseApexExceptionEmail>'}
	${object.enableInvocableFlowFixEnabled == null ? '' : '<enableInvocableFlowFixEnabled>' + object.enableInvocableFlowFixEnabled + '</enableInvocableFlowFixEnabled>'}
	${object.enableLightningRuntimeEnabled == null ? '' : '<enableLightningRuntimeEnabled>' + object.enableLightningRuntimeEnabled + '</enableLightningRuntimeEnabled>'}
	${object.enableUseFlowBuilder == null ? '' : '<enableUseFlowBuilder>' + object.enableUseFlowBuilder + '</enableUseFlowBuilder>'}
	${object.isAccessToInvokedApexRequired == null ? '' : '<isAccessToInvokedApexRequired>' + object.isAccessToInvokedApexRequired + '</isAccessToInvokedApexRequired>'}
	${object.isEnhancedFlowListViewVisible == null ? '' : '<isEnhancedFlowListViewVisible>' + object.isEnhancedFlowListViewVisible + '</isEnhancedFlowListViewVisible>'}
	${object.isManageFlowRequiredForAutomationCharts == null ? '' : '<isManageFlowRequiredForAutomationCharts>' + object.isManageFlowRequiredForAutomationCharts + '</isManageFlowRequiredForAutomationCharts>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}