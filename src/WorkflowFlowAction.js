const WorkflowFlowActionParameter = require('./WorkflowFlowActionParameter');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowFlowAction>';
  var rootTagEnd = '</WorkflowFlowAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.flow == null ? '' : '<flow>' + object.flow + '</flow>'}
	${object.flowInputs == null ? '' : object.flowInputs.map(p => '<flowInputs>' + WorkflowFlowActionParameter(p, true) + '</flowInputs>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}