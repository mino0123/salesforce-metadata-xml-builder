
module.exports = (object, asChild) => {
  var rootTagStart = '<DelegateGroup>';
  var rootTagEnd = '</DelegateGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customObjects == null ? '' : object.customObjects.map(p => '<customObjects>' + p + '</customObjects>').join('')}
	${object.groups == null ? '' : object.groups.map(p => '<groups>' + p + '</groups>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.loginAccess == null ? '' : '<loginAccess>' + object.loginAccess + '</loginAccess>'}
	${object.permissionSets == null ? '' : object.permissionSets.map(p => '<permissionSets>' + p + '</permissionSets>').join('')}
	${object.profiles == null ? '' : object.profiles.map(p => '<profiles>' + p + '</profiles>').join('')}
	${object.roles == null ? '' : object.roles.map(p => '<roles>' + p + '</roles>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}