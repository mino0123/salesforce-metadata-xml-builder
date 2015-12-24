const FilterItem = require('./FilterItem');
const WorkflowActionReference = require('./WorkflowActionReference');
const EntitlementProcessMilestoneTimeTrigger = require('./EntitlementProcessMilestoneTimeTrigger');

module.exports = (object, asChild) => {
  var rootTagStart = '<EntitlementProcessMilestoneItem>';
  var rootTagEnd = '</EntitlementProcessMilestoneItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.businessHours == null ? '' : '<businessHours>' + object.businessHours + '</businessHours>'}
	${object.criteriaBooleanFilter == null ? '' : '<criteriaBooleanFilter>' + object.criteriaBooleanFilter + '</criteriaBooleanFilter>'}
	${object.milestoneCriteriaFilterItems == null ? '' : object.milestoneCriteriaFilterItems.map(p => '<milestoneCriteriaFilterItems>' + FilterItem(p, true) + '</milestoneCriteriaFilterItems>').join('')}
	${object.milestoneCriteriaFormula == null ? '' : '<milestoneCriteriaFormula>' + object.milestoneCriteriaFormula + '</milestoneCriteriaFormula>'}
	${object.milestoneName == null ? '' : '<milestoneName>' + object.milestoneName + '</milestoneName>'}
	${object.minutesCustomClass == null ? '' : '<minutesCustomClass>' + object.minutesCustomClass + '</minutesCustomClass>'}
	${object.minutesToComplete == null ? '' : '<minutesToComplete>' + object.minutesToComplete + '</minutesToComplete>'}
	${object.successActions == null ? '' : object.successActions.map(p => '<successActions>' + WorkflowActionReference(p, true) + '</successActions>').join('')}
	${object.timeTriggers == null ? '' : object.timeTriggers.map(p => '<timeTriggers>' + EntitlementProcessMilestoneTimeTrigger(p, true) + '</timeTriggers>').join('')}
	${object.useCriteriaStartTime == null ? '' : '<useCriteriaStartTime>' + object.useCriteriaStartTime + '</useCriteriaStartTime>'}
${rootTagEnd}`;
}