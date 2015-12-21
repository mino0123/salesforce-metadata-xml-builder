const LiveChatButtonPresentation = require('./LiveChatButtonPresentation');
const LiveChatButtonDeployments = require('./LiveChatButtonDeployments');
const LiveChatButtonInviteEndPosition = require('./LiveChatButtonInviteEndPosition');
const LiveChatButtonInviteStartPosition = require('./LiveChatButtonInviteStartPosition');
const LiveChatButtonRoutingType = require('./LiveChatButtonRoutingType');
const LiveChatButtonSkills = require('./LiveChatButtonSkills');
const LiveChatButtonType = require('./LiveChatButtonType');
const Language = require('./Language');

module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatButton>';
  var rootTagEnd = '</LiveChatButton>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.animation == null ? '' : '<animation>' + LiveChatButtonPresentation(object.animation, true) + '</animation>'}
	${object.autoGreeting == null ? '' : '<autoGreeting>' + object.autoGreeting + '</autoGreeting>'}
	${object.chasitorIdleTimeout == null ? '' : '<chasitorIdleTimeout>' + object.chasitorIdleTimeout + '</chasitorIdleTimeout>'}
	${object.chasitorIdleTimeoutWarning == null ? '' : '<chasitorIdleTimeoutWarning>' + object.chasitorIdleTimeoutWarning + '</chasitorIdleTimeoutWarning>'}
	${object.chatPage == null ? '' : '<chatPage>' + object.chatPage + '</chatPage>'}
	${object.customAgentName == null ? '' : '<customAgentName>' + object.customAgentName + '</customAgentName>'}
	${object.deployments == null ? '' : '<deployments>' + LiveChatButtonDeployments(object.deployments, true) + '</deployments>'}
	${object.enableQueue == null ? '' : '<enableQueue>' + object.enableQueue + '</enableQueue>'}
	${object.inviteEndPosition == null ? '' : '<inviteEndPosition>' + LiveChatButtonInviteEndPosition(object.inviteEndPosition, true) + '</inviteEndPosition>'}
	${object.inviteImage == null ? '' : '<inviteImage>' + object.inviteImage + '</inviteImage>'}
	${object.inviteStartPosition == null ? '' : '<inviteStartPosition>' + LiveChatButtonInviteStartPosition(object.inviteStartPosition, true) + '</inviteStartPosition>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.numberOfReroutingAttempts == null ? '' : '<numberOfReroutingAttempts>' + object.numberOfReroutingAttempts + '</numberOfReroutingAttempts>'}
	${object.offlineImage == null ? '' : '<offlineImage>' + object.offlineImage + '</offlineImage>'}
	${object.onlineImage == null ? '' : '<onlineImage>' + object.onlineImage + '</onlineImage>'}
	${object.optionsCustomRoutingIsEnabled == null ? '' : '<optionsCustomRoutingIsEnabled>' + object.optionsCustomRoutingIsEnabled + '</optionsCustomRoutingIsEnabled>'}
	${object.optionsHasChasitorIdleTimeout == null ? '' : '<optionsHasChasitorIdleTimeout>' + object.optionsHasChasitorIdleTimeout + '</optionsHasChasitorIdleTimeout>'}
	${object.optionsHasInviteAfterAccept == null ? '' : '<optionsHasInviteAfterAccept>' + object.optionsHasInviteAfterAccept + '</optionsHasInviteAfterAccept>'}
	${object.optionsHasInviteAfterReject == null ? '' : '<optionsHasInviteAfterReject>' + object.optionsHasInviteAfterReject + '</optionsHasInviteAfterReject>'}
	${object.optionsHasRerouteDeclinedRequest == null ? '' : '<optionsHasRerouteDeclinedRequest>' + object.optionsHasRerouteDeclinedRequest + '</optionsHasRerouteDeclinedRequest>'}
	${object.optionsIsAutoAccept == null ? '' : '<optionsIsAutoAccept>' + object.optionsIsAutoAccept + '</optionsIsAutoAccept>'}
	${object.optionsIsInviteAutoRemove == null ? '' : '<optionsIsInviteAutoRemove>' + object.optionsIsInviteAutoRemove + '</optionsIsInviteAutoRemove>'}
	${object.overallQueueLength == null ? '' : '<overallQueueLength>' + object.overallQueueLength + '</overallQueueLength>'}
	${object.perAgentQueueLength == null ? '' : '<perAgentQueueLength>' + object.perAgentQueueLength + '</perAgentQueueLength>'}
	${object.postChatPage == null ? '' : '<postChatPage>' + object.postChatPage + '</postChatPage>'}
	${object.postChatUrl == null ? '' : '<postChatUrl>' + object.postChatUrl + '</postChatUrl>'}
	${object.preChatFormPage == null ? '' : '<preChatFormPage>' + object.preChatFormPage + '</preChatFormPage>'}
	${object.preChatFormUrl == null ? '' : '<preChatFormUrl>' + object.preChatFormUrl + '</preChatFormUrl>'}
	${object.pushTimeOut == null ? '' : '<pushTimeOut>' + object.pushTimeOut + '</pushTimeOut>'}
	${object.routingType == null ? '' : '<routingType>' + LiveChatButtonRoutingType(object.routingType, true) + '</routingType>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.skills == null ? '' : '<skills>' + LiveChatButtonSkills(object.skills, true) + '</skills>'}
	${object.timeToRemoveInvite == null ? '' : '<timeToRemoveInvite>' + object.timeToRemoveInvite + '</timeToRemoveInvite>'}
	${object.type == null ? '' : '<type>' + LiveChatButtonType(object.type, true) + '</type>'}
	${object.windowLanguage == null ? '' : '<windowLanguage>' + Language(object.windowLanguage, true) + '</windowLanguage>'}
${rootTagEnd}`;
}