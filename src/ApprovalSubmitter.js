const ProcessSubmitterType = require('./ProcessSubmitterType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ApprovalSubmitter>';
  var rootTagEnd = '</ApprovalSubmitter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.submitter == null ? '' : '<submitter>' + object.submitter + '</submitter>'}
	${object.type == null ? '' : '<type>' + ProcessSubmitterType(object.type, true) + '</type>'}
${rootTagEnd}`;
}