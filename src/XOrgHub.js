const XOrgHubSharedObject = require('./XOrgHubSharedObject');

module.exports = (object, asChild) => {
  var rootTagStart = '<XOrgHub>';
  var rootTagEnd = '</XOrgHub>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.lockSharedObjects == null ? '' : '<lockSharedObjects>' + object.lockSharedObjects + '</lockSharedObjects>'}
	${object.permissionSets == null ? '' : object.permissionSets.map(p => '<permissionSets>' + p + '</permissionSets>').join('')}
	${object.sharedObjects == null ? '' : object.sharedObjects.map(p => '<sharedObjects>' + XOrgHubSharedObject(p, true) + '</sharedObjects>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}