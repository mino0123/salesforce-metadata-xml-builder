const AssignToLookupValueType = require('./AssignToLookupValueType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EscalationAction>';
  var rootTagEnd = '</EscalationAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignedTo == null ? '' : '<assignedTo>' + object.assignedTo + '</assignedTo>'}
	${object.assignedToTemplate == null ? '' : '<assignedToTemplate>' + object.assignedToTemplate + '</assignedToTemplate>'}
	${object.assignedToType == null ? '' : '<assignedToType>' + AssignToLookupValueType(object.assignedToType, true) + '</assignedToType>'}
	${object.minutesToEscalation == null ? '' : '<minutesToEscalation>' + object.minutesToEscalation + '</minutesToEscalation>'}
	${object.notifyCaseOwner == null ? '' : '<notifyCaseOwner>' + object.notifyCaseOwner + '</notifyCaseOwner>'}
	${object.notifyEmail == null ? '' : object.notifyEmail.map(p => '<notifyEmail>' + p + '</notifyEmail>')}
	${object.notifyTo == null ? '' : '<notifyTo>' + object.notifyTo + '</notifyTo>'}
	${object.notifyToTemplate == null ? '' : '<notifyToTemplate>' + object.notifyToTemplate + '</notifyToTemplate>'}
${rootTagEnd}`;
}