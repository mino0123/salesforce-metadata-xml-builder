const FlowCondition = require('./FlowCondition');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowVisibilityRule>';
  var rootTagEnd = '</FlowVisibilityRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.conditions == null ? '' : object.conditions.map(p => '<conditions>' + FlowCondition(p, true) + '</conditions>').join('')}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}