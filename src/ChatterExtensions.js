const ChatterExtensionType = require('./ChatterExtensionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterExtensions>';
  var rootTagEnd = '</ChatterExtensions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.compComponent == null ? '' : '<compComponent>' + object.compComponent + '</compComponent>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.extensionName == null ? '' : '<extensionName>' + object.extensionName + '</extensionName>'}
	${object.headerText == null ? '' : '<headerText>' + object.headerText + '</headerText>'}
	${object.hoverText == null ? '' : '<hoverText>' + object.hoverText + '</hoverText>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.isBlocked == null ? '' : '<isBlocked>' + object.isBlocked + '</isBlocked>'}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.rendComponent == null ? '' : '<rendComponent>' + object.rendComponent + '</rendComponent>'}
	${object.type == null ? '' : '<type>' + ChatterExtensionType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}