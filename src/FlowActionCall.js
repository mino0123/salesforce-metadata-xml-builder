const InvocableActionType = require('./InvocableActionType');
const FlowConnector = require('./FlowConnector');
const FlowActionCallInputParameter = require('./FlowActionCallInputParameter');
const FlowActionCallOutputParameter = require('./FlowActionCallOutputParameter');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowActionCall>';
  var rootTagEnd = '</FlowActionCall>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionName == null ? '' : '<actionName>' + object.actionName + '</actionName>'}
	${object.actionType == null ? '' : '<actionType>' + InvocableActionType(object.actionType, true) + '</actionType>'}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.inputParameters == null ? '' : object.inputParameters.map(p => '<inputParameters>' + FlowActionCallInputParameter(p, true) + '</inputParameters>').join('')}
	${object.outputParameters == null ? '' : object.outputParameters.map(p => '<outputParameters>' + FlowActionCallOutputParameter(p, true) + '</outputParameters>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}