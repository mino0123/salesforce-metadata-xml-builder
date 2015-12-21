
module.exports = (object, asChild) => {
  var rootTagStart = '<AccountSharingRuleSettings>';
  var rootTagEnd = '</AccountSharingRuleSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseAccessLevel == null ? '' : '<caseAccessLevel>' + object.caseAccessLevel + '</caseAccessLevel>'}
	${object.contactAccessLevel == null ? '' : '<contactAccessLevel>' + object.contactAccessLevel + '</contactAccessLevel>'}
	${object.opportunityAccessLevel == null ? '' : '<opportunityAccessLevel>' + object.opportunityAccessLevel + '</opportunityAccessLevel>'}
${rootTagEnd}`;
}