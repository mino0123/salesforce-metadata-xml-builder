const SendAction = require('./SendAction');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowSend>';
  var rootTagEnd = '</WorkflowSend>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + SendAction(object.action, true) + '</action>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
${rootTagEnd}`;
}