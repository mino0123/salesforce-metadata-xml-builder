const WorkflowActionReference = require('./WorkflowActionReference');
const WorkflowTimeUnits = require('./WorkflowTimeUnits');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowTimeTrigger>';
  var rootTagEnd = '</WorkflowTimeTrigger>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actions == null ? '' : object.actions.map(p => '<actions>' + WorkflowActionReference(p, true) + '</actions>')}
	${object.offsetFromField == null ? '' : '<offsetFromField>' + object.offsetFromField + '</offsetFromField>'}
	${object.timeLength == null ? '' : '<timeLength>' + object.timeLength + '</timeLength>'}
	${object.workflowTimeTriggerUnit == null ? '' : '<workflowTimeTriggerUnit>' + WorkflowTimeUnits(object.workflowTimeTriggerUnit, true) + '</workflowTimeTriggerUnit>'}
${rootTagEnd}`;
}