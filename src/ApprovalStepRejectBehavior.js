const StepRejectBehaviorType = require('./StepRejectBehaviorType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalStepRejectBehavior>';
  var rootTagEnd = '</ApprovalStepRejectBehavior>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.type == null ? '' : '<type>' + StepRejectBehaviorType(object.type, true) + '</type>'}
${rootTagEnd}`;
}