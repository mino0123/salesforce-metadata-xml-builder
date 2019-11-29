const FilterItem = require('./FilterItem');
const AccountSharingRuleSettings = require('./AccountSharingRuleSettings');
const SharedTo = require('./SharedTo');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingGuestRule>';
  var rootTagEnd = '</SharingGuestRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteriaItems == null ? '' : object.criteriaItems.map(p => '<criteriaItems>' + FilterItem(p, true) + '</criteriaItems>').join('')}
	${object.accessLevel == null ? '' : '<accessLevel>' + object.accessLevel + '</accessLevel>'}
	${object.accountSettings == null ? '' : '<accountSettings>' + AccountSharingRuleSettings(object.accountSettings, true) + '</accountSettings>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + SharedTo(object.sharedTo, true) + '</sharedTo>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}