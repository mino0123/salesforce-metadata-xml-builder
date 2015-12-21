const ApprovalAction = require('./ApprovalAction');
const ApprovalStepApprover = require('./ApprovalStepApprover');
const ApprovalEntryCriteria = require('./ApprovalEntryCriteria');
const StepCriteriaNotMetType = require('./StepCriteriaNotMetType');
const ApprovalStepRejectBehavior = require('./ApprovalStepRejectBehavior');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalStep>';
  var rootTagEnd = '</ApprovalStep>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowDelegate == null ? '' : '<allowDelegate>' + object.allowDelegate + '</allowDelegate>'}
	${object.approvalActions == null ? '' : '<approvalActions>' + ApprovalAction(object.approvalActions, true) + '</approvalActions>'}
	${object.assignedApprover == null ? '' : '<assignedApprover>' + ApprovalStepApprover(object.assignedApprover, true) + '</assignedApprover>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.entryCriteria == null ? '' : '<entryCriteria>' + ApprovalEntryCriteria(object.entryCriteria, true) + '</entryCriteria>'}
	${object.ifCriteriaNotMet == null ? '' : '<ifCriteriaNotMet>' + StepCriteriaNotMetType(object.ifCriteriaNotMet, true) + '</ifCriteriaNotMet>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.rejectBehavior == null ? '' : '<rejectBehavior>' + ApprovalStepRejectBehavior(object.rejectBehavior, true) + '</rejectBehavior>'}
	${object.rejectionActions == null ? '' : '<rejectionActions>' + ApprovalAction(object.rejectionActions, true) + '</rejectionActions>'}
${rootTagEnd}`;
}