const SharingCriteriaRule = require('./SharingCriteriaRule');
const SharingOwnerRule = require('./SharingOwnerRule');
const SharingTerritoryRule = require('./SharingTerritoryRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingRules>';
  var rootTagEnd = '</SharingRules>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sharingCriteriaRules == null ? '' : object.sharingCriteriaRules.map(p => '<sharingCriteriaRules>' + SharingCriteriaRule(p, true) + '</sharingCriteriaRules>').join('')}
	${object.sharingOwnerRules == null ? '' : object.sharingOwnerRules.map(p => '<sharingOwnerRules>' + SharingOwnerRule(p, true) + '</sharingOwnerRules>').join('')}
	${object.sharingTerritoryRules == null ? '' : object.sharingTerritoryRules.map(p => '<sharingTerritoryRules>' + SharingTerritoryRule(p, true) + '</sharingTerritoryRules>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}