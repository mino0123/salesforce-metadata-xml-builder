const ProfileApplicationVisibility = require('./ProfileApplicationVisibility');
const ProfileApexClassAccess = require('./ProfileApexClassAccess');
const ProfileCustomPermissions = require('./ProfileCustomPermissions');
const ProfileExternalDataSourceAccess = require('./ProfileExternalDataSourceAccess');
const ProfileFieldLevelSecurity = require('./ProfileFieldLevelSecurity');
const ProfileLayoutAssignment = require('./ProfileLayoutAssignment');
const ProfileLoginHours = require('./ProfileLoginHours');
const ProfileLoginIpRange = require('./ProfileLoginIpRange');
const ProfileObjectPermissions = require('./ProfileObjectPermissions');
const ProfileApexPageAccess = require('./ProfileApexPageAccess');
const ProfileRecordTypeVisibility = require('./ProfileRecordTypeVisibility');
const ProfileTabVisibility = require('./ProfileTabVisibility');
const ProfileUserPermission = require('./ProfileUserPermission');

module.exports = (object, asChild) => {
  var rootTagStart = '<Profile>';
  var rootTagEnd = '</Profile>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.applicationVisibilities == null ? '' : object.applicationVisibilities.map(p => '<applicationVisibilities>' + ProfileApplicationVisibility(p, true) + '</applicationVisibilities>')}
	${object.classAccesses == null ? '' : object.classAccesses.map(p => '<classAccesses>' + ProfileApexClassAccess(p, true) + '</classAccesses>')}
	${object.custom == null ? '' : '<custom>' + object.custom + '</custom>'}
	${object.customPermissions == null ? '' : object.customPermissions.map(p => '<customPermissions>' + ProfileCustomPermissions(p, true) + '</customPermissions>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.externalDataSourceAccesses == null ? '' : object.externalDataSourceAccesses.map(p => '<externalDataSourceAccesses>' + ProfileExternalDataSourceAccess(p, true) + '</externalDataSourceAccesses>')}
	${object.fieldPermissions == null ? '' : object.fieldPermissions.map(p => '<fieldPermissions>' + ProfileFieldLevelSecurity(p, true) + '</fieldPermissions>')}
	${object.layoutAssignments == null ? '' : object.layoutAssignments.map(p => '<layoutAssignments>' + ProfileLayoutAssignment(p, true) + '</layoutAssignments>')}
	${object.loginHours == null ? '' : '<loginHours>' + ProfileLoginHours(object.loginHours, true) + '</loginHours>'}
	${object.loginIpRanges == null ? '' : object.loginIpRanges.map(p => '<loginIpRanges>' + ProfileLoginIpRange(p, true) + '</loginIpRanges>')}
	${object.objectPermissions == null ? '' : object.objectPermissions.map(p => '<objectPermissions>' + ProfileObjectPermissions(p, true) + '</objectPermissions>')}
	${object.pageAccesses == null ? '' : object.pageAccesses.map(p => '<pageAccesses>' + ProfileApexPageAccess(p, true) + '</pageAccesses>')}
	${object.recordTypeVisibilities == null ? '' : object.recordTypeVisibilities.map(p => '<recordTypeVisibilities>' + ProfileRecordTypeVisibility(p, true) + '</recordTypeVisibilities>')}
	${object.tabVisibilities == null ? '' : object.tabVisibilities.map(p => '<tabVisibilities>' + ProfileTabVisibility(p, true) + '</tabVisibilities>')}
	${object.userLicense == null ? '' : '<userLicense>' + object.userLicense + '</userLicense>'}
	${object.userPermissions == null ? '' : object.userPermissions.map(p => '<userPermissions>' + ProfileUserPermission(p, true) + '</userPermissions>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}