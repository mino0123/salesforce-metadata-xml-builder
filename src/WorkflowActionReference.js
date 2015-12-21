const WorkflowActionType = require('./WorkflowActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowActionReference>';
  var rootTagEnd = '</WorkflowActionReference>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + WorkflowActionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}