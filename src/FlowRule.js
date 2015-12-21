const FlowCondition = require('./FlowCondition');
const FlowConnector = require('./FlowConnector');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRule>';
  var rootTagEnd = '</FlowRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionLogic == null ? '' : '<conditionLogic>' + object.conditionLogic + '</conditionLogic>'}
	${object.conditions == null ? '' : object.conditions.map(p => '<conditions>' + FlowCondition(p, true) + '</conditions>')}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}