const ApprovalSubmitter = require('./ApprovalSubmitter');
const ApprovalPageField = require('./ApprovalPageField');
const ApprovalStep = require('./ApprovalStep');
const ApprovalEntryCriteria = require('./ApprovalEntryCriteria');
const ApprovalAction = require('./ApprovalAction');
const NextAutomatedApprover = require('./NextAutomatedApprover');
const RecordEditabilityType = require('./RecordEditabilityType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalProcess>';
  var rootTagEnd = '</ApprovalProcess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.allowRecall == null ? '' : '<allowRecall>' + object.allowRecall + '</allowRecall>'}
	${object.allowedSubmitters == null ? '' : object.allowedSubmitters.map(p => '<allowedSubmitters>' + ApprovalSubmitter(p, true) + '</allowedSubmitters>')}
	${object.approvalPageFields == null ? '' : '<approvalPageFields>' + ApprovalPageField(object.approvalPageFields, true) + '</approvalPageFields>'}
	${object.approvalStep == null ? '' : object.approvalStep.map(p => '<approvalStep>' + ApprovalStep(p, true) + '</approvalStep>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.emailTemplate == null ? '' : '<emailTemplate>' + object.emailTemplate + '</emailTemplate>'}
	${object.enableMobileDeviceAccess == null ? '' : '<enableMobileDeviceAccess>' + object.enableMobileDeviceAccess + '</enableMobileDeviceAccess>'}
	${object.entryCriteria == null ? '' : '<entryCriteria>' + ApprovalEntryCriteria(object.entryCriteria, true) + '</entryCriteria>'}
	${object.finalApprovalActions == null ? '' : '<finalApprovalActions>' + ApprovalAction(object.finalApprovalActions, true) + '</finalApprovalActions>'}
	${object.finalApprovalRecordLock == null ? '' : '<finalApprovalRecordLock>' + object.finalApprovalRecordLock + '</finalApprovalRecordLock>'}
	${object.finalRejectionActions == null ? '' : '<finalRejectionActions>' + ApprovalAction(object.finalRejectionActions, true) + '</finalRejectionActions>'}
	${object.finalRejectionRecordLock == null ? '' : '<finalRejectionRecordLock>' + object.finalRejectionRecordLock + '</finalRejectionRecordLock>'}
	${object.initialSubmissionActions == null ? '' : '<initialSubmissionActions>' + ApprovalAction(object.initialSubmissionActions, true) + '</initialSubmissionActions>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.nextAutomatedApprover == null ? '' : '<nextAutomatedApprover>' + NextAutomatedApprover(object.nextAutomatedApprover, true) + '</nextAutomatedApprover>'}
	${object.postTemplate == null ? '' : '<postTemplate>' + object.postTemplate + '</postTemplate>'}
	${object.recallActions == null ? '' : '<recallActions>' + ApprovalAction(object.recallActions, true) + '</recallActions>'}
	${object.recordEditability == null ? '' : '<recordEditability>' + RecordEditabilityType(object.recordEditability, true) + '</recordEditability>'}
	${object.showApprovalHistory == null ? '' : '<showApprovalHistory>' + object.showApprovalHistory + '</showApprovalHistory>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}