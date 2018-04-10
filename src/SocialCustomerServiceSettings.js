const CaseSubjectOption = require('./CaseSubjectOption');

module.exports = (object, asChild) => {
  var rootTagStart = '<SocialCustomerServiceSettings>';
  var rootTagEnd = '</SocialCustomerServiceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseSubjectOption == null ? '' : '<caseSubjectOption>' + CaseSubjectOption(object.caseSubjectOption, true) + '</caseSubjectOption>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}