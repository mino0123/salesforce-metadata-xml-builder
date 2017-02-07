const ModerationRuleAction = require('./ModerationRuleAction');
const ModeratedEntityField = require('./ModeratedEntityField');
const RateLimitTimePeriod = require('./RateLimitTimePeriod');
const ModerationRuleType = require('./ModerationRuleType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ModerationRule>';
  var rootTagEnd = '</ModerationRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + ModerationRuleAction(object.action, true) + '</action>'}
	${object.actionLimit == null ? '' : '<actionLimit>' + object.actionLimit + '</actionLimit>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.entitiesAndFields == null ? '' : object.entitiesAndFields.map(p => '<entitiesAndFields>' + ModeratedEntityField(p, true) + '</entitiesAndFields>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.notifyLimit == null ? '' : '<notifyLimit>' + object.notifyLimit + '</notifyLimit>'}
	${object.timePeriod == null ? '' : '<timePeriod>' + RateLimitTimePeriod(object.timePeriod, true) + '</timePeriod>'}
	${object.type == null ? '' : '<type>' + ModerationRuleType(object.type, true) + '</type>'}
	${object.userCriteria == null ? '' : object.userCriteria.map(p => '<userCriteria>' + p + '</userCriteria>').join('')}
	${object.userMessage == null ? '' : '<userMessage>' + object.userMessage + '</userMessage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}