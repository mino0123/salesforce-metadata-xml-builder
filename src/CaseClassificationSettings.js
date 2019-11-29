
module.exports = (object, asChild) => {
  var rootTagStart = '<CaseClassificationSettings>';
  var rootTagEnd = '</CaseClassificationSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseClassificationRecommendations == null ? '' : '<caseClassificationRecommendations>' + object.caseClassificationRecommendations + '</caseClassificationRecommendations>'}
	${object.reRunAttributeBasedRules == null ? '' : '<reRunAttributeBasedRules>' + object.reRunAttributeBasedRules + '</reRunAttributeBasedRules>'}
	${object.runAssignmentRules == null ? '' : '<runAssignmentRules>' + object.runAssignmentRules + '</runAssignmentRules>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}