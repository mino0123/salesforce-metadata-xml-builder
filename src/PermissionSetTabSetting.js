const PermissionSetTabVisibility = require('./PermissionSetTabVisibility');

module.exports = (object, asChild) => {
  var rootTagStart = '<PermissionSetTabSetting>';
  var rootTagEnd = '</PermissionSetTabSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.tab == null ? '' : '<tab>' + object.tab + '</tab>'}
	${object.visibility == null ? '' : '<visibility>' + PermissionSetTabVisibility(object.visibility, true) + '</visibility>'}
${rootTagEnd}`;
}