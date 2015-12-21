const WorkflowActionReference = require('./WorkflowActionReference');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalAction>';
  var rootTagEnd = '</ApprovalAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : object.action.map(p => '<action>' + WorkflowActionReference(p, true) + '</action>')}
${rootTagEnd}`;
}