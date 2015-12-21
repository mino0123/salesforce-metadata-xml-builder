const InvocableActionType = require('./InvocableActionType');
const FlowConnector = require('./FlowConnector');
const FlowActionCallInputParameter = require('./FlowActionCallInputParameter');
const FlowActionCallOutputParameter = require('./FlowActionCallOutputParameter');

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
	${object.inputParameters == null ? '' : object.inputParameters.map(p => '<inputParameters>' + FlowActionCallInputParameter(p, true) + '</inputParameters>')}
	${object.outputParameters == null ? '' : object.outputParameters.map(p => '<outputParameters>' + FlowActionCallOutputParameter(p, true) + '</outputParameters>')}
${rootTagEnd}`;
}