
module.exports = (object, asChild) => {
  var rootTagStart = '<UserEngagementSettings>';
  var rootTagEnd = '</UserEngagementSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canGovCloudUseAdoptionApps == null ? '' : '<canGovCloudUseAdoptionApps>' + object.canGovCloudUseAdoptionApps + '</canGovCloudUseAdoptionApps>'}
	${object.doesScheduledSwitcherRunDaily == null ? '' : '<doesScheduledSwitcherRunDaily>' + object.doesScheduledSwitcherRunDaily + '</doesScheduledSwitcherRunDaily>'}
	${object.enableCustomHelpGlobalSection == null ? '' : '<enableCustomHelpGlobalSection>' + object.enableCustomHelpGlobalSection + '</enableCustomHelpGlobalSection>'}
	${object.enableHelpMenuShowFeedback == null ? '' : '<enableHelpMenuShowFeedback>' + object.enableHelpMenuShowFeedback + '</enableHelpMenuShowFeedback>'}
	${object.enableHelpMenuShowHelp == null ? '' : '<enableHelpMenuShowHelp>' + object.enableHelpMenuShowHelp + '</enableHelpMenuShowHelp>'}
	${object.enableHelpMenuShowNewUser == null ? '' : '<enableHelpMenuShowNewUser>' + object.enableHelpMenuShowNewUser + '</enableHelpMenuShowNewUser>'}
	${object.enableHelpMenuShowSearch == null ? '' : '<enableHelpMenuShowSearch>' + object.enableHelpMenuShowSearch + '</enableHelpMenuShowSearch>'}
	${object.enableHelpMenuShowSfdcContent == null ? '' : '<enableHelpMenuShowSfdcContent>' + object.enableHelpMenuShowSfdcContent + '</enableHelpMenuShowSfdcContent>'}
	${object.enableHelpMenuShowShortcut == null ? '' : '<enableHelpMenuShowShortcut>' + object.enableHelpMenuShowShortcut + '</enableHelpMenuShowShortcut>'}
	${object.enableHelpMenuShowSupport == null ? '' : '<enableHelpMenuShowSupport>' + object.enableHelpMenuShowSupport + '</enableHelpMenuShowSupport>'}
	${object.enableHelpMenuShowTrailhead == null ? '' : '<enableHelpMenuShowTrailhead>' + object.enableHelpMenuShowTrailhead + '</enableHelpMenuShowTrailhead>'}
	${object.enableIBILOptOutDashboards == null ? '' : '<enableIBILOptOutDashboards>' + object.enableIBILOptOutDashboards + '</enableIBILOptOutDashboards>'}
	${object.enableIBILOptOutEvents == null ? '' : '<enableIBILOptOutEvents>' + object.enableIBILOptOutEvents + '</enableIBILOptOutEvents>'}
	${object.enableIBILOptOutReports == null ? '' : '<enableIBILOptOutReports>' + object.enableIBILOptOutReports + '</enableIBILOptOutReports>'}
	${object.enableIBILOptOutTasks == null ? '' : '<enableIBILOptOutTasks>' + object.enableIBILOptOutTasks + '</enableIBILOptOutTasks>'}
	${object.enableLexToClassicFeedbackEnable == null ? '' : '<enableLexToClassicFeedbackEnable>' + object.enableLexToClassicFeedbackEnable + '</enableLexToClassicFeedbackEnable>'}
	${object.enableOrchestrationInSandbox == null ? '' : '<enableOrchestrationInSandbox>' + object.enableOrchestrationInSandbox + '</enableOrchestrationInSandbox>'}
	${object.enableOrgUserAssistEnabled == null ? '' : '<enableOrgUserAssistEnabled>' + object.enableOrgUserAssistEnabled + '</enableOrgUserAssistEnabled>'}
	${object.enableScheduledSwitcher == null ? '' : '<enableScheduledSwitcher>' + object.enableScheduledSwitcher + '</enableScheduledSwitcher>'}
	${object.enableSfdcProductFeedbackSurvey == null ? '' : '<enableSfdcProductFeedbackSurvey>' + object.enableSfdcProductFeedbackSurvey + '</enableSfdcProductFeedbackSurvey>'}
	${object.enableShowSalesforceUserAssist == null ? '' : '<enableShowSalesforceUserAssist>' + object.enableShowSalesforceUserAssist + '</enableShowSalesforceUserAssist>'}
	${object.isAutoTransitionDelayed == null ? '' : '<isAutoTransitionDelayed>' + object.isAutoTransitionDelayed + '</isAutoTransitionDelayed>'}
	${object.isCrucNotificationDisabled == null ? '' : '<isCrucNotificationDisabled>' + object.isCrucNotificationDisabled + '</isCrucNotificationDisabled>'}
	${object.isCustomProfileAutoTransitionDelayed == null ? '' : '<isCustomProfileAutoTransitionDelayed>' + object.isCustomProfileAutoTransitionDelayed + '</isCustomProfileAutoTransitionDelayed>'}
	${object.isLEXWelcomeMatDisabled == null ? '' : '<isLEXWelcomeMatDisabled>' + object.isLEXWelcomeMatDisabled + '</isLEXWelcomeMatDisabled>'}
	${object.isMeetTheAssistantDisabledInClassic == null ? '' : '<isMeetTheAssistantDisabledInClassic>' + object.isMeetTheAssistantDisabledInClassic + '</isMeetTheAssistantDisabledInClassic>'}
	${object.isMeetTheAssistantDisabledInLightning == null ? '' : '<isMeetTheAssistantDisabledInLightning>' + object.isMeetTheAssistantDisabledInLightning + '</isMeetTheAssistantDisabledInLightning>'}
	${object.optimizerAppEnabled == null ? '' : '<optimizerAppEnabled>' + object.optimizerAppEnabled + '</optimizerAppEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}