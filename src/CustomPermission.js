const CustomPermissionDependencyRequired = require('./CustomPermissionDependencyRequired');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomPermission>';
  var rootTagEnd = '</CustomPermission>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connectedApp == null ? '' : '<connectedApp>' + object.connectedApp + '</connectedApp>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.requiredPermission == null ? '' : object.requiredPermission.map(p => '<requiredPermission>' + CustomPermissionDependencyRequired(p, true) + '</requiredPermission>')}
${rootTagEnd}`;
}