const FlowConnector = require('./FlowConnector');
const FlowRule = require('./FlowRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowDecision>';
  var rootTagEnd = '</FlowDecision>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultConnector == null ? '' : '<defaultConnector>' + FlowConnector(object.defaultConnector, true) + '</defaultConnector>'}
	${object.defaultConnectorLabel == null ? '' : '<defaultConnectorLabel>' + object.defaultConnectorLabel + '</defaultConnectorLabel>'}
	${object.rules == null ? '' : object.rules.map(p => '<rules>' + FlowRule(p, true) + '</rules>')}
${rootTagEnd}`;
}