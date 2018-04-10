const ChatterExtensionType = require('./ChatterExtensionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ChatterExtension>';
  var rootTagEnd = '</ChatterExtension>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.compositionComponent == null ? '' : '<compositionComponent>' + object.compositionComponent + '</compositionComponent>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.extensionName == null ? '' : '<extensionName>' + object.extensionName + '</extensionName>'}
	${object.headerText == null ? '' : '<headerText>' + object.headerText + '</headerText>'}
	${object.hoverText == null ? '' : '<hoverText>' + object.hoverText + '</hoverText>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.renderComponent == null ? '' : '<renderComponent>' + object.renderComponent + '</renderComponent>'}
	${object.type == null ? '' : '<type>' + ChatterExtensionType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}