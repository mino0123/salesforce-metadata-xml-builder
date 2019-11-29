const ProfileApplicationVisibility = require('./ProfileApplicationVisibility');
const ProfileCategoryGroupVisibility = require('./ProfileCategoryGroupVisibility');
const ProfileApexClassAccess = require('./ProfileApexClassAccess');
const ProfileCustomMetadataTypeAccess = require('./ProfileCustomMetadataTypeAccess');
const ProfileCustomPermissions = require('./ProfileCustomPermissions');
const ProfileExternalDataSourceAccess = require('./ProfileExternalDataSourceAccess');
const ProfileFieldLevelSecurity = require('./ProfileFieldLevelSecurity');
const ProfileFlowAccess = require('./ProfileFlowAccess');
const ProfileLayoutAssignment = require('./ProfileLayoutAssignment');
const ProfileLoginHours = require('./ProfileLoginHours');
const ProfileLoginIpRange = require('./ProfileLoginIpRange');
const ProfileObjectPermissions = require('./ProfileObjectPermissions');
const ProfileApexPageAccess = require('./ProfileApexPageAccess');
const ProfileActionOverride = require('./ProfileActionOverride');
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
	${object.applicationVisibilities == null ? '' : object.applicationVisibilities.map(p => '<applicationVisibilities>' + ProfileApplicationVisibility(p, true) + '</applicationVisibilities>').join('')}
	${object.categoryGroupVisibilities == null ? '' : object.categoryGroupVisibilities.map(p => '<categoryGroupVisibilities>' + ProfileCategoryGroupVisibility(p, true) + '</categoryGroupVisibilities>').join('')}
	${object.classAccesses == null ? '' : object.classAccesses.map(p => '<classAccesses>' + ProfileApexClassAccess(p, true) + '</classAccesses>').join('')}
	${object.custom == null ? '' : '<custom>' + object.custom + '</custom>'}
	${object.customMetadataTypeAccesses == null ? '' : object.customMetadataTypeAccesses.map(p => '<customMetadataTypeAccesses>' + ProfileCustomMetadataTypeAccess(p, true) + '</customMetadataTypeAccesses>').join('')}
	${object.customPermissions == null ? '' : object.customPermissions.map(p => '<customPermissions>' + ProfileCustomPermissions(p, true) + '</customPermissions>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.externalDataSourceAccesses == null ? '' : object.externalDataSourceAccesses.map(p => '<externalDataSourceAccesses>' + ProfileExternalDataSourceAccess(p, true) + '</externalDataSourceAccesses>').join('')}
	${object.fieldPermissions == null ? '' : object.fieldPermissions.map(p => '<fieldPermissions>' + ProfileFieldLevelSecurity(p, true) + '</fieldPermissions>').join('')}
	${object.flowAccesses == null ? '' : object.flowAccesses.map(p => '<flowAccesses>' + ProfileFlowAccess(p, true) + '</flowAccesses>').join('')}
	${object.layoutAssignments == null ? '' : object.layoutAssignments.map(p => '<layoutAssignments>' + ProfileLayoutAssignment(p, true) + '</layoutAssignments>').join('')}
	${object.loginHours == null ? '' : '<loginHours>' + ProfileLoginHours(object.loginHours, true) + '</loginHours>'}
	${object.loginIpRanges == null ? '' : object.loginIpRanges.map(p => '<loginIpRanges>' + ProfileLoginIpRange(p, true) + '</loginIpRanges>').join('')}
	${object.objectPermissions == null ? '' : object.objectPermissions.map(p => '<objectPermissions>' + ProfileObjectPermissions(p, true) + '</objectPermissions>').join('')}
	${object.pageAccesses == null ? '' : object.pageAccesses.map(p => '<pageAccesses>' + ProfileApexPageAccess(p, true) + '</pageAccesses>').join('')}
	${object.profileActionOverrides == null ? '' : object.profileActionOverrides.map(p => '<profileActionOverrides>' + ProfileActionOverride(p, true) + '</profileActionOverrides>').join('')}
	${object.recordTypeVisibilities == null ? '' : object.recordTypeVisibilities.map(p => '<recordTypeVisibilities>' + ProfileRecordTypeVisibility(p, true) + '</recordTypeVisibilities>').join('')}
	${object.tabVisibilities == null ? '' : object.tabVisibilities.map(p => '<tabVisibilities>' + ProfileTabVisibility(p, true) + '</tabVisibilities>').join('')}
	${object.userLicense == null ? '' : '<userLicense>' + object.userLicense + '</userLicense>'}
	${object.userPermissions == null ? '' : object.userPermissions.map(p => '<userPermissions>' + ProfileUserPermission(p, true) + '</userPermissions>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}