const ObjectNameCaseValue = require('./ObjectNameCaseValue');
const CustomFieldTranslation = require('./CustomFieldTranslation');
const Gender = require('./Gender');
const LayoutTranslation = require('./LayoutTranslation');
const QuickActionTranslation = require('./QuickActionTranslation');
const RecordTypeTranslation = require('./RecordTypeTranslation');
const SharingReasonTranslation = require('./SharingReasonTranslation');
const StandardFieldTranslation = require('./StandardFieldTranslation');
const StartsWith = require('./StartsWith');
const ValidationRuleTranslation = require('./ValidationRuleTranslation');
const WebLinkTranslation = require('./WebLinkTranslation');
const WorkflowTaskTranslation = require('./WorkflowTaskTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomObjectTranslation>';
  var rootTagEnd = '</CustomObjectTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseValues == null ? '' : object.caseValues.map(p => '<caseValues>' + ObjectNameCaseValue(p, true) + '</caseValues>')}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + CustomFieldTranslation(p, true) + '</fields>')}
	${object.gender == null ? '' : '<gender>' + Gender(object.gender, true) + '</gender>'}
	${object.layouts == null ? '' : object.layouts.map(p => '<layouts>' + LayoutTranslation(p, true) + '</layouts>')}
	${object.nameFieldLabel == null ? '' : '<nameFieldLabel>' + object.nameFieldLabel + '</nameFieldLabel>'}
	${object.quickActions == null ? '' : object.quickActions.map(p => '<quickActions>' + QuickActionTranslation(p, true) + '</quickActions>')}
	${object.recordTypes == null ? '' : object.recordTypes.map(p => '<recordTypes>' + RecordTypeTranslation(p, true) + '</recordTypes>')}
	${object.sharingReasons == null ? '' : object.sharingReasons.map(p => '<sharingReasons>' + SharingReasonTranslation(p, true) + '</sharingReasons>')}
	${object.standardFields == null ? '' : object.standardFields.map(p => '<standardFields>' + StandardFieldTranslation(p, true) + '</standardFields>')}
	${object.startsWith == null ? '' : '<startsWith>' + StartsWith(object.startsWith, true) + '</startsWith>'}
	${object.validationRules == null ? '' : object.validationRules.map(p => '<validationRules>' + ValidationRuleTranslation(p, true) + '</validationRules>')}
	${object.webLinks == null ? '' : object.webLinks.map(p => '<webLinks>' + WebLinkTranslation(p, true) + '</webLinks>')}
	${object.workflowTasks == null ? '' : object.workflowTasks.map(p => '<workflowTasks>' + WorkflowTaskTranslation(p, true) + '</workflowTasks>')}
${rootTagEnd}`;
}