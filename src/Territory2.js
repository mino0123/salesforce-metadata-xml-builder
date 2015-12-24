const FieldValue = require('./FieldValue');
const Territory2RuleAssociation = require('./Territory2RuleAssociation');

module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2>';
  var rootTagEnd = '</Territory2>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accountAccessLevel == null ? '' : '<accountAccessLevel>' + object.accountAccessLevel + '</accountAccessLevel>'}
	${object.caseAccessLevel == null ? '' : '<caseAccessLevel>' + object.caseAccessLevel + '</caseAccessLevel>'}
	${object.contactAccessLevel == null ? '' : '<contactAccessLevel>' + object.contactAccessLevel + '</contactAccessLevel>'}
	${object.customFields == null ? '' : object.customFields.map(p => '<customFields>' + FieldValue(p, true) + '</customFields>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.opportunityAccessLevel == null ? '' : '<opportunityAccessLevel>' + object.opportunityAccessLevel + '</opportunityAccessLevel>'}
	${object.parentTerritory == null ? '' : '<parentTerritory>' + object.parentTerritory + '</parentTerritory>'}
	${object.ruleAssociations == null ? '' : object.ruleAssociations.map(p => '<ruleAssociations>' + Territory2RuleAssociation(p, true) + '</ruleAssociations>').join('')}
	${object.territory2Type == null ? '' : '<territory2Type>' + object.territory2Type + '</territory2Type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}