const ObjectNameCaseValue = require('./ObjectNameCaseValue');
const Gender = require('./Gender');
const LookupFilterTranslation = require('./LookupFilterTranslation');
const PicklistValueTranslation = require('./PicklistValueTranslation');
const StartsWith = require('./StartsWith');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomFieldTranslation>';
  var rootTagEnd = '</CustomFieldTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseValues == null ? '' : object.caseValues.map(p => '<caseValues>' + ObjectNameCaseValue(p, true) + '</caseValues>')}
	${object.gender == null ? '' : '<gender>' + Gender(object.gender, true) + '</gender>'}
	${object.help == null ? '' : '<help>' + object.help + '</help>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.lookupFilter == null ? '' : '<lookupFilter>' + LookupFilterTranslation(object.lookupFilter, true) + '</lookupFilter>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.picklistValues == null ? '' : object.picklistValues.map(p => '<picklistValues>' + PicklistValueTranslation(p, true) + '</picklistValues>')}
	${object.relationshipLabel == null ? '' : '<relationshipLabel>' + object.relationshipLabel + '</relationshipLabel>'}
	${object.startsWith == null ? '' : '<startsWith>' + StartsWith(object.startsWith, true) + '</startsWith>'}
${rootTagEnd}`;
}