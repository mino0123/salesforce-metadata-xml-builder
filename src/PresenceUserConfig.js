const PresenceConfigAssignments = require('./PresenceConfigAssignments');

module.exports = (object, asChild) => {
  var rootTagStart = '<PresenceUserConfig>';
  var rootTagEnd = '</PresenceUserConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignments == null ? '' : '<assignments>' + PresenceConfigAssignments(object.assignments, true) + '</assignments>'}
	${object.capacity == null ? '' : '<capacity>' + object.capacity + '</capacity>'}
	${object.declineReasons == null ? '' : object.declineReasons.map(p => '<declineReasons>' + p + '</declineReasons>').join('')}
	${object.enableAutoAccept == null ? '' : '<enableAutoAccept>' + object.enableAutoAccept + '</enableAutoAccept>'}
	${object.enableDecline == null ? '' : '<enableDecline>' + object.enableDecline + '</enableDecline>'}
	${object.enableDeclineReason == null ? '' : '<enableDeclineReason>' + object.enableDeclineReason + '</enableDeclineReason>'}
	${object.enableDisconnectSound == null ? '' : '<enableDisconnectSound>' + object.enableDisconnectSound + '</enableDisconnectSound>'}
	${object.enableRequestSound == null ? '' : '<enableRequestSound>' + object.enableRequestSound + '</enableRequestSound>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.presenceStatusOnDecline == null ? '' : '<presenceStatusOnDecline>' + object.presenceStatusOnDecline + '</presenceStatusOnDecline>'}
	${object.presenceStatusOnPushTimeout == null ? '' : '<presenceStatusOnPushTimeout>' + object.presenceStatusOnPushTimeout + '</presenceStatusOnPushTimeout>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}