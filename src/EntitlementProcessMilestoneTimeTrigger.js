const WorkflowActionReference = require('./WorkflowActionReference');
const MilestoneTimeUnits = require('./MilestoneTimeUnits');

module.exports = (object, asChild) => {
  var rootTagStart = '<EntitlementProcessMilestoneTimeTrigger>';
  var rootTagEnd = '</EntitlementProcessMilestoneTimeTrigger>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actions == null ? '' : object.actions.map(p => '<actions>' + WorkflowActionReference(p, true) + '</actions>').join('')}
	${object.timeLength == null ? '' : '<timeLength>' + object.timeLength + '</timeLength>'}
	${object.workflowTimeTriggerUnit == null ? '' : '<workflowTimeTriggerUnit>' + MilestoneTimeUnits(object.workflowTimeTriggerUnit, true) + '</workflowTimeTriggerUnit>'}
${rootTagEnd}`;
}