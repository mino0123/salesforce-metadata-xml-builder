const ModerationRuleAction = require('./ModerationRuleAction');
const ModeratedEntityField = require('./ModeratedEntityField');

module.exports = (object, asChild) => {
  var rootTagStart = '<ModerationRule>';
  var rootTagEnd = '</ModerationRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + ModerationRuleAction(object.action, true) + '</action>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.entitiesAndFields == null ? '' : object.entitiesAndFields.map(p => '<entitiesAndFields>' + ModeratedEntityField(p, true) + '</entitiesAndFields>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.userMessage == null ? '' : '<userMessage>' + object.userMessage + '</userMessage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}