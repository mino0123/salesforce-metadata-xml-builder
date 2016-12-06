const DupeActionType = require('./DupeActionType');
const DuplicateRuleFilter = require('./DuplicateRuleFilter');
const DuplicateRuleMatchRule = require('./DuplicateRuleMatchRule');
const DupeSecurityOptionType = require('./DupeSecurityOptionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<DuplicateRule>';
  var rootTagEnd = '</DuplicateRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionOnInsert == null ? '' : '<actionOnInsert>' + DupeActionType(object.actionOnInsert, true) + '</actionOnInsert>'}
	${object.actionOnUpdate == null ? '' : '<actionOnUpdate>' + DupeActionType(object.actionOnUpdate, true) + '</actionOnUpdate>'}
	${object.alertText == null ? '' : '<alertText>' + object.alertText + '</alertText>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.duplicateRuleFilter == null ? '' : '<duplicateRuleFilter>' + DuplicateRuleFilter(object.duplicateRuleFilter, true) + '</duplicateRuleFilter>'}
	${object.duplicateRuleMatchRules == null ? '' : object.duplicateRuleMatchRules.map(p => '<duplicateRuleMatchRules>' + DuplicateRuleMatchRule(p, true) + '</duplicateRuleMatchRules>').join('')}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.operationsOnInsert == null ? '' : object.operationsOnInsert.map(p => '<operationsOnInsert>' + p + '</operationsOnInsert>').join('')}
	${object.operationsOnUpdate == null ? '' : object.operationsOnUpdate.map(p => '<operationsOnUpdate>' + p + '</operationsOnUpdate>').join('')}
	${object.securityOption == null ? '' : '<securityOption>' + DupeSecurityOptionType(object.securityOption, true) + '</securityOption>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}