const PermissionSetApplicationVisibility = require('./PermissionSetApplicationVisibility');
const PermissionSetApexClassAccess = require('./PermissionSetApexClassAccess');
const PermissionSetCustomPermissions = require('./PermissionSetCustomPermissions');
const PermissionSetExternalDataSourceAccess = require('./PermissionSetExternalDataSourceAccess');
const PermissionSetFieldPermissions = require('./PermissionSetFieldPermissions');
const PermissionSetObjectPermissions = require('./PermissionSetObjectPermissions');
const PermissionSetApexPageAccess = require('./PermissionSetApexPageAccess');
const PermissionSetRecordTypeVisibility = require('./PermissionSetRecordTypeVisibility');
const PermissionSetTabSetting = require('./PermissionSetTabSetting');
const PermissionSetUserPermission = require('./PermissionSetUserPermission');

module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSet>';
  var rootTagEnd = '</PermissionSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.applicationVisibilities == null ? '' : object.applicationVisibilities.map(p => '<applicationVisibilities>' + PermissionSetApplicationVisibility(p, true) + '</applicationVisibilities>').join('')}
	${object.classAccesses == null ? '' : object.classAccesses.map(p => '<classAccesses>' + PermissionSetApexClassAccess(p, true) + '</classAccesses>').join('')}
	${object.customPermissions == null ? '' : object.customPermissions.map(p => '<customPermissions>' + PermissionSetCustomPermissions(p, true) + '</customPermissions>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.externalDataSourceAccesses == null ? '' : object.externalDataSourceAccesses.map(p => '<externalDataSourceAccesses>' + PermissionSetExternalDataSourceAccess(p, true) + '</externalDataSourceAccesses>').join('')}
	${object.fieldPermissions == null ? '' : object.fieldPermissions.map(p => '<fieldPermissions>' + PermissionSetFieldPermissions(p, true) + '</fieldPermissions>').join('')}
	${object.hasActivationRequired == null ? '' : '<hasActivationRequired>' + object.hasActivationRequired + '</hasActivationRequired>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.objectPermissions == null ? '' : object.objectPermissions.map(p => '<objectPermissions>' + PermissionSetObjectPermissions(p, true) + '</objectPermissions>').join('')}
	${object.pageAccesses == null ? '' : object.pageAccesses.map(p => '<pageAccesses>' + PermissionSetApexPageAccess(p, true) + '</pageAccesses>').join('')}
	${object.recordTypeVisibilities == null ? '' : object.recordTypeVisibilities.map(p => '<recordTypeVisibilities>' + PermissionSetRecordTypeVisibility(p, true) + '</recordTypeVisibilities>').join('')}
	${object.tabSettings == null ? '' : object.tabSettings.map(p => '<tabSettings>' + PermissionSetTabSetting(p, true) + '</tabSettings>').join('')}
	${object.userLicense == null ? '' : '<userLicense>' + object.userLicense + '</userLicense>'}
	${object.userPermissions == null ? '' : object.userPermissions.map(p => '<userPermissions>' + PermissionSetUserPermission(p, true) + '</userPermissions>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}