const NavigationMenuItem = require('./NavigationMenuItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<NavigationLinkSet>';
  var rootTagEnd = '</NavigationLinkSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.navigationMenuItem == null ? '' : object.navigationMenuItem.map(p => '<navigationMenuItem>' + NavigationMenuItem(p, true) + '</navigationMenuItem>').join('')}
${rootTagEnd}`;
}