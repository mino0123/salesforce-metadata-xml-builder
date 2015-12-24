const Approver = require('./Approver');
const RoutingType = require('./RoutingType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalStepApprover>';
  var rootTagEnd = '</ApprovalStepApprover>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.approver == null ? '' : object.approver.map(p => '<approver>' + Approver(p, true) + '</approver>').join('')}
	${object.whenMultipleApprovers == null ? '' : '<whenMultipleApprovers>' + RoutingType(object.whenMultipleApprovers, true) + '</whenMultipleApprovers>'}
${rootTagEnd}`;
}