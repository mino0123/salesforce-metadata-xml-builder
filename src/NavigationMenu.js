const NavigationMenuItem = require('./NavigationMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<NavigationMenu>';
  var rootTagEnd = '</NavigationMenu>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.container == null ? '' : '<container>' + object.container + '</container>'}
	${object.containerType == null ? '' : '<containerType>' + object.containerType + '</containerType>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.navigationMenuItem == null ? '' : object.navigationMenuItem.map(p => '<navigationMenuItem>' + NavigationMenuItem(p, true) + '</navigationMenuItem>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}