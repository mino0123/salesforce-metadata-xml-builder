const WorkflowActionReference = require('./WorkflowActionReference');
const FilterItem = require('./FilterItem');
const WorkflowTriggerTypes = require('./WorkflowTriggerTypes');
const WorkflowTimeTrigger = require('./WorkflowTimeTrigger');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowRule>';
  var rootTagEnd = '</WorkflowRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actions == null ? '' : object.actions.map(p => '<actions>' + WorkflowActionReference(p, true) + '</actions>').join('')}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + FilterItem(p, true) + '</criteriaItems>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.triggerType == null ? '' : '<triggerType>' + WorkflowTriggerTypes(object.triggerType, true) + '</triggerType>'}
	${object.workflowTimeTriggers == null ? '' : object.workflowTimeTriggers.map(p => '<workflowTimeTriggers>' + WorkflowTimeTrigger(p, true) + '</workflowTimeTriggers>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}