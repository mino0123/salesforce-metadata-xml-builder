
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomPermissionDependencyRequired>';
  var rootTagEnd = '</CustomPermissionDependencyRequired>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customPermission == null ? '' : '<customPermission>' + object.customPermission + '</customPermission>'}
	${object.dependency == null ? '' : '<dependency>' + object.dependency + '</dependency>'}
${rootTagEnd}`;
}