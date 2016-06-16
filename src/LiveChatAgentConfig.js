const AgentConfigAssignments = require('./AgentConfigAssignments');
const SupervisorAgentStatusFilter = require('./SupervisorAgentStatusFilter');
const SupervisorAgentConfigSkills = require('./SupervisorAgentConfigSkills');
const AgentConfigButtons = require('./AgentConfigButtons');
const AgentConfigSkills = require('./AgentConfigSkills');

module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatAgentConfig>';
  var rootTagEnd = '</LiveChatAgentConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignments == null ? '' : '<assignments>' + AgentConfigAssignments(object.assignments, true) + '</assignments>'}
	${object.autoGreeting == null ? '' : '<autoGreeting>' + object.autoGreeting + '</autoGreeting>'}
	${object.capacity == null ? '' : '<capacity>' + object.capacity + '</capacity>'}
	${object.criticalWaitTime == null ? '' : '<criticalWaitTime>' + object.criticalWaitTime + '</criticalWaitTime>'}
	${object.customAgentName == null ? '' : '<customAgentName>' + object.customAgentName + '</customAgentName>'}
	${object.enableAgentFileTransfer == null ? '' : '<enableAgentFileTransfer>' + object.enableAgentFileTransfer + '</enableAgentFileTransfer>'}
	${object.enableAgentSneakPeek == null ? '' : '<enableAgentSneakPeek>' + object.enableAgentSneakPeek + '</enableAgentSneakPeek>'}
	${object.enableAssistanceFlag == null ? '' : '<enableAssistanceFlag>' + object.enableAssistanceFlag + '</enableAssistanceFlag>'}
	${object.enableAutoAwayOnDecline == null ? '' : '<enableAutoAwayOnDecline>' + object.enableAutoAwayOnDecline + '</enableAutoAwayOnDecline>'}
	${object.enableAutoAwayOnPushTimeout == null ? '' : '<enableAutoAwayOnPushTimeout>' + object.enableAutoAwayOnPushTimeout + '</enableAutoAwayOnPushTimeout>'}
	${object.enableChatConferencing == null ? '' : '<enableChatConferencing>' + object.enableChatConferencing + '</enableChatConferencing>'}
	${object.enableChatMonitoring == null ? '' : '<enableChatMonitoring>' + object.enableChatMonitoring + '</enableChatMonitoring>'}
	${object.enableChatTransferToAgent == null ? '' : '<enableChatTransferToAgent>' + object.enableChatTransferToAgent + '</enableChatTransferToAgent>'}
	${object.enableChatTransferToButton == null ? '' : '<enableChatTransferToButton>' + object.enableChatTransferToButton + '</enableChatTransferToButton>'}
	${object.enableChatTransferToSkill == null ? '' : '<enableChatTransferToSkill>' + object.enableChatTransferToSkill + '</enableChatTransferToSkill>'}
	${object.enableLogoutSound == null ? '' : '<enableLogoutSound>' + object.enableLogoutSound + '</enableLogoutSound>'}
	${object.enableNotifications == null ? '' : '<enableNotifications>' + object.enableNotifications + '</enableNotifications>'}
	${object.enableRequestSound == null ? '' : '<enableRequestSound>' + object.enableRequestSound + '</enableRequestSound>'}
	${object.enableSneakPeek == null ? '' : '<enableSneakPeek>' + object.enableSneakPeek + '</enableSneakPeek>'}
	${object.enableVisitorBlocking == null ? '' : '<enableVisitorBlocking>' + object.enableVisitorBlocking + '</enableVisitorBlocking>'}
	${object.enableWhisperMessage == null ? '' : '<enableWhisperMessage>' + object.enableWhisperMessage + '</enableWhisperMessage>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.supervisorDefaultAgentStatusFilter == null ? '' : '<supervisorDefaultAgentStatusFilter>' + SupervisorAgentStatusFilter(object.supervisorDefaultAgentStatusFilter, true) + '</supervisorDefaultAgentStatusFilter>'}
	${object.supervisorDefaultButtonFilter == null ? '' : '<supervisorDefaultButtonFilter>' + object.supervisorDefaultButtonFilter + '</supervisorDefaultButtonFilter>'}
	${object.supervisorDefaultSkillFilter == null ? '' : '<supervisorDefaultSkillFilter>' + object.supervisorDefaultSkillFilter + '</supervisorDefaultSkillFilter>'}
	${object.supervisorSkills == null ? '' : '<supervisorSkills>' + SupervisorAgentConfigSkills(object.supervisorSkills, true) + '</supervisorSkills>'}
	${object.transferableButtons == null ? '' : '<transferableButtons>' + AgentConfigButtons(object.transferableButtons, true) + '</transferableButtons>'}
	${object.transferableSkills == null ? '' : '<transferableSkills>' + AgentConfigSkills(object.transferableSkills, true) + '</transferableSkills>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}