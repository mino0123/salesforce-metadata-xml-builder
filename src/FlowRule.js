const FlowCondition = require('./FlowCondition');
const FlowConnector = require('./FlowConnector');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRule>';
  var rootTagEnd = '</FlowRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.conditions == null ? '' : object.conditions.map(p => '<conditions>' + FlowCondition(p, true) + '</conditions>').join('')}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}