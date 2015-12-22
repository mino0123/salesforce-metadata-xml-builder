const FlowCondition = require('./FlowCondition');
const FlowConnector = require('./FlowConnector');
const FlowWaitEventInputParameter = require('./FlowWaitEventInputParameter');
const FlowWaitEventOutputParameter = require('./FlowWaitEventOutputParameter');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowWaitEvent>';
  var rootTagEnd = '</FlowWaitEvent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.conditions == null ? '' : object.conditions.map(p => '<conditions>' + FlowCondition(p, true) + '</conditions>')}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.eventType == null ? '' : '<eventType>' + object.eventType + '</eventType>'}
	${object.inputParameters == null ? '' : object.inputParameters.map(p => '<inputParameters>' + FlowWaitEventInputParameter(p, true) + '</inputParameters>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.outputParameters == null ? '' : object.outputParameters.map(p => '<outputParameters>' + FlowWaitEventOutputParameter(p, true) + '</outputParameters>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}