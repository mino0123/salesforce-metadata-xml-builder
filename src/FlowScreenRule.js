const FlowCondition = require('./FlowCondition');
const FlowScreenRuleAction = require('./FlowScreenRuleAction');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowScreenRule>';
  var rootTagEnd = '</FlowScreenRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.conditions == null ? '' : object.conditions.map(p => '<conditions>' + FlowCondition(p, true) + '</conditions>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.ruleActions == null ? '' : object.ruleActions.map(p => '<ruleActions>' + FlowScreenRuleAction(p, true) + '</ruleActions>').join('')}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}