const FilterItem = require('./FilterItem');
const EntitlementProcessMilestoneItem = require('./EntitlementProcessMilestoneItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<EntitlementProcess>';
  var rootTagEnd = '</EntitlementProcess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.SObjectType == null ? '' : '<SObjectType>' + object.SObjectType + '</SObjectType>'}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.businessHours == null ? '' : '<businessHours>' + object.businessHours + '</businessHours>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.entryStartDateField == null ? '' : '<entryStartDateField>' + object.entryStartDateField + '</entryStartDateField>'}
	${object.exitCriteriaBooleanFilter == null ? '' : '<exitCriteriaBooleanFilter>' + object.exitCriteriaBooleanFilter + '</exitCriteriaBooleanFilter>'}
	${object.exitCriteriaFilterItems == null ? '' : object.exitCriteriaFilterItems.map(p => '<exitCriteriaFilterItems>' + FilterItem(p, true) + '</exitCriteriaFilterItems>').join('')}
	${object.exitCriteriaFormula == null ? '' : '<exitCriteriaFormula>' + object.exitCriteriaFormula + '</exitCriteriaFormula>'}
	${object.isVersionDefault == null ? '' : '<isVersionDefault>' + object.isVersionDefault + '</isVersionDefault>'}
	${object.milestones == null ? '' : object.milestones.map(p => '<milestones>' + EntitlementProcessMilestoneItem(p, true) + '</milestones>').join('')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.versionMaster == null ? '' : '<versionMaster>' + object.versionMaster + '</versionMaster>'}
	${object.versionNotes == null ? '' : '<versionNotes>' + object.versionNotes + '</versionNotes>'}
	${object.versionNumber == null ? '' : '<versionNumber>' + object.versionNumber + '</versionNumber>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}