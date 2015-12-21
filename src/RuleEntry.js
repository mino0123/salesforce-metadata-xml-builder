const AssignToLookupValueType = require('./AssignToLookupValueType');
const BusinessHoursSourceType = require('./BusinessHoursSourceType');
const FilterItem = require('./FilterItem');
const EscalationAction = require('./EscalationAction');
const EscalationStartTimeType = require('./EscalationStartTimeType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RuleEntry>';
  var rootTagEnd = '</RuleEntry>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignedTo == null ? '' : '<assignedTo>' + object.assignedTo + '</assignedTo>'}
	${object.assignedToType == null ? '' : '<assignedToType>' + AssignToLookupValueType(object.assignedToType, true) + '</assignedToType>'}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.businessHours == null ? '' : '<businessHours>' + object.businessHours + '</businessHours>'}
	${object.businessHoursSource == null ? '' : '<businessHoursSource>' + BusinessHoursSourceType(object.businessHoursSource, true) + '</businessHoursSource>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + FilterItem(p, true) + '</criteriaItems>')}
	${object.disableEscalationWhenModified == null ? '' : '<disableEscalationWhenModified>' + object.disableEscalationWhenModified + '</disableEscalationWhenModified>'}
	${object.escalationAction == null ? '' : object.escalationAction.map(p => '<escalationAction>' + EscalationAction(p, true) + '</escalationAction>')}
	${object.escalationStartTime == null ? '' : '<escalationStartTime>' + EscalationStartTimeType(object.escalationStartTime, true) + '</escalationStartTime>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.notifyCcRecipients == null ? '' : '<notifyCcRecipients>' + object.notifyCcRecipients + '</notifyCcRecipients>'}
	${object.overrideExistingTeams == null ? '' : '<overrideExistingTeams>' + object.overrideExistingTeams + '</overrideExistingTeams>'}
	${object.replyToEmail == null ? '' : '<replyToEmail>' + object.replyToEmail + '</replyToEmail>'}
	${object.senderEmail == null ? '' : '<senderEmail>' + object.senderEmail + '</senderEmail>'}
	${object.senderName == null ? '' : '<senderName>' + object.senderName + '</senderName>'}
	${object.team == null ? '' : object.team.map(p => '<team>' + p + '</team>')}
	${object.template == null ? '' : '<template>' + object.template + '</template>'}
${rootTagEnd}`;
}